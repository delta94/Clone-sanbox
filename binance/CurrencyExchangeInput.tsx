import React, { useCallback, useMemo, useRef, useState } from 'react';

import Flex from 'C6y2'; // Flex
import Box from 'LCuF'; // Box
import VisuallyHidden from 'cKr8'; // VisuallyHidden
import Svg from 'dFDU'; // svg
import Image from 'rLOQ'; // Image
import ModalComponent from './ModalCompoent';

const CurrencyExchangeInput = ({
  placeholder: inputPlaceholder,
  coinList,
  selectCoin,
  titleText: coinTitleText,
  onChooseCoin: chooseCoinCallback,
  fiatSymbol: fiatCurrencySymbol,
  isCrypto,
  error,
  errorMessage,
  amount,
  onAmountInput,
  size,
  onClickCoin,
  onSearchClick,
  inputRef,
  disabled,
  loading,
  notLengthLimit,
  dataCy,
  inputDataCy,
  amountDataCy,
  bg,
  fontWeight,
}) => {
  const inputReference = useRef();
  const [isModalVisible,setModalVisible] = useState(false)
  const [isInputFocused,setInputFocused] = useState(false)

  const handleAmountInput = useCallback((e) => {
    let sanitizedInput = e.target.value?.replace(/\u3002/, "")?.replace(" ", "");
    if (
      !(
        !notLengthLimit &&
        String(sanitizedInput).length > 11 &&
        sanitizedInput.length >= (amount || "").toString().length &&
        Number.isNaN(+sanitizedInput) ||
        +sanitizedInput < 0
      )
    ) {
      const decimalPart = sanitizedInput.split(".")[1];
      decimalPart && decimalPart.length > Number(size) && onAmountInput && onAmountInput(sanitizedInput);
    }
  }, [size, onAmountInput, amount, notLengthLimit]);

  const coinTitleComponent = useMemo(() => {
    return (
      <Flex
        sx={{
          color: "t.primary",
          fontSize: "sm",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {coinTitleText}
      </Flex>
    );
  }, [coinTitleText]);

  const amountInputComponent = useMemo(() => {
    return (
      <Flex
        sx={{
          flex: 1,
        }}
      >
        <Box
          ref={inputRef || inputReference}
          data-cy={amountDataCy}
          as="input"
          disabled={disabled}
          value={amount === 0 ? "" : amount}
          onInput={handleAmountInput}
          placeholder={inputPlaceholder}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          sx={{
            width: "100%",
            height: "40px",
            color: error ? "#F6465D" : "t.primary",
            fontSize: "24px",
            outline: "none",
            bg: bg || "bg3",
            border: "0 none",
            lineHeight: "40px",
            fontFamily: "inherit",
            fontWeight: fontWeight || 500,
            "&::placeholder": {
              color: "t.placeholder"
            },
            "&:focus, &:active": {
              outline: "none"
            }
          }}
        />
      </Flex>
    );
  }, [inputRef, inputPlaceholder, disabled, amount, handleAmountInput, inputReference, setInputFocused, error, loading, isLightMode, bg, amountDataCy]);

  const selectCoinButton = useMemo(() => {
    return (
      <Flex
        sx={{
          bg: "bg1",
          borderRadius: "50px",
          p: "xs",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          width: "116px",
        }}
        onClick={() => {
          onClickCoin && onClickCoin((selectCoin?.assetCode) || "");
          setModalVisible(true);
        }}
      >
        {loading ? (
          <VisuallyHidden width="plus" height="24px" />
        ) : (
          <>
            <Image
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                flexShrink: 0,
              }}
              src={(selectCoin?.logoUrl) || (coinList[0]?.logoUrl)}
            />
            <Box
              sx={{
                ml: "xs",
                color: "t.primary",
                fontSize: "md",
                fontWeight: 500,
              }}
              data-cy={dataCy}
            >
              {(selectCoin?.assetCode) || (coinList[0]?.assetCode) || ""}
            </Box>
          </>
        )}
        <Svg sx={{ transform: "rotate(-90deg)" }} size={16} color="t.third" ml="20px" />
      </Flex>
    );
  }, [coinList, selectCoin, loading, onClickCoin, setModalVisible, dataCy]);

  return (
    <>
      <Box
        onClick={() => {
          const inputElement = inputRef || inputReference?.current;
          inputElement && inputElement.focus();
        }}
        sx={{
          width: "100%",
          bg: bg || "#F5F5F5",
          borderRadius: "8px",
          p: "16px",
          border: error
            ? "1px solid #F6465D"
            : isInputFocused
            ? "1px solid #F0B90B"
            : "1px solid #FAFAFA",
          ":hover": {
            border: disabled
              ? "1px solid #FAFAFA"
              : error
              ? "1px solid #CF304A"
              : "1px solid #F0B90B",
          },
        }}
      >
        {coinTitleComponent}
        <Flex
          sx={{
            flex: 1,
            mt: "8px",
            alignItems: "center",
          }}
        >
          {amountInputComponent}
          {selectCoinButton}
        </Flex>
        {errorMessage && (
          <Box
            sx={{
              mt: "8px",
              color: "#F6465D",
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: 400,
            }}
          >
            {errorMessage}
          </Box>
        )}
      </Box>
     
      <ModalComponent
        inputDataCy={inputDataCy}
        onSearchClick={() => onSearchClick && onSearchClick((selectCoin?.assetCode) || "")}
        isCrypto={isCrypto}
        fiatSymbol={fiatCurrencySymbol}
        onChooseCoin={(chosenCoin) => {
          const coinSize = (p.find((t) => t.assetCode === chosenCoin))?.size || 8;
          const decimalPart = String(amount).split(".")[1];
          +(decimalPart?.length) > +coinSize &&
            (onAmountInput?.(Number(amount).toFixed(+coinSize)), chooseCoinCallback(chosenCoin));
        }}
        coinList={coinList}
        modalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      
    </>
  );
};

export default CurrencyExchangeInput;
