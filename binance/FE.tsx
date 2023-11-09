import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';

import Flex from 'C6y2'; // Flex
import Box from 'LCuF'; // Box
import VisuallyHidden from 'cKr8'; // VisuallyHidden
import Image from 'rLOQ'; // Image
import Svg from 'dFDU'; // svg
import theme from 'nn0X'; // theme
import { B4 as d, Fg as u } from 'your-import-path'; // Import the necessary named exports

const hot = "hot";
const vol = "vol";
const changeup = "changeup";
const changedown = "changedown";

const YourComponent = (props) => {
  const {
    modalVisible,
    setModalVisible,
    coinList,
    onChooseCoin,
    showPrice,
    isCrypto,
    fiatSymbol,
    onSearchClick,
    showBalance,
    inputDataCy,
    hideChangeTab,
  } = props;

  const { selectFiat, hotCryptos } = useContext();
  const modalRef = useRef();
  const t = useContext().t;
  const lang = useContext().lang;

  const [searchText, setSearchText] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(coinList);
  const [searchActive, setSearchActive] = useState(false);
  const [sortType, setSortType] = useState(hot);

  const handleSearch = (e) => {
    if (sortType === hot) {
      const hotCoins = [];
      const otherCoins = [];
      coinList.forEach((coin) => {
        if (coin.hot) {
          hotCoins.push(coin);
        } else {
          otherCoins.push(coin);
        }
      });
      hotCoins.sort((a, b) => {
        return +a.hotOrder - +b.hotOrder;
      });
      setFilteredCoins(hotCoins.concat(otherCoins));
    } else {
      const volCoins = [];
      const otherCoins = [];
      coinList.forEach((coin) => {
        if (coin.vol) {
          volCoins.push(coin);
        } else {
          otherCoins.push(coin);
        }
      });
      volCoins.sort((a, b) => {
        return +b.vol - +a.vol;
      });
      setFilteredCoins(volCoins.concat(otherCoins));
    }

    setSearchText(e.target.value);
  };

  useEffect(() => {
    setFilteredCoins(coinList);
  }, [sortType]);

  useEffect(() => {
    if (modalVisible) {
      setSearchText("");
      setFilteredCoins(coinList);
      setTimeout(() => {
        onSearchClick && onSearchClick();
      }, 0);
    }
  }, [coinList, modalVisible]);

  const handleClearSearch = () => {
    setSearchText("");
    setFilteredCoins(coinList);
  };

  const renderSearchInput = useMemo(() => {
    return (
      <Box
        sx={{
          bg: "transparent",
          width: ["calc(100% - 32px)", "calc(100% - 48px)"],
          height: "40px",
          px: "sm",
          py: "10px",
          paddingRight: "30px",
          mx: ["16px", "24px"],
          alignItems: "center",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: searchActive ? "#f0b90b" : "line",
          position: "relative",
        }}
      >
        <VisuallyHidden>
          <Flex size={20} color="t.placeholder" />
        </VisuallyHidden>
        <Box
          data-cy={inputDataCy}
          id="coinModalInput"
          ref={modalRef}
          as="input"
          value={searchText}
          placeholder={t("ocbs-buy-search")}
          onInput={handleSearch}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          onClick={() => onSearchClick && onSearchClick()}
          sx={{
            ml: "xs",
            height: "54px",
            border: "0 none",
            bg: "transparent",
            fontSize: "md",
            width: "100%",
            lineHeight: "21px",
            color: "t.primary",
            fontFamily: "inherit",
            fontWeight: "medium",
            "&::placeholder": {
              color: "t.placeholder",
              fontSize: "md",
            },
            "&:focus, &:active": {
              outline: "none",
            },
          }}
        />
        {searchText && (
          <Flex
            onClick={handleClearSearch}
            color="t.disabled"
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: "7px",
              right: "5px",
              width: "24px",
              height: "24px",
            }}
          />
        )}
      </Box>
    );
  }, [searchText, searchActive, inputDataCy, onSearchClick, t]);

  const renderSortOptions = useMemo(() => {
    const options = [];
    let hasHotCoins = false;

    coinList.forEach((coin) => {
      if (coin.hot) {
        hasHotCoins = true;
      }
    });

    if (hasHotCoins) {
      options.push({
        type: hot,
        label: "exchange-ocbs-Hot",
        defaultValue: "Hot",
      });
    }

    options.push(
      {
        type: vol,
        label: "exchange-ocbs-24h-Vol",
        defaultValue: "24h Vol",
      },
      ...(hideChangeTab
        ? []
        : [
            {
              type: changedown,
              label: "exchange-ocbs-24h-Change",
              defaultValue: "24h Change",
            },
            {
              type: changeup,
              label: "exchange-ocbs-24h-Change",
              defaultValue: "24h Change",
            },
          ])
    );

    return (
      <Flex
        sx={{
          height: "40px",
          alignItems: "center",
          justifyContent: "space-between",
          px: ["16px", "24px"],
          mt: "12px",
        }}
      >
        <Flex
          sx={{
            color: "#707A8A",
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          {t("exchange-ocbs-sort-by", "Sort by")}
        </Flex>
        <Flex>
          {options.map((option) => (
            <Flex
              onClick={() => {
                if (option.type === hot) {
                  trackEvent({
                    pageName: "binance_fiat_buy_crypto_page",
                    elementID:
                      "binance_click_fiat_buy_choose_crypto_page_choose_sort_method",
                    extraInfo: {
                      language: lang,
                      fiat_id: selectFiat?.assetCode,
                      sort_method: option.type,
                    },
                  });
                } else {
                  trackEvent({
                    pageName: "binance_fiat_buy_crypto_page",
                    elementID:
                      "binance_click_fiat_buy_choose_crypto_page_choose_sort_method",
                    extraInfo: {
                      language: lang,
                      fiat_id: selectFiat?.assetCode,
                      sort_method: option.type,
                    },
                  });
                }

                setSortType(option.type);
              }}
              sx={{
                px: "6px",
                py: "4px",
                textAlign: "center",
                fontSize: "12px",
                lineHeight: "16px",
                color: "t.third",
                borderRadius: "2px",
                cursor: "pointer",
                ...(sortType === option.type
                  ? {
                      bg: "bg3",
                      color: "t.primary",
                    }
                  : {}),
              }}
              key={option.type}
            >
              {t(option.label, option.defaultValue)}
              {option.type === changedown ? <ArrowDown size={10} /> : option.type === changeup ? <ArrowUp size={10} /> : <></>}
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }, [coinList, sortType, lang, selectFiat, t, hideChangeTab]);

  const renderCoinList = useMemo(() => {
    return (
      <Box
        sx={{
          maxHeight: showPrice ? "344px" : ["408px", "456px"],
          height: showPrice ? "344px" : ["408px", "456px"],
          width: "100%",
          bg: "bg0",
        }}
      >
        {filteredCoins.length ? (
          <>
            <Box
              sx={{
                maxHeight: showPrice ? "344px" : ["408px", "456px"],
                overflow: "auto",
              }}
            >
              {filteredCoins.map((coin, index) => (
                <Flex
                  id={`choose-coin-${coin.assetCode}`}
                  onClick={() => onChooseCoin(coin.assetCode || "")}
                  sx={{
                    px: ["16px", "24px"],
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "64px",
                    cursor: "pointer",
                    ":hover": {
                      bg: "bg3",
                    },
                  }}
                  key={`${coin.assetCode}-${index}`}
                >
                  <Flex sx={{ flex: 1, fontWeight: 500 }}>
                    <Flex alignItems="center">
                      <Image
                        src={coin.logoUrl}
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          border: "1px solid transparent",
                        }}
                      />
                      <Flex sx={{ ml: "sm" }}>
                        <Flex
                          sx={{
                            fontSize: "sm",
                            color: "t.primary",
                            fontWeight: 500,
                            lineHeight: "20px",
                          }}
                        >
                          {coin.assetCode}
                          {showPrice && coin.hot && sortType === hot && (
                            <Flex
                              as="span"
                              sx={{
                                px: "4px",
                                py: 0,
                                ml: "4px",
                                color: "t.yellow",
                                fontSize: "12px",
                                lineHeight: "16px",
                                bg: "badgeYellowBg",
                              }}
                            >
                              {t("exchange-ocbs-Hot", "Hot")}
                            </Flex>
                          )}
                        </Flex>
                        <Flex
                          sx={{
                            fontSize: "xs",
                            lineHeight: "20px",
                            color: "t.third",
                          }}
                        >
                          {coin.assetName}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  {showPrice ? (
                    <Flex>
                      {hideChangeTab ? (
                        <></>
                      ) : (
                        <>
                          <Flex
                            sx={{
                              pb: "4px",
                              color:
                                coin.quotation && fiatSymbol
                                  ? "t.primary"
                                  : "t.disabled",
                              fontSize: "sm",
                              textAlign: "right",
                              fontWeight: 500,
                              lineHeight: "20px",
                            }}
                          >
                            {coin.quotation && fiatSymbol ? (
                              <>
                                {fiatSymbol}
                                {coin.quotation}
                              </>
                            ) : (
                              t("ocbs-buy-noquotation")
                            )}
                          </Flex>
                          {coin.change24h !== undefined ? (
                            <Flex
                              sx={{
                                fontSize: "12px",
                                lineHeight: "16px",
                                textAlign: "right",
                                color: +coin.change24h >= 0 ? "t.buy" : "t.sell",
                              }}
                            >
                              {+coin.change24h > 0 ? "+" : ""}
                              {coin.change24h || "0.00"} %
                            </Flex>
                          ) : (
                            <Flex sx={{ height: "16px" }} />
                          )}
                        </>
                      )}
                    </Flex>
                  ) : (
                    <></>
                  )}
                </Flex>
              ))}
            </Box>
          </>
        ) : (
          <Flex
            sx={{
              height: "100%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={A ? Assets.noResult : Assets.noresultDark}
            />
            <Flex
              sx={{
                color: "t.disabled",
                fontSize: "sm",
                mt: "14px",
              }}
            >
              {t("ocbs-buy-No-results")}
            </Flex>
          </Flex>
        )}
      </Box>
    );
  }, [
    filteredCoins,
    fiatSymbol,
    onChooseCoin,
    showPrice,
    sortType,
    t,
    hideChangeTab,
  ]);

  return (
    <YourModalComponent
      layerProps={{
        height: ["100vh", "560px"],
      }}
      px={0}
      visible={modalVisible}
      title={t(showPrice || isCrypto ? "ocbs-buy-step1" : "ocbs-buy-fiatMSelectTitle")}
      onCancel={() => setModalVisible(false)}
    >
      {renderSearchInput}
      {showPrice && renderSortOptions}
      {renderCoinList}
    </YourModalComponent>
  );
};

export default YourComponent;
