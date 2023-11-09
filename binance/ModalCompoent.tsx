import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';

import Flex from 'C6y2'; // Flex
import Box from 'LCuF'; // Box
import VisuallyHidden from 'cKr8'; // VisuallyHidden
import Image from 'rLOQ'; // Image
import Svg from 'dFDU'; // svg
import theme from 'nn0X'; // theme
import {getStaticImageUrl} from "./imageUtils"
import Modal from "./Modal"

const ModalComponent = ({
  modalVisible: isModalVisible,
  setModalVisible: setModalVisibility,
  coinList: coinDataList,
  onChooseCoin: chooseCoinCallback,
  isCrypto: isCryptocurrency,
  fiatSymbol: fiatCurrencySymbol,
  onSearchClick: searchClickCallback,
  inputDataCy: inputDataTestId,
}) => {
  const inputRef = useRef();
  const { t: translationFunction } = theme.$();
  const { isLightTheme: isLightMode } = theme();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCoinDataList, setFilteredCoinDataList] = useState(coinDataList);
  const [isInputFocused, setInputFocused] = useState(false);

  const sortHotFirst = useCallback((coinData) => {
    const hotCoins = [];
    const otherCoins = [];

    coinData.forEach((coin) => {
      coin.hot ? hotCoins.push(coin) : otherCoins.push(coin);
    });

    hotCoins.sort((a, b) => +(a.hotOrder || 0) - +(b.hotOrder || 0));

    return hotCoins.concat(otherCoins);
  }, []);

  const filterCoinDataList = useCallback((filter, dataList) => {
    return dataList.filter((item) => {
      const upperCaseFilter = filter?.toUpperCase()?.trim();
      const upperCaseAssetCode = item?.assetCode?.toUpperCase();

      return upperCaseAssetCode && upperCaseAssetCode.startsWith(upperCaseFilter);
    });
  }, []);

  useEffect(() => {
    setFilteredCoinDataList(sortHotFirst(searchTerm ? filterCoinDataList(searchTerm, coinDataList) : coinDataList));
  }, [sortHotFirst, filterCoinDataList, searchTerm, coinDataList]);

  useEffect(() => {
    if (coinDataList && coinDataList.length && isModalVisible) {
      setSearchTerm('');
      setFilteredCoinDataList(sortHotFirst(coinDataList));
      setTimeout(() => {
        searchClickCallback && searchClickCallback();
      }, 0);
    }
  }, [coinDataList, isModalVisible, sortHotFirst, searchClickCallback]);

  const handleInputChange = useCallback((e) => {
    if (e.target.value) {
      setFilteredCoinDataList(sortHotFirst(filterCoinDataList(e.target.value, coinDataList)));
    } else {
      setFilteredCoinDataList(sortHotFirst(coinDataList));
    }

    setSearchTerm(e.target.value.toUpperCase());
  }, [coinDataList, sortHotFirst, filterCoinDataList]);

  const handleChooseCoin = useCallback((selectedCoinCode) => {
    chooseCoinCallback(selectedCoinCode);
    setModalVisibility(false);
  }, [chooseCoinCallback, setModalVisibility]);

  const handleClearInput = useCallback(() => {
    setSearchTerm('');
    setFilteredCoinDataList(sortHotFirst(coinDataList));
  }, [coinDataList, sortHotFirst]);

  const inputStyles = {
    ml: 'xs',
    height: '54px',
    border: '0 none',
    bg: 'transparent',
    fontSize: '14px',
    width: '100%',
    lineHeight: '20px',
    color: 't.primary',
    fontWeight: 400,
    '&::placeholder': {
      color: 't.placeholder',
      fontWeight: 500,
    },
    '&:focus, &:active': {
      outline: 'none',
    },
  };

  const renderSearchInput = useMemo(() => {
    return (
      <Box pt={["10px", "14px"]} pb={["10px", 0]}>
        <Flex
          sx={{
            bg: isLightMode ? "#F5F5F5" : "#2B3139",
            width: ["calc(100% - 80px)", "calc(100% - 56px)"],
            height: ["32px", "36px"],
            px: "sm",
            paddingRight: "30px",
            alignItems: "center",
            position: "relative",
            borderRadius: "20px",
            ml: ["24px", 0],
          }}
        >
          <Image size={20} color="t.placeholder" />
          <Box
            data-cy={inputDataTestId}
            id="coinModalInput"
            ref={inputRef}
            as="input"
            
            value={searchTerm}
            placeholder={translationFunction("ocbs-buy-search")}
            onInput={handleInputChange}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onClick={() => searchClickCallback && searchClickCallback()}
            sx={inputStyles}
          />
          {searchTerm && (
            <Svg
              onClick={handleClearInput}
              color="t.disabled"
              sx={{
                cursor: "pointer",
                position: "absolute",
                top: "6px",
                right: "10px",
                width: "20px !important",
                height: "20px !important",
              }}
            />
          )}
        </Flex>
      </Box>
    );
  }, [isLightMode, inputDataTestId, searchTerm, translationFunction, handleInputChange, setInputFocused, handleClearInput, searchClickCallback, inputStyles,isInputFocused]);

  const renderCoinList = useMemo(() => {
    return (
      <Box
        sx={{
          height: ["418px"],
          width: "100%",
          bg: "bg0",
        }}
      >
        {filteredCoinDataList.length ? (
          <>
            <Box
              sx={{
                maxHeight: ["418px"],
                overflow: "auto",
              }}
            >
              {filteredCoinDataList.map((coin, index) => (
                <Flex
                  id={`choose-coin-${coin.assetCode}`}
                  onClick={() => handleChooseCoin(coin.assetCode || "")}
                  sx={{
                    mx: "12px",
                    px: "12px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "48px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    border: "1px solid transparent",
                    ":hover": {
                      borderRadius: "8px",
                      border: isLightMode ? "1px solid #EAECEF" : "1px solid #474D57",
                    },
                  }}
                  key={`${coin.assetCode}-${index}`}
                >
                  <Flex
                    sx={{
                      flex: 1,
                      fontWeight: 500,
                    }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Flex alignItems="center">
                      <Image
                        src={coin.logoUrl}
                        sx={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          border: "1px solid transparent",
                        }}
                      />
                      <Box sx={{ ml: "12px" }}>
                        <Box
                          sx={{
                            fontSize: "sm",
                            color: "t.primary",
                            fontWeight: 500,
                            lineHeight: "20px",
                          }}
                        >
                          {coin.assetCode}
                          {coin.hot && (
                            <Svg
                              size={16}
                              color="#F0B90B"
                              sx={{
                                position: "relative",
                                top: "3px",
                                ml: "4px",
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                    </Flex>
                    {isCryptocurrency && (
                      <Box
                        sx={{
                          color: "t.disabled",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {coin.assetName}
                      </Box>
                    )}
                  </Flex>
                </Flex>
              ))}
            </Box>
          </>
        ) : (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              textAlign: "center",
              pt: "48px",
            }}
          >
            <Image
              width="72px"
              src={isLightMode ? getStaticImageUrl("assets/noResult.svg") : getStaticImageUrl("assets/noresult-dark.svg")}
            />
            <Box
              sx={{
                color: "t.third",
                fontSize: "sm",
              }}
            >
              {_("ocbs-buy-No-results")}
            </Box>
          </Box>
        )}
      </Box>
    );
  }, [isLightMode, filteredCoinDataList, handleChooseCoin,fiatCurrencySymbol, isCryptocurrency ]);

  return (
    <Modal
      layerProps={{
        height: ["100vh", "480px"],
      }}
      px={0}
      visible={isModalVisible}
      headerComponent={renderSearchInput}
      onCancel={() => setModalVisibility(false)}
    >
      {renderCoinList}
    </Modal>
  );
};

export default ModalComponent;
