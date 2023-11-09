import * as React from 'react';
import ReactDOM from 'react-dom';

type MultiSourcesProps = {
    multiSources?: boolean;
}

type SourceProps = {
    children: React.ReactNode;
}

type TargetProps = {
    as?: string;
    [key: string]: any; // To account for other props passed to the component
}

const useMultiSourcePortals = ({ multiSources }: MultiSourcesProps = {}) => {
    let refState = {
        value: null as any,
        set: null as React.MutableRefObject<((value: any) => void) | null> | null
    };

    function setRefValue(value: any) {
        refState.value = value;
        if (refState.set && refState.set.current) {
            refState.set.current(value);
        }
    }

    const Source: React.FC<SourceProps> = ({ children }) => {
        const [container, setContainer] = React.useState<HTMLElement | null>(null);

        React.useLayoutEffect(() => {
            const currentSetterRef: React.MutableRefObject<((value: any) => void) | null> = {
                current: setContainer
            };

            let previousSetterRef: React.MutableRefObject<((value: any) => void) | null> = {
              current: setContainer
            };
            setContainer(refState.value);

            if (refState.set) {
                previousSetterRef = refState.set;

                if (!multiSources) {
                    refState.set.current(null);
                }
            }

            refState.set = currentSetterRef;
            setContainer(refState.value);

            return () => {
                currentSetterRef.current = null;
                refState.set = null;

                if (previousSetterRef && previousSetterRef.current) {
                    refState.set = previousSetterRef;
                    refState.set.current(refState.value);
                }
            };
        }, []);

        return container ? ReactDOM.createPortal(children, container) : null;
    }

    const Target: React.FC<TargetProps> = ({ as = "div", ...otherProps }) => {
        return React.createElement(as, {
            ref: setRefValue,
            ...otherProps
        });
    }

    const useTargetRef = () => {
        return setRefValue;
    }

    return {
        Source,
        Target,
        useTargetRef
    };
}

export default useMultiSourcePortals;
