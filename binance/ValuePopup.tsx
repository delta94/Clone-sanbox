// yu = function(e) {
  
//     var t = e.disabled
//       , n = e.label
//       , r = e.onValueChange
//       , f = e.limit
//       , h = void 0 === f ? 5 : f
//       , s = e.children
//       , d = e.value
//       , m = e.placeholder
//       , p = e.defaultValue
//       , v = e.renderValue
//       , E = e.shouldShow
//       , M = void 0 === E || E
//       , z = e.filterFunction
//       , g = void 0 === z ? function(e, t) {
//         return t.toLowerCase().startsWith(e.toLowerCase())
//     }
//     : z
//       , C = e.onChange
//       , y = e.onBlur
//       , x = e.multiple
//       , b = void 0 !== x && x
//       , w = e.showChecked
//       , L = void 0 !== w && w
//       , Z = e.searchPlaceholder
//       , _ = e.empty
//       , F = void 0 === _ ? "No results found." : _
//       , S = (e.dropdownFullWidth,
//     e.variant)
//       , A = void 0 === S ? "filled" : S
//       , H = e.hideSearch
//       , V = void 0 !== H && H
//       , B = e.lazy
//       , T = void 0 !== B && B
//       , D = e.error
//       , j = void 0 !== D && D
//       , k = e.infoText
//       , O = e.errorText
//       , R = e.footer
//       , P = e.size
//       , I = void 0 === P ? "md" : P
//       , N = e.searchError
//       , G = void 0 !== N && N
//       , U = e.searchErrorText
//       , $ = e.needSeo
//       , W = void 0 === $ || $
//       , J = e.textFieldProps
//       , Q = void 0 === J ? {} : J
//       , Y = e.title
//       , K = void 0 === Y ? "" : Y
//       , zu = {
//         sm: 32,
//         md: 40,
//         lg: 48
//     },
//     gu = {
//       "& .bn-sdd-optionGroupLabel": {
//           px: "sm",
//           py: "6px",
//           height: "28px"
//       },
//       "& .bn-sdd-option": {
//           maxHeight: "64px",
//           fontSize: "sm",
//           lineHeight: "44px"
//       },
//       "& .bn-sdd-value": {
//           minHeight: "32px",
//           pl: "ls",
//           pr: "md",
//           py: "ls"
//       },
//       "& .bn-sdd-noResults": {
//           p: "ls",
//           fontSize: "sm"
//       },
//       "& .bn-sdd-innerInputContainer": {
//           py: "xs",
//           width: "100%"
//       },
//       "& .bn-sdd-icon": {
//           cursor: "pointer",
//           verticalAlign: "middle"
//       },
//       "& .bn-sdd-list": {
//           mx: "-24px",
//           borderBottomLeftRadius: "6px",
//           borderBottomRightRadius: "6px",
//           "&::-webkit-scrollbar": {
//               borderRadius: "6px"
//           }
//       },
//       "& .bn-sdd-list > li": {
//           px: "24px"
//       }
//   },
//       , X = (0,
//     i.Z)(e, ["disabled", "label", "onValueChange", "limit", "children", "value", "placeholder", "defaultValue", "renderValue", "shouldShow", "filterFunction", "onChange", "onBlur", "multiple", "showChecked", "searchPlaceholder", "empty", "dropdownFullWidth", "variant", "hideSearch", "lazy", "error", "infoText", "errorText", "footer", "size", "searchError", "searchErrorText", "needSeo", "textFieldProps", "title"]);
//     if (!M)
//         return null;
//     var q = (0,
//     Tr.Z)((0,
//     o.useState)(""), 2)
//       , ee = q[0]
//       , te = q[1]

//       , ne = (0,
//     Tr.Z)((0,
//     o.useState)(p), 2)
//       , re = ne[0]
//       , le = ne[1]

//       , ae = (0,
//     Tr.Z)((0,
//     o.useState)(0), 2)
//       , ce = ae[0]
//       , ie = ae[1]

//       , oe = (0,
//     Tr.Z)((0,
//     o.useState)(0), 2)
//       , ue = oe[0]
//       , fe = oe[1]

//       , he = (0,
//     Tr.Z)((0,
//     o.useState)(!1), 2)
//       , se = he[0]
//       , de = he[1]

//       , me = (0,
//     Tr.Z)((0,
//     o.useState)(W), 2)
//       , pe = me[0]
//       , ve = me[1]

