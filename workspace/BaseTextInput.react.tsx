// __d("BaseTextInput.react",["BaseFocusRing.react","BaseInput.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{":disabled_color":"x1kdt53j",$$css:!0}};function a(a,b){var d=a.suppressFocusRing,e=a.xstyle,f=babelHelpers.objectWithoutPropertiesLoose(a,["suppressFocusRing","xstyle"]);return h.jsx(c("BaseFocusRing.react"),{suppressFocusRing:d,children:function(a){return h.jsx(c("BaseInput.react"),babelHelpers["extends"]({},f,{ref:b,xstyle:[i.root,a,e]}))}})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(h.forwardRef(a));g["default"]=b}),98);


import React, { forwardRef } from 'react';
import BaseFocusRing from './BaseFocusRing.react';
import BaseInput from './BaseInput.react';
import stylex from "stylex";

const styles = {
    root: {
        ':disabled_color': 'var(--disabled-text)',
        $$css: true,
    },
};


const BaseTextInput = forwardRef((props, ref) => {
    const { suppressFocusRing, xstyle, ...rest } = props;
    return (
        <BaseFocusRing suppressFocusRing={suppressFocusRing}>
            {focusRingProps => (
                <BaseInput ref={ref} xstyle={[styles.root, focusRingProps, xstyle]} {...rest} />
            )}
        </BaseFocusRing>
    );
});
    
 export default React.memo(BaseTextInput);



 