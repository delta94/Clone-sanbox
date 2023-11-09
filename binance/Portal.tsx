import { useState, useLayoutEffect, useEffect, forwardRef, isValidElement, cloneElement, createContext } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import { useMultiSourcePortals } from 'useMultiSourcePortals';

const useLayoutOrEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;


function forwardRefFunc(func, value) {
  if (typeof func === 'function') {
    func(value);
  } else if (func) {
    func.current = value;
  }
}

const Portal = forwardRef((props, ref) => {
  const { children, container, disablePortal = false } = props;
  const [portalContainer, setPortalContainer] = useState();

  useLayoutOrEffect(() => {
    if (!disablePortal) {
      setPortalContainer((containerArg) => {
        const containerElement = typeof containerArg === 'function' ? containerArg() : containerArg;
        return findDOMNode(containerElement) || document.body;
      });
    }
  }, [container, disablePortal]);

  useLayoutOrEffect(() => {
    if (portalContainer && !disablePortal) {
      forwardRefFunc(ref, portalContainer);
      return () => {
        forwardRefFunc(ref, null);
      };
    }
  }, [ref, portalContainer, disablePortal]);

  if (disablePortal) {
    return isValidElement(children) ? cloneElement(children, { ref }) : children;
  }

  return portalContainer ? createPortal(children, portalContainer) : null;
});

const { Source } = useMultiSourcePortals();
const PortalContext = createContext(Source);

export { PortalContext, Portal };
