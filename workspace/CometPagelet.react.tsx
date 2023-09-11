import React, { forwardRef, Fragment } from 'react';
import useCometIgnoreLateMutation from 'useCometIgnoreLateMutation';
import useMergeRefs from 'useMergeRefs';
import LegacyHidden from 'LegacyHidden';
import gkx from 'gkx';
import CometPlaceholder from 'CometPlaceholder.react'; // done
import CometBackupPlaceholder from 'CometBackupPlaceholder.react';
import CometSuspenseList from 'CometSuspenseList.react';

const DefaultPlaceholder = forwardRef((props, ref) => {
    const { children } = props;
    return (
        <Fragment>
            {children(ref, () => null)}
        </Fragment>
    );
});

const Placeholder = (props, ref) => {
    const {
      children,
      className,
      fallback,
      hidden,
      ignoreLateMutation,
      name,
      pageletAriaProps = 2,
      position,
    } = props;
  
    let pageletName = name;
    if (position != null && position < pageletAriaProps) {
      pageletName += `_${position}`;
    } else if (position != null) {
      pageletName += `_{n}`;
    }
  
    const gkxFlag = gkx('1799634');
    const htmlAttributes = {
      className,
      ...(gkxFlag ? null : { 'data-pagelet': pageletName }),
      ...pageletAriaProps,
    };
  
    const ignoreLateMutationFlag = useCometIgnoreLateMutation(ignoreLateMutation === true);
    const mergedRef = useMergeRefs(ref, ignoreLateMutationFlag);
  
    return (
        <DefaultPlaceholder   
            ref={mergedRef}
            {...props}
            name={pageletName}
            pageletName={name}
            position={position}
        >
            {(cometRef, LegacyHidden) => (
                <CometPlaceholder
                    fallback={fallback}
                >
                    <LegacyHidden
                        htmlAttributes={htmlAttributes}
                        mode={hidden === true ? 'hidden' : 'visible'}
                        ref={cometRef}
                    >
                        {children}
                    </LegacyHidden>
                </CometPlaceholder>
            )}
        </DefaultPlaceholder>
    );
};


const BackupPlaceholder = forwardRef((props, ref) => {
    const {
    children,
    className,
    fallback,
    hidden,
    ignoreLateMutation,
    name,
    pageletAriaProps,
    position,
    ...rest
    } = props;
    
    let pageletName = name;
    if (position != null && position < 2) {
        pageletName += `_${position}`;
    } else if (position != null) {
        pageletName += `_{n}`;
    }
    
    const gkxEnabled = gkx('1799634');
    const dataPagelet = gkxEnabled ? null : { 'data-pagelet': pageletName };
    const cometIgnoreLateMutation = useCometIgnoreLateMutation(ignoreLateMutation === true);
    const mergedRef = useMergeRefs(ref, cometIgnoreLateMutation);
    
    return (
    <DefaultPlaceholder
        {...rest}
        name={pageletName}
        position={position}
        ref={mergedRef}
    >
        {(backupRef, PlaceholderRef) => (
            <CometBackupPlaceholder fallback={fallback}>
                <PlaceholderRef />
                <LegacyHidden
                htmlAttributes={{
                    className,
                    ...pageletAriaProps,
                    ...dataPagelet,
                }}
                mode={hidden === true ? 'hidden' : 'visible'}
                ref={backupRef}
                children={children}
                />
            </CometBackupPlaceholder>
        )}
    </DefaultPlaceholder>
    );
});


const SuspenseList = forwardRef((props, ref) => {
    const {
    children,
    className,
    hidden,
    name,
    pageletAriaProps,
    position,
    revealOrder,
    tail,
    ...rest
    } = props;
    
    let pageletName = name;
    if (position != null && position < 2) {
        pageletName += `_${position}`;
    } else if (position != null) {
        pageletName += `_{n}`;
    }
    
    const gkxEnabled = gkx('1799634');
    const dataPagelet = gkxEnabled ? null : { 'data-pagelet': pageletName };
    
    return (
        <CometPlaceholder
        {...rest}
        name={name}
        position={position}
        ref={ref}
        children={(suspenseRef, b) => (
          <LegacyHidden
            htmlAttributes={{ className: className, ...pageletAriaProps, ...dataPagelet }}
            mode={hidden === true ? "hidden" : "visible"}
            ref={suspenseRef}
          >
            <CometSuspenseList revealOrder={revealOrder} tail={tail}>
              {children}
            </CometSuspenseList>
          </LegacyHidden>
        )}
      />
    );
});