//       , Ee = (0,
//     o.useRef)(null)

//       , Me = (0,
//     o.useRef)(null)

//       , ze = (0,
//     o.useRef)({})

//       , ge = (0,
//     o.useRef)(null)

//       , Ce = u().useCallback((function() {
//         return "outline" === A ? "filled" : A
//     }
//     ), [A]);

//     void 0 !== d && d !== re && le(d);

//     var ye = (0,
//     o.useMemo)((function() {
//         return ee ? flattenAndGroupElements(s).filter((function(e) {
//             return g(ee, e.value)
//         }
//         )) : flattenAndGroupElements(s)
//     }
//     ), [s, ee])


//       , xe = (0,
//     o.useMemo)((function() {
//         return ye.reduce((function(e, t, n) {
//             var r = t.group;
//             return e.length > 0 && e[e.length - 1].group === r ? e[e.length - 1].options.push(t) : e.push({
//                 key: n,
//                 index: n,
//                 group: r,
//                 options: [t]
//             }),
//             e
//         }
//         ), [])
//     }
//     ), [ye]);

//     (0,
//     o.useEffect)((function() {
//         if (ye.length > 0) {
//             var e = ge.current;
//             e && (e.scrollTop = 0)
//         }
//     }
//     ), [xe]);


//     var be = (0,
//     o.useCallback)((function() {
//         (0,
//         ReactDOM.unstable_batchedUpdates)((function() {
//             ve(!1),
//             de(!1),
//             te("")
//         }
//         ))
//     }
//     ), []);

//     (0,
//     o.useEffect)((function() {
//         Ee.current && fe(Ee.current.offsetLeft)
//     }
//     ), []),
//     (0,
//     o.useEffect)((function() {
//         var e = Math.max(ye.findIndex((function(e) {
//             return e.value === re
//         }
//         )), 0);
//         ie(e)
//     }
//     ), [ee, re]),
//     (0,
//     o.useEffect)((function() {
//         if (se) {
//             Me.current && Me.current.focus();
//             var e = ze.current[ce]
//               , t = ge.current;
//             e && t && (t.scrollTop = 64 * ce)
//         }
//     }
//     ), [se]);


//     // Todo
//     var we = (0,
//     o.useRef)(null)
//       , Le = (0,
//     Tr.Z)((0,
//     o.useState)(1), 2)
//       , Ze = Le[0]
//       , _e = Le[1];
//     const useEffect = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect
//     useEffect((function() {
//         we.current && Ee.current && (we.current.clientHeight >= Ee.current.clientHeight ? _e((function(e) {
//             return e + 1
//         }
//         )) : Ee.current.clientHeight - we.current.clientHeight > 20 && _e((function(e) {
//             return e - 1
//         }
//         )))
//     }
//     ), [re]);
//     // Todo


//     var Fe = function(e) {
//         r && r(e),
//         te(e)
//     }
//       , Se = function() {
//         !pe && ve(!0),
//         de(!0)
//     }

//       , Ae = function(e) {
//         if (38 === e.keyCode) {
//             e.preventDefault();
//             var t = Math.max(ce - 1, 0);
//             ie(t)
//         } else if (40 === e.keyCode) {
//             e.preventDefault();
//             var n = Math.min(ce + 1, ye.length - 1);
//             ie(n)
//         } else if (13 === e.keyCode)
//             if (se && !b) {
//                 if (ye[ce]) {
//                     var r = ye[ce]
//                       , l = r.label || r.value;
//                     if (r.disabled)
//                         return;
//                     Fe(l),
//                     C && C(l),
//                     le(l),
//                     Ee.current && Ee.current.blur()
//                 }
//                 be()
//             } else
//                 Se();
//         else
//             27 === e.keyCode && be()
//     }


//       , He = v ? v(re) : Array.isArray(re) ? u().createElement("Flex", {
//         flexWrap: "wrap",
//         ref: we
//     }, 
    
    
//     re.map((function(e) {
//         return u().createElement("Box", {
//             key: e,
//             flexShrink: 0,
//             __css: {
//                 bg: "line",
//                 borderRadius: "small",
//                 my: "2px",
//                 mr: "minor",
//                 px: "xs",
//                 height: "24px",
//                 lineHeight: "24px"
//             }
//         }, e)
//     }
//     ))) : ""


