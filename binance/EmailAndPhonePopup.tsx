wu = u().forwardRef((function(e, t) {
  var n = e.onValueChange
    , r = e.countrys
    , a = void 0 === r ? [] : r
    , c = e.countryCode
    , f = e.defaultCountryCode
    , h = void 0 === f ? "CN" : f
    , s = e.disabledCountry
    , d = e.selectPlaceholder
    , m = e.selectSearchPlaceholder
    , p = e.value
    , v = (e.label,
  e.variant)
    , E = void 0 === v ? "filled" : v
    , M = e.size
    , z = void 0 === M ? "md" : M
    , g = e.modalTitle
    , C = void 0 === g ? "" : g
    , y = e.error
    , x = void 0 !== y && y
    , b = e.empty
    , w = void 0 === b ? "No records found" : b
    , L = (0,
  i.Z)(e, ["onValueChange", "countrys", "countryCode", "defaultCountryCode", "disabledCountry", "selectPlaceholder", "selectSearchPlaceholder", "value", "label", "variant", "size", "modalTitle", "error", "empty"])
    , Z = (0,
  o.useMemo)((function() {
      return a.filter((function(e) {
          return e.code && e.name && e.callingCode
      }
      ))
  }
  ), [a])
    , _ = (0,
  o.useMemo)((function() {
      return Z.reduce((function(e, t, n) {
          return e[t.code.toLowerCase()] = n,
          e
      }
      ), {})
  }
  ), [Z])
    , F = u().useCallback((function(e) {
      return Z[_[null === e || void 0 === e ? void 0 : e.toLowerCase()]]
  }
  ), [Z])
    , S = u().useCallback((function(e) {
      return {
          SJ: "NO",
          YT: "FR",
          RE: "FR",
          WF: "FR",
          NC: "FR",
          MF: "FR",
          GP: "FR",
          GF: "FR",
          DO1: "DO",
          DO2: "DO"
      }[e]
  }
  ), [Z])
    , A = (0,
  o.useMemo)((function() {
      return F(h)
  }
  ), [F, h])
    , H = function(e) {
      var t = e.code
        , n = e.showName
        , r = void 0 !== n && n
        , l = F(t) || A;
      if (!l)
          return null;
      var a = S(l.code)
        , c = Xo[l.code] || a && Xo[a];
      return u().createElement(jr.Z, {
          flex: 1,
          justifyContent: r ? "space-between" : "start"
      }, r ? u().createElement(jr.Z, {
          sx: {
              alignItems: "center"
          }
      }, u().createElement(jr.Z, {
          sx: {
              alignItems: "center",
              pr: 2
          }
      }, c ? u().createElement(c, {
          size: 32
      }) : l.code), u().createElement(kr.Z, {
          sx: {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
          }
      }, l.name)) : u().createElement(jr.Z, {
          sx: {
              alignItems: "center",
              pr: 2
          }
      }, c ? u().createElement(c, {
          size: 16
      }) : l.code), u().createElement(kr.Z, {
          sx: {
              flexShrink: 0
          },
          style: {
              direction: "ltr"
          }
      }, "+ ", l.callingCode))
  }
    , V = u().useRef(null != c).current
    , B = (0,
  Tr.Z)((0,
  o.useState)(A ? A.code : ""), 2)
    , T = B[0]
    , D = B[1]
    , j = (0,
  Tr.Z)((0,
  o.useState)(p || ""), 2)
    , k = j[0]
    , O = j[1];
  V && void 0 !== c && c !== T && D(c),
  void 0 !== p && p !== k && O(p);
  var R = u().useCallback((function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "-"
        , t = (0,
      Tr.Z)(e.split("-"), 2)
        , r = t[0]
        , l = t[1];
      l && (V || l === T || D(l),
      n && n({
          code: l,
          callingCode: r,
          nationalNumber: k
      }))
  }
  ), [T, k])
    , P = (0,
  o.useMemo)((function() {
      var e = F(T);
      return e ? "".concat(e.callingCode, "-").concat(e.code, "-").concat(e.name) : ""
  }
  ), [Z, T])
    , I = (0,
  o.useCallback)((function(e, t) {
      return -1 !== t.toLowerCase().indexOf(e.toLowerCase())
  }
  ), [])
    , N = (0,
  Fl.D)((function(e) {
      return "string" === typeof e && e && u().createElement(H, {
          code: e.split("-")[1]
      })
  }
  ));
  return u().createElement(jr.Z, null, u().createElement(xu, {
      error: x,
      title: C,
      variant: bu[E].SearchDropdown,
      size: z,
      empty: w,
      width: 104,
      disabled: s,
      placeholder: d,
      searchPlaceholder: m,
      dropdownFullWidth: !0,
      filterFunction: I,
      renderValue: N,
      onValueChange: R,
      value: P,
      shouldShow: /^\d{3,}$/.test(k),
      needSeo: !1
  }, (0,
  o.useMemo)((function() {
      return Z.map((function(e) {
          return u().createElement(qo.W, {
              key: "".concat(e.callingCode, "-").concat(e.code),
              value: "".concat(e.callingCode, "-").concat(e.code, "-").concat(e.name)
          }, u().createElement(H, (0,
          l.Z)({}, e, {
              showName: !0
          })))
      }
      ))
  }
  ), [Z])), u().createElement(Dr.Z, (0,
  l.Z)({
      error: x,
      ref: t,
      variant: bu[E].TextField,
      size: z,
      onChange: function(e) {
          var t = e.currentTarget.value
            , r = F(T);
          if (t && /^\+\d*$/.test(t)) {
              var l = (0,
              Eu._)("".concat(decodeURIComponent(t)))
                , a = null === l || void 0 === l ? void 0 : l.nationalNumber
                , c = null === l || void 0 === l ? void 0 : l.country
                , i = null === l || void 0 === l ? void 0 : l.countryCallingCode;
              return O(a),
              void (n && n({
                  code: c,
                  callingCode: i,
                  nationalNumber: t
              }))
          }
          O(t),
          n && n({
              code: null === r || void 0 === r ? void 0 : r.code,
              callingCode: null === r || void 0 === r ? void 0 : r.callingCode,
              nationalNumber: t
          })
      }
  }, L, {
      type: "text",
      boxProps: {
          sx: {
              display: "flex",
              flex: 1
          }
      },
      value: k
  })))
}
));
wu.displayName = "EmailAndPhonePopup";








