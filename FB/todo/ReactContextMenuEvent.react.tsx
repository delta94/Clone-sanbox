__d("ReactContextMenuEvent.react", ["ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b) {
        var e = b.disabled
          , f = b.onContextMenu
          , g = b.preventDefault
          , i = c("ReactUseEvent.react")("contextmenu");
        h(function() {
            var b = a.current;
            b !== null && i.setListener(b, function(a) {
                if (e === !0)
                    return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useContextMenu"))
                    return;
                d("ReactEventHookPropagation").stopEventHookPropagation(a, "useContextMenu");
                g !== !1 && !a.nativeEvent.defaultPrevented && a.preventDefault();
                f && f(a)
            })
        }, [e, a, i, g, f])
    }
    g.useContextMenu = a
}
), 98);


import React, { useEffect } from 'react';
import { hasEventHookPropagationStopped, stopEventHookPropagation } from 'ReactEventHookPropagation';
import { useEvent } from 'ReactUseEvent';

interface ContextMenuProps {
    disabled?: boolean;
    onContextMenu?: (event: React.MouseEvent) => void;
    preventDefault?: boolean;
}

function useContextMenu(ref: React.RefObject<Element>, props: ContextMenuProps): void {
    const { disabled, onContextMenu, preventDefault } = props;

    const handleContextMenu = useEvent('contextmenu');

    useEffect(() => {
        const element = ref.current;

        if (element !== null) {
            handleContextMenu.setListener(element, (event) => {
                if (disabled === true) return;
                if (hasEventHookPropagationStopped(event, 'useContextMenu')) return;
                stopEventHookPropagation(event, 'useContextMenu');
                if (preventDefault !== false && !event.nativeEvent.defaultPrevented) {
                    event.preventDefault();
                }
                onContextMenu && onContextMenu(event);
            });
        }
    }, [disabled, ref, handleContextMenu, preventDefault, onContextMenu]);
}

export { useContextMenu };