//       , Ve = u().createElement("TextFieldV2" (0,
//     l.Z)({
//         ref: Ee,
//         className: "bn-sdd-input",
//         variant: Ce(),
//         disabled: t,
//         error: j,
//         size: I,
//         infoText: k,
//         errorText: O,
//         sx: {
//             visibility: v || Array.isArray(re) ? "hidden" : "visible",
//             cursor: t ? "default" : "pointer"
//         },
//         bg: "transparent",
//         boxProps: {
//             sx: {
//                 height: b && Ze > 1 ? "".concat(zu[I] + 28 * (Ze - 1), "px") : zu[I],
//                 width: "100%",
//                 ".bn-input-suffix": {
//                     height: "100%",
//                     mr: "xs"
//                 },
//                 cursor: t ? "default" : "pointer"
//             },
//             onClick: function(e) {
//                 (e.preventDefault(),
//                 t) || (!1 === se ? (document.querySelector(".bn-sdd-dropdown.showing") || e.stopPropagation(),
//                 Se()) : be())
//             },
//             onMouseDown: function(e) {
//                 e.stopPropagation(),
//                 e.preventDefault()
//             }
//         },
//         suffix: u().createElement("Flex", {
//             height: "100%",
//             alignItems: "center"
//         }, u().createElement(nu, {
//             sx: {
//                 transform: se ? "rotate(180deg)" : "rotate(0)",
//                 color: "t.third"
//             },
//             size: 16
//         })),
//         onFocus: function(e) {
//             e.stopPropagation(),
//             e.preventDefault(),
//             Ee.current && Ee.current.blur(),
//             !1 === se && Se()
//         },
//         label: n,
//         value: re || "",
//         onKeyDown: function(e) {
//             return Ae(e)
//         }
//     }, !d && !re && {
//         placeholder: m,
//         sx: {
//             visibility: "visible",
//             cursor: t ? "default" : "pointer"
//         }
//     }, Q))


