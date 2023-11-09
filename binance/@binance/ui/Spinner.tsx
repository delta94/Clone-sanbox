import React, { forwardRef } from 'react';
import { Box } from "Box"

interface VisuallyHiddenProps {
    children: React.ReactNode;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
    return (
        <Box
            as="span"
            __css={{
                border: "0px",
                clip: "rect(0px, 0px, 0px, 0px)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: "0px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
            }}
        >
            {children}
        </Box>
    );
};

const keyframesString = `
    0%, 40%, 100% {
        transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1.0);
    }
`;

interface SpinnerItemProps {
    delay: string;
    color: string;
}

const SpinnerItem: React.FC<SpinnerItemProps> = ({ delay, color }) => (
    <Box
        __css={{
            backgroundColor: color,
            height: "100%",
            width: "3px",
            animation: `${s.keyframes(keyframesString)} 1.2s infinite ease-in-out`,
            animationDelay: delay,
        }}
    />
);

interface SpinnerProps {
    variant?: string;
    itemsColor?: string;
    label?: string;
    [x: string]: any;
}

const Spinner = forwardRef<HTMLElement, SpinnerProps>(
    ({ itemsColor = "primary", label, ...props }, ref) => {
        const delays = Array(4)
            .fill(1)
            .map((_, idx) => `-${idx / 10}s`)
            .reverse();

        return (
            <Box
                ref={ref}
                {...props}
                __css={{
                    display: "flex",
                    width: "30px",
                    height: "30px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {label && <VisuallyHidden>{label}</VisuallyHidden>}
                {delays.map((delay, idx) => (
                    <SpinnerItem key={idx} delay={delay} color={itemsColor} />
                ))}
            </Box>
        );
    }
);

Spinner.displayName = "Spinner";

export default Spinner;