export { BackupPlaceholder, Placeholder, SuspenseList };




  

// __d("CometPagelet.react",["CometBackupPlaceholder.react","CometPlaceholder.react","CometSuspenseList.react","LegacyHidden","cr:1191379","gkx","react","useCometIgnoreLateMutation","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");d=h.forwardRef(function(a,b){a=a.children;return h.jsxs(h.Fragment,{children:[" ",a(b,function(){return null})," "]})});var i=(b=b("cr:1191379"))!=null?b:d;function a(a,b){var d=a.children,e=a.className,f=a.fallback,g=a.hidden,j=a.ignoreLateMutation,k=a.name,l=a.pageletAriaProps,m=a.position;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","fallback","hidden","ignoreLateMutation","name","pageletAriaProps","position"]);var n=k;m!=null&&m<2?n+="_"+m:m!=null&&(n+="_{n}");var o=c("gkx")("1799634"),p=babelHelpers["extends"]({},o?null:{"data-pagelet":n});o=c("useCometIgnoreLateMutation")(j===!0);j=c("useMergeRefs")(b,o);return h.jsx(i,babelHelpers["extends"]({},a,{name:n,pageletName:k,position:m,ref:j,children:function(a,b){return h.jsxs(c("CometPlaceholder.react"),{fallback:f,children:[h.jsx(b,{}),h.jsx(c("LegacyHidden"),{htmlAttributes:babelHelpers["extends"]({className:e},l,p),mode:g===!0?"hidden":"visible",ref:a,children:d})]})}}))}a.displayName=a.name+" [from "+f.id+"]";function e(a,b){var d=a.children,e=a.className,f=a.fallback,g=a.hidden,j=a.ignoreLateMutation,k=a.name,l=a.pageletAriaProps,m=a.position;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","fallback","hidden","ignoreLateMutation","name","pageletAriaProps","position"]);k=k;m!=null&&m<2?k+="_"+m:m!=null&&(k+="_{n}");var n=c("gkx")("1799634"),o=babelHelpers["extends"]({},n?null:{"data-pagelet":k});n=c("useCometIgnoreLateMutation")(j===!0);j=c("useMergeRefs")(b,n);return h.jsx(i,babelHelpers["extends"]({},a,{name:k,position:m,ref:j,children:function(a,b){return h.jsxs(c("CometBackupPlaceholder.react"),{fallback:f,children:[h.jsx(b,{}),h.jsx(c("LegacyHidden"),{htmlAttributes:babelHelpers["extends"]({},o,l,{className:e}),mode:g===!0?"hidden":"visible",ref:a,children:d})]})}}))}e.displayName=e.name+" [from "+f.id+"]";function j(a,b){var d=a.children,e=a.className,f=a.hidden,g=a.name,j=a.pageletAriaProps,k=a.position,l=a.revealOrder,m=a.tail;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","hidden","name","pageletAriaProps","position","revealOrder","tail"]);g=g;k!=null&&k<2?g+="_"+k:k!=null&&(g+="_{n}");var n=c("gkx")("1799634"),o=babelHelpers["extends"]({},n?null:{"data-pagelet":g});return h.jsx(i,babelHelpers["extends"]({},a,{name:g,position:k,ref:b,children:function(a,b){return h.jsxs(c("LegacyHidden"),{htmlAttributes:babelHelpers["extends"]({className:e},j,o),mode:f===!0?"hidden":"visible",ref:a,children:[h.jsx(b,{}),h.jsx(c("CometSuspenseList.react"),{revealOrder:l,tail:m,children:d})]})}}))}j.displayName=j.name+" [from "+f.id+"]";b=h.forwardRef(e);d=h.forwardRef(a);f=h.forwardRef(j);g.BackupPlaceholder=b;g.Placeholder=d;g.SuspenseList=f}),98);
