import React from "react"
import { useState, useEffect, useCallback, forwardRef, useMemo } from 'react';
import { keyframes } from '@emotion/react';
import { createPortal } from 'react-dom';
import { Box, Flex } from 'emotion/react'; // You should import from your CSS-in-JS library

const scaleInKeyframes = keyframes`
  0% {
    transform: scale(0.95);
  }
  66% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.0);
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Dialog = React.forwardRef(({
  visible,
  mask = true,
  onMaskClick,
  children,
  maskStyles,
  onClick,
  onPressEnter = () => {},
  onPressEsc = () => {},
  externalBlock,
  containerNode,
  ...rest
}, ref) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (visible) setIsAnimating(true);
  }, [visible]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        onPressEnter(e);
      } else if (e.keyCode === 27) {
        onPressEsc(e);
      }
    },
    [onPressEnter, onPressEsc]
  );

  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [visible, handleKeyPress]);

  useEffect(() => {
    if (mask && isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [mask, isAnimating]);

  const maskStylesMemo = useMemo(() => {
    return mask
      ? {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          bg: 'dialog.mask',
        }
      : {
          left: '50%',
          top: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
        };
  }, [mask]);

  const animationStyles = useMemo(() => {
    return {
      animation: `${visible ? scaleInKeyframes : fadeOutKeyframes} 0.3s ease-in-out`,
      animationIterationCount: 1,
    };
  }, [visible]);

  return createPortal(
    <Flex
      ref={ref}
      __css={{
        position: ['fixed', 'absolute'],
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 'modal',
        flexDirection: externalBlock ? 'column' : 'unset',
        ...maskStylesMemo,
      }}
      sx={maskStyles}
      onClick={(e) => {
        if (e.target === e.currentTarget && onMaskClick) {
          onMaskClick(e);
        }
      }}
    >
      <Box
        {...rest}
        __css={{
          position: 'relative',
          boxShadow: 'dialog',
          borderRadius: 'large',
          bg: '#1E2329', //popupBg
          ...animationStyles,
        }}
        onAnimationEnd={() => {
          setIsAnimating(visible);
        }}
        onClick={onClick}
      >
        {children}
      </Box>
      <Box __css={animationStyles}>{externalBlock}</Box>
    </Flex>,
    typeof containerNode === 'function' ? containerNode() : containerNode || document.body
  );
})

export default Dialog;