//       , Be = u().createElement("Box", {
//         className: "bn-sdd-innerInputContainer",
//         width: "100%"
//     }, u().createElement("TextFieldV2", {
//         ref: Me,
//         boxProps: {
//             width: "100%",
//             sx: {
//                 ".bn-input-prefix": {
//                     display: "flex"
//                 },
//                 ".bn-input-suffix": {
//                     display: "flex"
//                 }
//             }
//         },
//         variant: Ce(),
//         size: "md",
//         onClick: function(e) {
//             e.stopPropagation(),
//             e.preventDefault()
//         },
//         error: G,
//         errorText: U,
//         value: ee,
//         bg: "transparent",
//         onChange: function(e) {
//             Fe(e.target.value),
//             !1 === se && Se()
//         },
//         onKeyDown: function(e) {
//             return Ae(e)
//         },
//         onBlur: function(e) {
//             y && y(e)
//         },
//         prefix: u().createElement(ru, {
//             color: "t.placeholder",
//             ml: "8px",
//             mr: "-8px",
//             className: "bn-sdd-icon"
//         }),
//         suffix: ee && u().createElement(lu.Z, {
//             className: "bn-sdd-icon",
//             sx: {
//                 color: "t.placeholder",
//                 mr: "xs"
//             },
//             size: 16,
//             onClick: function(e) {
//                 e.preventDefault(),
//                 e.stopPropagation(),
//                 te(""),
//                 Me.current && Me.current.focus()
//             }
//         }),
//         placeholder: Z
//     }))


    
//       , Te = (0,
//     o.useMemo)((function() {
//         return u().createElement("Box", {
//             ref: ge,
//             as: "ul",
//             role: "listbox",
//             className: "bn-sdd-list",
//             sx: {
//                 maxHeight: "".concat(64 * h, "px"),
//                 overflowY: "auto"
//             }
//         }, (!T || se) && xe.map((function(e) {
//             return function(e) {
//                 var t = e.key
//                   , n = e.group
//                   , r = e.children;
//                 return n ? u().createElement(cu.Y, {
//                     label: n,
//                     key: t
//                 }, r) : u().createElement(u().Fragment, {
//                     key: t
//                 }, r)
//             }({
//                 key: e.key,
//                 group: e.group,
//                 children: e.options.map((function(t, n) {
//                     t.group;
//                     var l = (0,
//                     i.Z)(t, ["group"])
//                       , o = e.index + n;
//                     return u().createElement(qo.W, (0,
//                     c.Z)((0,
//                     a.Z)({}, l), {
//                         key: o,
//                         multiple: b,
//                         isActive: ce === o && !b,
//                         isChecked: Array.isArray(re) ? -1 !== re.indexOf(l.value) : l.value === re,
//                         showChecked: L,
//                         ref: function(e) {
//                             return ze.current[o] = e
//                         },
//                         onClick: function(e) {
//                             if (e.stopPropagation(),
//                             !l.disabled) {
//                                 var t;
//                                 if (b || ie(o),
//                                 b) {
//                                     var n = Array.isArray(re) ? (0,
//                                     eu.Z)(Array, (0,
//                                     tu.Z)(re)) : []
//                                       , a = n.indexOf(l.value);
//                                     -1 === a ? n.push(l.value) : n.splice(a, 1),
//                                     t = n
//                                 } else
//                                     t = l.value;
//                                 r && r(t),
//                                 C && C(t),
//                                 le(t),
//                                 b || be()
//                             }
//                         }
//                     }))
//                 }
//                 ))
//             })
//         }
//         )))
//     }
//     ), [ge, h, T, se, xe, ce, re]);
//     return u().createElement("Box", (0,
//     l.Z)({
//         tx: "searchDropdown",
//         mr: "8px",
//         variant: A
//     }, X), Ve, He && u().createElement("Box", {
//         className: "bn-sdd-value",
//         sx: {
//             height: b && Ze > 1 ? "".concat(zu[I] + 28 * (Ze - 1), "px") : zu[I],
//             position: "absolute",
//             display: "flex",
//             alignItems: "center",
//             left: ue || 0,
//             bottom: 0,
//             right: 0,
//             pointerEvents: "none",
//             wordBreak: "keep-all",
//             fontSize: "sm",
//             lineHeight: 1,
//             color: t ? "t.disabled" : "t.primary"
//         }
//     }, He), pe && u().createElement(u().Fragment, null, u().createElement(iu.ZP.Modal, {
//         visible: se,
//         width: ["100%", "352px", "384px"],
//         onMaskClick: be
//     }, u().createElement(iu.ZP.ModalTitle, {
//         title: K,
//         onClose: be
//     }), u().createElement("Box", {
//         __css: gu
//     }, u().createElement("Box", {
//         className: "bn-sdd-dropdown ".concat(se ? "showing" : "closing"),
//         __css: {
//             outline: "none",
//             height: "auto",
//             minHeight: "".concat(64 * h + 56, "px"),
//             display: se ? "block" : "none",
//             width: "auto!important",
//             minWidth: "100%!important"
//         }
//     }, !V && Be, 0 === xe.length && u().createElement("Box", {
//         className: "bn-sdd-noResults"
//     }, F), Te, R)))))
// };
// yu.displayName = "ValuePopup";


import React , { useState, useRef, useMemo, useCallback, useEffect, Fragment } from "react";
import SearchDropdownOptGroup from "./SearchDropdownOptGroup"
import unstable_batchedUpdates from "unstable_batchedUpdates"
import SearchDropdownOption from "./SearchDropdownOption"
import TextFieldV2 from "./TextFieldV2"
import { Flex, Tag, Dropdown, Icon, Box, Modal, ModalTitle } from "@binance/ui"


const inputSizes = {
  sm: 32,
  md: 40,
  lg: 48
}

const dropdownStyles = {
  "& .bn-sdd-optionGroupLabel": {
      px: "sm",
      py: "6px",
      height: "28px"
  },
  "& .bn-sdd-option": {
      maxHeight: "64px",
      fontSize: "sm",
      lineHeight: "44px"
  },
  "& .bn-sdd-value": {
      minHeight: "32px",
      pl: "ls",
      pr: "md",
      py: "ls"
  },
  "& .bn-sdd-noResults": {
      p: "ls",
      fontSize: "sm"
  },
  "& .bn-sdd-innerInputContainer": {
      py: "xs",
      width: "100%"
  },
  "& .bn-sdd-icon": {
      cursor: "pointer",
      verticalAlign: "middle"
  },
  "& .bn-sdd-list": {
      mx: "-24px",
      borderBottomLeftRadius: "6px",
      borderBottomRightRadius: "6px",
      "&::-webkit-scrollbar": {
          borderRadius: "6px"
      }
  },
  "& .bn-sdd-list > li": {
      px: "24px"
  }
}