import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Flex, Text, Box, Input } from '@chakra-ui/react'; // Import your UI components here

const EmailAndPhonePopup: React.FC<EmailAndPhonePopupProps> = ({
  onValueChange,
  countrys = [],
  countryCode,
  defaultCountryCode = 'CN',
  disabledCountry,
  selectPlaceholder,
  selectSearchPlaceholder,
  value,
  label,
  variant = 'filled',
  size = 'md',
  modalTitle = '',
  error,
  empty = 'No records found',
  ...rest
}: EmailAndPhonePopupProps) => {
  const filteredCountries = useMemo(() => countrys.filter((country) => country.code && country.name && country.callingCode), [countrys]);
  const countryIndexMap = useMemo(() => filteredCountries.reduce((acc, country, index) => {
    acc[country.code.toLowerCase()] = index;
    return acc;
  }, {}), [filteredCountries]);

  const findCountryByCode = useCallback((code: string | null | undefined) => {
    return filteredCountries[countryIndexMap[code?.toLowerCase() || '']];
  }, [filteredCountries]);

  const mapCountryToCallingCode = useCallback((code: string) => {
    const callingCodeMap: Record<string, string> = {
      SJ: 'NO',
      YT: 'FR',
      RE: 'FR',
      WF: 'FR',
      NC: 'FR',
      MF: 'FR',
      GP: 'FR',
      GF: 'FR',
      DO1: 'DO',
      DO2: 'DO',
    };
    return callingCodeMap[code];
  }, [filteredCountries]);

  const defaultCountry = useMemo(() => findCountryByCode(defaultCountryCode), [defaultCountryCode, findCountryByCode]);

  const renderCountryOption = (countryCode) => {
    const {code, showName} = countryCode;
    const selectedCountry = findCountryByCode(code) || defaultCountry;
    if (!selectedCountry) {
      return null;
    }

    const specialCountryCode = mapCountryToCallingCode(selectedCountry.code);
    const CountryIconComponent = FlagIcon(selectedCountry.code) || specialCountryCode && FlagIcon[specialCountryCode];

    return (
      <Box flex={1} justifyContent={showName ? 'space-between' : 'start'}>
        {showName ? (
          <Box sx={{ alignItems: 'center' }}>
            <Box sx={{ alignItems: 'center', pr: 2 }}>{CountryIconComponent ? <CountryIconComponent size={32} /> : selectedCountry.code}</Box>
            <Text sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{selectedCountry.name}</Text>
          </Box>
        ) : (
          <Box sx={{ alignItems: 'center', pr: 2 }}>{CountryIconComponent ? <CountryIconComponent size={16} /> : selectedCountry.code}</Box>
        )}
        <Text sx={{ flexShrink: 0 }} style={{ direction: 'ltr' }}>
          + {selectedCountry.callingCode}
        </Text>
      </Box>
    );
  };

  const inputRef = useRef(countryCode !== null);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | undefined>(defaultCountry ? defaultCountry.code : '');
  const [inputValue, setInputValue] = useState<string>(value || '');

  if (inputRef.current && countryCode !== undefined && countryCode !== selectedCountryCode) {
    setSelectedCountryCode(countryCode);
  }

  if (value !== undefined && value !== inputValue) {
    setInputValue(value);
  }

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const [callingCode, nationalCode] = input.split('-');
    
    nationalCode && (inputRef.current || nationalCode === selectedCountryCode || (
      setSelectedCountryCode(nationalCode),
      onValueChange && onValueChange({
        code: nationalCode,
        callingCode,
        nationalNumber: inputValue
      })
      ) )
    
  }, [selectedCountryCode, inputValue]);

  const selectedCountry = useMemo(() => findCountryByCode(selectedCountryCode), [findCountryByCode, selectedCountryCode]);
  const formattedValue = useMemo(() => {
    const country = findCountryByCode(selectedCountryCode);
    return country ? `${country.callingCode}-${country.code}-${country.name}` : '';
  }, [findCountryByCode, selectedCountryCode]);

  const filterFunction = useCallback(
    (filterText: string, itemValue: string) => itemValue.toLowerCase().includes(filterText.toLowerCase()),
    []
  );

  const renderValue = useCallback((value: string) => {
    const countryCode = value.split('-')[1];
    return <CountryComponent code={countryCode} />;
  }, []);

  return (
    <Flex>
      {/* Implement your UI components here */}
      <Input
        error={error}
        variant={variant}
        size={size}
        onChange={handleInputChange}
        type="text"
        value={inputValue}
        {...rest}
      />
    </Flex>
  );
};

