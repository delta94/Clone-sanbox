"DFc+": (e,t,n)=>{
    n.d(t, {
        Y: ()=>c
    });
    var r = n("DTvD")
      , i = n("LCuF")
      , o = n("yhUQ")
      , a = n("O94r")
      , l = n.n(a)
      , c = r.forwardRef((function(e, t) {
        var n = e.label
          , a = e.children
          , c = e.groupNameClickable
          , u = e.handleGroupNameClick
          , s = e.isActive
          , d = void 0 !== s && s;
        return r.createElement(i.Z, {
            as: "li",
            ref: t
        }, r.createElement(i.Z, {
            __css: {
                cursor: c ? "pointer" : "default"
            },
            className: l()("bn-sdd-optionGroupLabel", {
                "is-active": d
            }),
            onClick: function(e) {
                c && u && u(e)
            }
        }, r.createElement(o.Z, {
            className: "bn-sdd-optionGroupText"
        }, n)), r.createElement(i.Z, {
            as: "ul",
            padding: 0
        }, a))
    }
    ));
    c.displayName = "SearchDropdownOptGroup"
}


import React, { forwardRef } from 'react';

const SearchDropdownOptGroup = forwardRef((props, ref) => {
  const {
    label: groupName,
    children,
    groupNameClickable: clickable,
    handleGroupNameClick,
    isActive: active = false,
  } = props;

  const handleClick = (e) => {
    if (clickable && handleGroupNameClick) {
      handleGroupNameClick(e);
    }
  };

  return (
    <li ref={ref}>
      <div
        className={`bn-sdd-optionGroupLabel ${active ? 'is-active' : ''}`}
        style={{ cursor: clickable ? 'pointer' : 'default' }}
        onClick={handleClick}
      >
        <div className="bn-sdd-optionGroupText">{groupName}</div>
      </div>
      <ul style={{ padding: 0 }}>{children}</ul>
    </li>
  );
});

SearchDropdownOptGroup.displayName = 'SearchDropdownOptGroup';

export default SearchDropdownOptGroup;
