import React, { createContext, useContext, useMemo, useRef, useEffect, useCallback, forwardRef } from 'react';

type RouterProps = {
  children?: React.ReactNode;
  static?: boolean;
  router: {
    listen: (callback: Function) => void;
    current: any;
    resolve: (path: string) => { href: string; path: string };
  };
};

const RouterContext = createContext(null);
const NavigationContext = createContext(null);
const RouteContext = createContext({
  depth: 0,
  params: {},
  pathname: '',
  route: null,
});

const useRouter = () => {
  if (!useContext(RouterContext)) {
    throw new Error('useRouter() may be used only in the context of a <Router> component.');
  }
  return useContext(RouterContext).router;
};

const useNavigate = () => {
  if (!useContext(RouterContext)) {
    throw new Error('useNavigate() may be used only in the context of a <Router> component.');
  }

  const { router } = useContext(RouterContext);
  const { pathname } = useContext(RouteContext);
  const isFirstRender = useRef(false);

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  return useCallback(
    (to: string | number, options: { replace?: boolean; state?: any } = {}) => {
      if (isFirstRender.current) {
        if (typeof to === 'number') {
          router.go(to);
        } else {
          const { path } = router.resolve(to, pathname);
          (options.replace ? router.replace : router.push)(path, options.state);
        }
      } else {
        console.warn('You should call navigate() in a useEffect, not when your component is first rendered.');
      }
    },
    [router, pathname]
  );
};

const useHref = (to: string) => {
  if (!useContext(RouterContext)) {
    throw new Error('useHref() may be used only in the context of a <Router> component.');
  }

  const { router } = useContext(RouterContext);
  const resolvedPath = useMemo(() => router.resolve(to).href, [to]);

  return resolvedPath;
};

const useParams = () => {
  return useContext(NavigationContext).params;
};

const useMatch = () => {
  return useContext(NavigationContext).matches;
};

const Route = (props: { match: any; depth: number; parentPathname: string; parentParams: any; children: React.ReactNode }) => {
  const { match, depth, parentPathname, parentParams, children } = props;
  const { route, params, pathname } = match;
  const renderedComponent = useMemo(() => (route.component ? React.createElement(route.component, route.props) : null), [
    route.component,
    route.props,
  ]);

  return (
    <RouteContext.Provider
      value={{
        depth: depth + 1,
        params: { ...parentParams, ...params },
        pathname: parentPathname + pathname,
        route: route,
      }}
    >
      {renderedComponent}
    </RouteContext.Provider>
  );
};

const Routes = () => {
  const { depth, pathname, params } = useContext(RouteContext);
  const { matches } = useMatch();

  if (!matches.length) {
    return null;
  }

  const currentMatch = matches[depth];

  return currentMatch ? (
    <Route match={currentMatch} depth={depth} parentPathname={pathname} parentParams={params} />
  ) : null;
};

const DefaultComponent = React.createElement(Routes, null);

const Link = forwardRef((props: any, ref) => {
  const { onClick, replace = false, state, target, to, ...rest } = props;
  const href = useHref(to);
  const navigate = useNavigate();
  const matches = useMatch();
  const resolvedPath = useMemo(() => {
    return useHref(to);
  }, [to]);

  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        if (!e.defaultPrevented && e.button === 0 && (!target || target === '_self') && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          const shouldReplace = replace || (matches && JSON.stringify(matches) === JSON.stringify(resolvedPath));
          navigate(to, { replace: shouldReplace, state });
        }
      }}
      ref={ref}
      target={target}
    />
  );
});

export { RouterProps, useRouter, useNavigate, useHref, useParams, useMatch, Route, Routes, DefaultComponent, Link };
