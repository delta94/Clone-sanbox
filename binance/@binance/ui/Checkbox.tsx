import React, { ReactElement, useState, useRef, ChangeEvent, ReactNode, forwardRef } from 'react';
import { Box } from "./Box"

type CheckboxProps = {
  className?: string;
  sx?: any;
  defaultChecked?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  size?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};

type SvgProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

const CheckmarkSvg = ({
  width = '1em',
  height = '1em',
  viewBox = '0 0 24 24',
  fill = 'none',
}: SvgProps): ReactElement => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill}>
    <path d="M3 10.5v3h18v-3H3z" fill="currentColor" />
  </svg>
);

const CheckmarkSquareSvg = ({
  width = '1em',
  height = '1em',
  viewBox = '0 0 24 24',
  fill = 'none',
}: SvgProps): ReactElement => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z"
      fill="currentColor"
    />
  </svg>
);

const renderCheckboxIcon = (props: { 'data-indeterminate'?: boolean, "aria-hidden"?: string }) => {
  return props['data-indeterminate'] ? <CheckmarkSvg {...props} /> : <CheckmarkSquareSvg {...props} />;
};


const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    sx,
    defaultChecked = false,
    checked,
    indeterminate = false,
    size = 16,
    onChange,
    children,
    ...rest
  } = props;

  const isChecked = useRef(checked !== undefined).current;
  const [isCheckedState, setIsCheckedState] = useState(defaultChecked);

  if (isChecked && checked !== isCheckedState) {
    setIsCheckedState(checked !== undefined ? checked : false);
  }

  return (
    <>
      <Box
        className={className}
        sx={sx}
        css={{
          mr: 'xs',
          flexShrink: 0,
          width: size,
          height: size,
          lineHeight: typeof size === 'number' ? `${size}px` : size,
          '> svg': {
            boxSizing: 'border-box',
            cursor: 'pointer',
            border: '1px solid',
            borderColor: 't.disabled',
            borderRadius: 'small',
            maxWidth: '100%',
            maxHeight: '100%',
            bg: 'transparent',
            fill: 'transparent',
          },
          '> svg path': {
            fill: 'inherit',
          },
          ':hover': {
            'input:not(:disabled) ~ svg': {
              borderColor: 'primary',
            },
          },
          'input:checked ~ svg': {
            border: 'none',
            bg: 'primary',
            fill: indeterminate ? 'checkbox.indeterminateFill' : 'bg1',
          },
          'input:disabled ~ svg': {
            cursor: 'not-allowed',
            bg: 'line',
            fill: 'line',
            border: 'none',
          },
          'input:checked:disabled ~ svg': {
            fill: 't.disabled',
          },
        }}
      >
        <Box
          as="input"
          type="checkbox"
          data-bn-type="checkbox"
          hidden
          ref={ref}
          {...rest}
          checked={isCheckedState}
          data-indeterminate={isCheckedState && indeterminate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const newValue = !isCheckedState;
            if (!isChecked) {
              setIsCheckedState(newValue);
            }
            e.target.checked = newValue;
            e.currentTarget.checked = newValue;
            if (onChange) {
              onChange(e);
            }
          }}
          sx={{
            position: 'absolute',
            opacity: 0,
            zIndex: -1,
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        />
        {renderCheckboxIcon({ 
          "aria-hidden": "true",
          "data-indeterminate": indeterminate
        })}
      
      </Box>
    </>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
