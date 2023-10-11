import { Box, Flex, Checkbox } from '@binance/ui'; // Import your required libraries
import React, { forwardRef } from 'react';

interface SearchDropdownOptionProps {
  multiple?: boolean;
  isActive?: boolean;
  isChecked?: boolean;
  value: string;
  disabled?: boolean;
  showChecked?: boolean;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  combo?: React.ReactNode;
  suffixLine?: React.ReactNode;
}

const SearchDropdownOption = forwardRef<HTMLLIElement, SearchDropdownOptionProps>(
  (props, ref) => {
    const {
      multiple = false,
      isActive = false,
      isChecked = false,
      value,
      disabled = false,
      showChecked = false,
      children,
      prefix,
      suffix,
      combo,
      suffixLine,
      ...restProps
    } = props;

    return (
      <Box
        role="option"
        id={value}
        key={value}
        title={value}
        ref={ref}
        className={
          isChecked ? 'bnb-active-option bn-sdd-option-item' : 'bn-sdd-option-item'
        }
        __css={{
          color: disabled && !isActive ? 't.primary' : 't.yellow',
          opacity: disabled ? 0.4 : 1,
          cursor: disabled ? 'default' : 'pointer',
          bg: 'popupBg',
          ":hover": {
            bg: disabled ? "" : "bg3"
          },
          py: combo ? "12px" : "8px",
          lineHeight: 1
        }}
        {...restProps}
      >
        <Flex className="bn-sdd-option">
          {multiple && <Checkbox type="checkbox" checked={isChecked} disabled={disabled} />}
          {prefix && (
            <Flex  mr={2} alignItems="center">{prefix}</Flex>
          )}
          <Box flex={1}>{children}</Box>
          {showChecked && (
            <>
              <Flex flex={1} minWidth="8px"></Flex>
              <ArrowDown style={{ color: isChecked ? 'primary' : 'transparent' }}></div>
            </>
          )}
          {suffix && <div style={{ color: 't.third', marginLeft: 'xs' }}>{suffix}</div>}
        </Flex>
      </Box>
    );
  }
);

SearchDropdownOption.displayName = 'SearchDropdownOption';

export default SearchDropdownOption;