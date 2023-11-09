import React, { useState, useEffect, useRef, forwardRef, useMemo, cloneElement, CSSProperties, ReactNode } from 'react';
import useResizeObserver from '../../useResizeObserver'; //import useResizeObserver
import useMultiSourcePortals from '../../useMultiSourcePortals'; //import Portal
import { Box } from 'Box'; //import Box
import Portal from "./Portal"


interface DrawerProps {
    visible?: boolean;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    bg?: string;
    maskBg?: string;
    children?: ReactNode;
    childProps?: CSSProperties;
    outerClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    containerNode?: HTMLElement;
    [key: string]: any;
}

const parentCss = {
    position: ['fixed', 'absolute'],
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: '1100'
};

const childCss = {
    overflow: 'auto',
    zIndex: '1100',
    maxHeight: 'calc(100% - 16px)',
    overflowY: 'auto'
};

const directionStyles: Record<string, any> = {
    top: {
        parent: { flexDirection: 'column' },
        child: { width: '100%', transition: 'all 0.5s ease' }
    },
    bottom: {
        parent: { flexDirection: 'column-reverse' },
        child: { width: '100%', transition: 'all 0.5s ease' }
    },
    left: {
        parent: {},
        child: { height: '100%', transition: 'all 0.5s ease' }
    },
    right: {
        parent: { flexDirection: 'row-reverse' },
        child: { height: '100%', transition: 'all 0.5s ease' }
    }
};


function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}

const Drawer = forwardRef<HTMLElement, DrawerProps>((props, ref) => {
  const {
    visible = false,
    direction = "right",
    bg = "background",
    maskBg,
    children,
    childProps = {},
    outerClick,
    containerNode,
    ...rest
  } = props;
  const [isDrawerVisible, setIsDrawerVisible] = useState(visible);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const [overflowValue, setOverflowValue] = useState("auto");

  const bodyOverflow = useRef<string>();

  const [setObservedElement,dimension] = useResizeObserver();

  const { width, height } = dimension;



  const maskStyle: CSSProperties = maskBg ? {
        bg: maskBg,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    } : {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    };

    const updateRefs = useMemo(() => {
        if(ref === null && setObservedElement ===  null ) return;
        return (element) => {
            setRef(ref, element);
            setRef(setObservedElement, element);
        };
    }, [ref, setObservedElement]);



  const clonedChildren = cloneElement(children, { ref: updateRefs });

  useEffect(() => {
    if (["top", "bottom"].includes(direction)) {
      setDrawerHeight(isDrawerVisible ? height : 0);
    }
  }, [height, direction, isDrawerVisible]);

  useEffect(() => {
    if (["left", "right"].includes(direction)) {
      setDrawerWidth(isDrawerVisible ? width : 0);
    }
  }, [width, direction, isDrawerVisible]);

  useEffect(() => {
    if (isDrawerVisible) {
    setIsDrawerVisible(true);
    setOverflowValue(document.body.style.overflow || "auto");
    document.body.style.setProperty("overflow", "hidden");
 } else {
    bodyOverflow.current = setTimeout(() => {
        setIsDrawerVisible(false);
    }, 500);
    }

    return () => {
        clearTimeout(bodyOverflow.current);
        document.body.style.setProperty("overflow", overflowValue);
    }
    
  }, [isDrawerVisible]);

  return (
    <Portal container={containerNode}>
      <Box
        __css={{
          ...parentCss,
          ...directionStyles[direction].parent,
          display: isDrawerVisible || isDrawerVisible ? "flex" : "none",
        }}
        {...rest}
      >
        <Box
          __css={{
            ...childCss,
            ...directionStyles[direction].child,
            width: drawerWidth,
            height: drawerHeight,
            bg,
            ...childProps,
          }}
        >
          {clonedChildren}
        </Box>
        <Box
          __css={{
            ...maskStyle,
            flex: 1
        }}
          onClick={(e) => outerClick && outerClick(e)}
        />
      </Box>
    </Portal>
  );
});

Drawer.displayName = "Drawer";

export { Drawer };