const flattenAndGroupElements = (elements, group = "") => {
    const childrenArray = React.Children.toArray(elements);
    const SearchDropdownOptGroupDisplayName = SearchDropdownOptGroup.displayName;

    if (elements) {
      return childrenArray.reduce((accumulator, child) => {
        if (child && child.type && child.type.displayName === SearchDropdownOptGroupDisplayName) {
          const { label, children } = child.props;
          return accumulator.concat(flattenAndGroupElements(children, label));
        }
        return accumulator.concat({ group: group, ...child.props });
      }, []);
    } else {
      return [];
    }
};

const ValuePopup = ({
    disabled,
    label,
    onValueChange,
    limit = 5,
    children,
    value,
    placeholder,
    defaultValue,
    renderValue,
    shouldShow = true,
    filterFunction = (e, t) => t.toLowerCase().startsWith(e.toLowerCase()),
    onChange,
    onBlur,
    multiple,
    showChecked,
    searchPlaceholder,
    empty = "No results found.",
    dropdownFullWidth = "filled",
    variant = "filled",
    hideSearch,
    lazy,
    error,
    infoText,
    errorText,
    footer,
    size = "md",
    searchError,
    searchErrorText,
    needSeo = true,
    textFieldProps = {},
    title = "",
    ...restProps
  }) => {
    if (!shouldShow) {
      return null;
    }
  
    const [searchText, setSearchText] = useState("");
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [hoverIndex, setHoverIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(needSeo);
    const searchInputRef = useRef(null);
    const dropdownInputRef = useRef(null);
    const valueContainerRef = useRef(null);
    const dropdownListRef = useRef(null);
    const dropdownOptionRefs = useRef(null);
  
    const determineVariant = useCallback(() => {
      return variant === "outline" ? "filled" : variant;
    }, [variant]);
  
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  
    const filteredOptions = useMemo(() => {
      return searchText
        ? flattenAndGroupElements(children).filter((child) => filterFunction(searchText, child.value))
        : flattenAndGroupElements(children);
    }, [children, searchText]);
  
    const groupedOptions = useMemo(() => {
      return filteredOptions.reduce((accumulator, option, index) => {
        const group = option.group;
        if (accumulator.length > 0 && accumulator[accumulator.length - 1].group === group) {
          accumulator[accumulator.length - 1].options.push(option);
        } else {
          accumulator.push({
            key: index,
            index: index,
            group: group,
            options: [option],
          });
        }
        return accumulator;
      }, []);
    }, [filteredOptions]);
  
    useEffect(() => {
      if (filteredOptions.length > 0) {
        const dropdown = dropdownListRef.current;
        if (dropdown) {
          dropdown.scrollTop = 0;
        }
      }
    }, [groupedOptions]);

    const clearSearch = useCallback(() => {
        unstable_batchedUpdates(() => {
          setIsPopupOpen(false);
          setIsDropdownOpen(false);
          setSearchText("");
        });
    }, []);

    useEffect(() => {
      dropdownInputRef.current && setScrollPosition(dropdownInputRef.current.offsetLeft);
    }, []);

    useEffect(() => {
        const initialIndex = Math.max(
          children.findIndex((option) => option.value === selectedValue),
          0
        );
        setHoverIndex(initialIndex);
    }, [searchText, selectedValue]);

    useEffect(() => {
        if (isDropdownOpen) {
            searchInputRef.current && searchInputRef.current.focus();
          dropdownOptionRefs.current[hoverIndex] && dropdownListRef.current && (dropdownListRef.current.scrollTop = 64 * hoverIndex);
        }
    }, [isDropdownOpen]);
  
  
    const elementRef = useRef(null);

    const [popupHeight, setPopupHeight] = useState(1)
    const useEffectCustom = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

    useEffectCustom(() => {
      if (isPopupOpen) {
        if (elementRef.current && dropdownInputRef.current) {
          if (elementRef.current.clientHeight >= dropdownInputRef.current.clientHeight) {
            setPopupHeight((height) => height + 1);
          } else if (dropdownInputRef.current.clientHeight - elementRef.current.clientHeight > 20) {
            setPopupHeight((height) => height - 1);
          }
        }
      }
    }, [selectedValue]);
  
    const handleSearchTextChange = (newValue) => {
      onValueChange && onValueChange(newValue);
      setSearchText(newValue);
    };
  
    const openDropdown = () => {
      if (!isPopupOpen) {
        setIsDropdownOpen(true);
        setIsPopupOpen(true);
      }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 38) {
          event.preventDefault();
          const newIndex = Math.max(hoverIndex - 1, 0);
          setHoverIndex(newIndex);
        } else if (event.keyCode === 40) {
          event.preventDefault();
          const newIndex = Math.min(hoverIndex + 1, children.length - 1);
          setHoverIndex(newIndex);
        } else if (event.keyCode === 13) {
          if (isDropdownOpen && !multiple) {
            const selectedOption = children[hoverIndex];
            if (selectedOption && !selectedOption.disabled) {
              const optionLabel = selectedOption.label || selectedOption.value;
              handleSearchTextChange(optionLabel);
              onChange && onChange(optionLabel);
              setSelectedValue(optionLabel);
              dropdownInputRef.current && dropdownInputRef.current.blur();
            }
            clearSearch();
          } else {
            openDropdown();
          }
        } else if (event.keyCode === 27) {
          clearSearch();
        }
    };

    const renderedValue = renderValue ? renderValue(selectedValue) : Array.isArray(selectedValue) ? (
        <Flex flexWrap="wrap" ref={valueContainerRef}>
          {selectedValue.map((value) => (
            <Tag
              key={value}
              flexShrink={0}
              __css={{
                bg: "line",
                borderRadius: "small",
                my: "2px",
                mr: "minor",
                px: "xs",
                height: "24px",
                lineHeight: "24px",
              }}
            >
              {value}
            </Tag>
          ))}
        </Flex>
      ) : (
        ""
    );


    const searchDropdown = (
        <TextFieldV2
          ref={dropdownInputRef}
          className={`bn-sdd-input`}
          variant={determineVariant()}
          disabled={disabled}
          error={error}
          size={size}
          infoText={infoText}
          errorText={errorText}
          sx={{
            visibility: renderedValue || Array.isArray(selectedValue) ? "hidden" : "visible",
            cursor: disabled ? "default" : "pointer",
          }}
          bg="transparent"
          boxProps={{
            sx: {
              height: multiple && popupHeight > 1 ? `${inputSizes[size] + 28 * (popupHeight - 1)}px` : inputSizes[size],
              width: "100%",
              ".bn-input-suffix": {
                height: "100%",
                mr: "xs",
              },
              cursor: disabled ? "default" : "pointer",
            },
            onClick: (e) => {
              e.preventDefault();
              !disabled && (!isDropdownOpen ? (document.querySelector(".bn-sdd-dropdown.showing") || e.stopPropagation(), openDropdown()) : clearSearch());
            },
            onMouseDown: (e) => {
              e.stopPropagation();
              e.preventDefault();
            },
          }}
          suffix={
            <Flex height="100%" alignItems="center">
              <Icon
                sx={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)",
                  color: "t.third",
                }}
                size={16}
              />
            </Flex>
          }
          onFocus={(e) => {
            e.stopPropagation();
            e.preventDefault();
            dropdownInputRef.current && dropdownInputRef.current.blur();
            !isDropdownOpen && openDropdown();
          }}
          label={label}
          value={selectedValue || ""}
          onKeyDown={(e) => handleKeyDown(e)}
          {...(!value && !selectedValue && {
            placeholder: placeholder,
            sx: {
              visibility: "visible",
              cursor: disabled ? "default" : "pointer",
            },
          })}
          {...textFieldProps}
        />
    );


    const innerInputContainer = (
        <Box className="bn-sdd-innerInputContainer" width="100%">
          <Dropdown
            ref={searchInputRef}
            boxProps={{
              width: "100%",
              sx: {
                ".bn-input-prefix": {
                  display: "flex",
                },
                ".bn-input-suffix": {
                  display: "flex",
                },
              },
            }}
            variant={determineVariant()}
            size="md"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            error={searchError}
            errorText={searchErrorText}
            value={searchText}
            bg="transparent"
            onChange={(e) => {
              handleSearchTextChange(e.target.value);
              !isDropdownOpen && openDropdown();
            }}
            onKeyDown={(e) => handleKeyDown(e)}
            onBlur={(e) => onBlur && onBlur(e)}
            prefix={
              <Icon
                color="t.placeholder"
                ml="8px"
                mr="-8px"
                className="bn-sdd-icon"
              />
            }
            suffix={searchText && (
              <Icon
                className="bn-sdd-icon"
                sx={{
                  color: "t.placeholder",
                  mr: "xs",
                }}
                size={16}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSearchText("");
                  searchInputRef.current && searchInputRef.current.focus();
                }}
              />
            )}
            placeholder={searchPlaceholder}
          />
        </Box>
    );

    const dropdownOptions = useMemo(() => {
        return (
          <Box
            ref={dropdownListRef}
            as="ul"
            role="listbox"
            className="dropdown-options"
            sx={{
              maxHeight: `${64 * limit}px`,
              overflowY: "auto"
            }}
          >
            {(!lazy || isDropdownOpen) && groupedOptions.map((groupData) => {
              return (({ key, group, children }) => {
                return group ? (
                  <SearchDropdownOptGroup label={group} key={key}>
                    {children}
                  </SearchDropdownOptGroup>
                ) : (
                  <Fragment key={key}>{children}</Fragment>
                );
              })({
                key: groupData.key,
                group: groupData.group,
                children: groupData.options.map((item, index) => {
                    const { group, ...rest } = item;
                    const itemIndex = groupData.index + index;

                    return (
                        <SearchDropdownOption
                            {...rest}
                            key={itemIndex}
                            multiple={multiple}
                            isActive={hoverIndex === itemIndex && !multiple}
                            isChecked={
                            Array.isArray(value)
                                ? value.indexOf(rest.value) !== -1
                                : rest.value === value
                            }
                            showChecked={showChecked}
                            ref={(el) => (dropdownOptionRefs.current[itemIndex] = el)}
                            onClick={(event) => {
                            event.stopPropagation();
                            if (!rest.disabled) {
                                let newValue;
                                if (multiple || setHoverIndex(itemIndex), multiple) {
                                const newArray = Array.isArray(value)
                                    ? [...value]
                                    : [];
                                const index = newArray.indexOf(rest.value);
                                if (index === -1) {
                                    newArray.push(rest.value);
                                } else {
                                    newArray.splice(index, 1);
                                }
                                newValue = newArray;
                                } else {
                                    newValue = rest.value;
                                }
                                onValueChange && onValueChange(newValue);
                                onChange && onChange(newValue);
                                setSelectedValue(newValue);
                                multiple || clearSearch();
                            }
                            }}
                        />    
                    )
                })
            });
            })}
          </Box>
        );
    }, [dropdownListRef, limit, lazy, isDropdownOpen, groupedOptions]);

    const dropdown = (
        <Box
          tx="searchDropdown"
          mr="8px"
          variant={variant}
          {...restProps}
        >
          {searchDropdown}
          {renderedValue && (
            <Box
              className="bn-sdd-value"
              sx={{
                height: multiple && popupHeight > 1 ? `${inputSizes[size] + 28 * (popupHeight - 1)}px` : inputSizes[size],
                position: "absolute",
                display: "flex",
                alignItems: "center",
                left: scrollPosition || 0,
                bottom: 0,
                right: 0,
                pointerEvents: "none",
                wordBreak: "keep-all",
                fontSize: "sm",
                lineHeight: 1,
                color: disabled ? "t.disabled" : "t.primary",
              }}
            >
              {renderedValue}
            </Box>
          )}
          {isPopupOpen && (
            <Fragment>
              <Modal
                visible={isDropdownOpen}
                width={["100%", "352px", "384px"]}
                onMaskClick={clearSearch}
              >
                <ModalTitle title={title} onClose={clearSearch} />
                <Box __css={dropdownStyles}>
                  <Box
                    className={`bn-sdd-dropdown ${isDropdownOpen ? "showing" : "closing"}`}
                    __css={{
                      outline: "none",
                      height: "auto",
                      minHeight: `${64 * limit + 56}px`,
                      display: isDropdownOpen ? "block" : "none",
                      width: "auto!important",
                      minWidth: "100%!important",
                    }}
                  >
                    {!hideSearch && innerInputContainer}
                    {groupedOptions.length === 0 && (
                      <Box className="bn-sdd-noResults">{empty}</Box>
                    )}
                    {dropdownOptions}
                    {footer}
                  </Box>
                </Box>
              </Modal>
            </Fragment>
          )}
        </Box>
    );

    
    return dropdown
  };
  
  ValuePopup.displayName = "ValuePopup";
  