import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';

type Dimension = {
    x: number;
    y: number;
    width: number;
    height: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
};

const defaultDimension: Dimension = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
};

const isBrowser = typeof window !== 'undefined';

const useEffectiveLayout = isBrowser ? useLayoutEffect : useEffect;

const useResizeObserver = (): [React.RefObject<Element>, Dimension] => {
    if (isBrowser && typeof window.ResizeObserver !== 'undefined') {
        const [observedElement, setObservedElement] = useState<Element | null>(null);
        const [dimension, setDimension] = useState<Dimension>(defaultDimension);

        const resizeObserver = useMemo(() => {
            return new window.ResizeObserver(entries => {
                if (entries[0]) {
                    const {
                        x,
                        y,
                        width,
                        height,
                        top,
                        left,
                        bottom,
                        right
                    } = entries[0].contentRect;

                    setDimension({ x, y, width, height, top, left, bottom, right });
                }
            });
        }, []);

        useEffectiveLayout(() => {
            if (observedElement) {
                resizeObserver.observe(observedElement);
                return () => {
                    resizeObserver.disconnect();
                };
            }
        }, [observedElement]);

        return [setObservedElement, dimension];
    } else {
        return [() => {}, defaultDimension];
    }
};

export default useResizeObserver;
