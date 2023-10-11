__d("lazyLoadComponent", ["BootloaderResource", "react", "useHeroBootloadedComponent"], (function(a, b, c, d, e, f, g) {
    var h = d("react")
      , i = new Map();
    function j(a, b) {
        i.set(a, b)
    }
    function k(a) {
        return i.get(a)
    }
    function a(a) {
        var b = k(a);
        if (b)
            return b;
        function e(b, e) {
            e === void 0 && (e = void 0);
            var f = d("BootloaderResource").read(a);
            c("useHeroBootloadedComponent")(a);
            return h.jsx(f, babelHelpers["extends"]({}, b, {
                ref: e
            }))
        }
        e.displayName = e.name + " [from " + f.id + "]";
        e.displayName = "lazyLoadComponent(" + a.getModuleId() + ")";
        b = h.forwardRef(e);
        j(a, b);
        return b
    }
    g["default"] = a
}
), 98);




import React, { forwardRef, Ref } from 'react';
import { BootloaderResource } from './BootloaderResource'; // You may need to replace this import with the actual import path.
import useHeroBootloadedComponent from './useHeroBootloadedComponent'; // You may need to replace this import with the actual import path.

const componentMap = new Map<string, React.FC<any>>();

function setComponent(name: string, component: React.FC<any>): void {
  componentMap.set(name, component);
}

function getComponent(name: string): React.FC<any> | undefined {
  return componentMap.get(name);
}

function lazyLoadComponent<A extends React.HTMLAttributes<HTMLElement>>(
  name: string
): React.ForwardRefExoticComponent<A> {
  const existingComponent = getComponent(name);
  if (existingComponent) return existingComponent;

  function LazyLoadedComponent(
    props: A,
    ref: Ref<HTMLElement> | undefined
  ): React.ReactElement {
    const resource = BootloaderResource.read(name);
    useHeroBootloadedComponent(name);
    return React.createElement(resource, { ...props, ref });
  }

  LazyLoadedComponent.displayName = `lazyLoadComponent(${name})`;

  const ComponentWithRef = forwardRef(LazyLoadedComponent);
  setComponent(name, ComponentWithRef);

  return ComponentWithRef;
}

export default lazyLoadComponent;
