import React, { useState, useRef, forwardRef, ReactNode } from "react";
import classnames from "classnames"
import { Box, Flex, Text } from "@binance/ui"

const size = "32px";
const sm = 32;
const md = 40;
const lg = 48;

const TextFieldLabel = forwardRef<HTMLElement, { children?: ReactNode; required?: boolean }>(
  ({ children, required }, ref) => {
    if (!children) return null;
    return (
      <Box
        ref={ref}
        as="label"
        className={classnames({ "bn-input-label-required": required }, "bn-input-label")}
        tx="forms"
        variant="label"
        __css={{
          position: "absolute",
          top: `-${size}`,
          left: "0px",
          lineHeight: size,
          zIndex: "1",
          cursor: "text",
          "&.bn-input-label-required::before": {
            display: "inline-block",
            marginRight: "minor",
            color: "error",
            content: '"*"',
          },
        }}
      >
        {children}
      </Box>
    );
  }
);

const TextFieldLabelSuffix = forwardRef((props, ref) => {
    return props.children ? (
      <Box
        ref={ref}
        as="label"
        className="bn-input-label"
        tx="forms"
        variant="label"
        __css={{
          position: 'absolute',
          top: `-${size}`,
          right: 0,
          lineHeight: size,
          zIndex: '1',
          cursor: 'text',
        }}
      >
        {props.children}
      </Box>
    ) : null;
  });

const TextFieldInput = forwardRef<HTMLInputElement, { onFocus?: Function; onBlur?: Function; onChange?: Function } & any>(
  ({ onFocus, onBlur, onChange, ...props }, ref) => (
    <Box
      ref={ref}
      as="input"
      data-bn-type="input"
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      __css={{
        width: "100%",
        height: "100%",
        padding: "0",
        outline: "none",
        border: "none",
        bg: "inherit",
        opacity: 1,
        "&::placeholder": {
          color: "t.placeholder",
          fontSize: "14px",
        },
      }}
      {...props}
    />
  )
);

interface TextFieldProps {
  variant?: string;
  id?: string;
  value?: any;
  defaultValue?: any;
  label?: string | ReactNode;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  infoText?: string;
  errorText?: string;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: Function;
  boxProps?: any;
  required?: boolean;
  extraInfo?: ReactNode;
  size?: "sm" | "md" | "lg";
  // ... other possible props
}

const TextFieldV2 = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      variant = "default",
      id,
      value,
      defaultValue,
      label,
      placeholder,
      error,
      disabled,
      prefix,
      suffix,
      infoText = "",
      errorText = "",
      onFocus,
      onBlur,
      onChange,
      boxProps,
      required,
      extraInfo,
      size = "lg",
      ...restProps
    } = props;

    const [fieldStatus, setFieldStatus] = useState("");
    const isControlled = useRef(value !== undefined).current;
    const [currentValue, setCurrentValue] = useState(defaultValue);
    if (isControlled && value !== currentValue) setCurrentValue(value);

    const helperText = error ? errorText : infoText;
    const [helperHeight, setHelperHeight] = useState(16);
    const status = disabled ? "disabled" : error ? "error" : fieldStatus;
    const statusClass = status ? `bn-input-status-${status}` : "";
    const ariaLabel = typeof label === "string" ? label : restProps["area-label"];

    return (
      <Flex
        tx="textFieldV2"
        className={classnames([statusClass])}
        variant={variant}
        {...boxProps}
        __css={{
          display: "inline-flex",
          position: "relative",
          mt: label ? size : "0px",
          mb: helperText.length > 0 ? `${helperHeight}px` : "0px",
          alignItems: "center",
          lineHeight: 1.6,
          height: `${lg}px`,
          ...(size === "lg" && { height: `${lg}px` }),
          ...(size === "md" && { height: `${md}px` }),
          ...(size === "sm" && { height: `${sm}px` }),
          "&.bn-input-status-focus .bn-input-label": {
            top: `-${size}`,
          },
        }}
      >
        {prefix && <Box className="bn-input-prefix">{prefix}</Box>}
        <TextFieldInput
          id={id}
          onFocus={(e) => {
            setFieldStatus("focus");
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setFieldStatus("");
            onBlur && onBlur(e);
          }}
          onChange={(e) => {
            if (!isControlled) setCurrentValue(e.target.value);
            onChange && onChange(e);
          }}
          ref={ref}
          value={currentValue}
          aria-label={ariaLabel}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          {...restProps}
        />
        {suffix && <Box className="bn-input-suffix">{suffix}</Box>}
        <TextFieldLabel htmlFor={id} required={required}>
          {label}
        </TextFieldLabel>
        {extraInfo && <TextFieldLabelSuffix>{extraInfo}</TextFieldLabelSuffix>}
        {helperText.length > 0 && (
          <Text 
            ref={(e) => {
              if (e) {
                const t = e.getBoundingClientRect().height;
                setHelperHeight(t);
              }
            }}
            className="bn-input-helper-text"
            variant={`textField.helperText.${status === "error" ? "error" : "info"}`}
            __css={{
              position: "absolute",
              bottom: `${-1 * helperHeight - 4}px`,
              lineHeight: `${helperHeight}px`,
            }}
          >
            {helperText}
          </Text>
        )}
      </Flex>
    );
  }
);

TextFieldV2.displayName = "TextFieldV2";

export default TextFieldV2;