EmailAndPhonePopup.displayName = 'EmailAndPhonePopup';

export default EmailAndPhonePopup;

interface EmailAndPhonePopupProps {
  onValueChange?: (value: any) => void;
  countrys?: Country[];
  countryCode?: string;
  defaultCountryCode?: string;
  disabledCountry?: boolean;
  selectPlaceholder?: string;
  selectSearchPlaceholder?: string;
  value?: string;
  label?: string;
  variant?: 'filled' | 'outlined'; // Adjust type accordingly
  size?: 'sm' | 'md' | 'lg'; // Adjust type accordingly
  modalTitle?: string;
  error?: boolean;
  empty?: string;
}

interface Country {
  code: string;
  name: string;
  callingCode: string;
}

interface CountryComponentProps {
  code: string;
}


const FlagIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
      color="#000"
    >
      <path
        d="M25.402 144.696C9.128 178.352 0 216.11 0 256s9.128 77.648 25.402 111.304L256 389.565l230.598-22.261C502.872 333.648 512 295.89 512 256s-9.128-77.648-25.402-111.304L256 122.435 25.402 144.696z"
        fill="#f0f0f0"
      />
      <path
        d="M25.411 367.304C66.818 452.934 154.507 512 256 512s189.183-59.066 230.589-144.696H25.411z"
        fill="#6da544"
      />
      <path
        d="M25.411 144.696h461.178C445.183 59.066 357.493 0 256 0S66.818 59.066 25.411 144.696z"
        fill="#d80027"
      />
      <g fill="#ffda44">
        <path d="M211.478 322.783h89.044v-37.844l-17.809 8.904L256 267.13l-26.713 26.713-17.809-8.904zM160.532 278.261l4.145 12.754h13.41l-10.85 7.883 4.145 12.754-10.85-7.882-10.85 7.882 4.145-12.754-10.85-7.883h13.41zM173.381 233.739l4.145 12.754h13.41l-10.85 7.883 4.144 12.754-10.849-7.882-10.85 7.882 4.145-12.754-10.85-7.883h13.41zM210.113 200.348l4.145 12.754h13.409l-10.848 7.883 4.143 12.754-10.849-7.882-10.849 7.882 4.144-12.754-10.85-7.883h13.411zM351.468 278.261l-4.145 12.754h-13.41l10.85 7.883-4.145 12.754 10.85-7.882 10.849 7.882-4.144-12.754 10.85-7.883h-13.41zM338.619 233.739l-4.145 12.754h-13.41l10.85 7.883-4.145 12.754 10.85-7.882 10.85 7.882-4.145-12.754 10.85-7.883h-13.41zM301.887 200.348l-4.145 12.754h-13.409l10.848 7.883-4.144 12.754 10.849-7.882 10.849 7.882-4.144-12.754 10.849-7.883h-13.41zM256 183.651l4.145 12.754h13.41l-10.85 7.883 4.145 12.754L256 209.16l-10.85 7.882 4.145-12.754-10.85-7.883h13.41z"
        />
      </g>
    </svg>
  );
};

