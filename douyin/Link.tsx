import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import { getUrlParams } from 'utils/url';
import { isMobile } from 'utils/device';

import styles from './Link.module.scss';

interface Props {
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  passParamKeys?: string[];
  spa?: boolean;
  isNeedSeoOpt?: boolean;
  refEl?: React.RefObject<HTMLAnchorElement>;

  // other props
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; 
}

const Link: React.FC<Props> = ({
  href = '',
  children,
  style,
  className,
  passParamKeys = [],
  spa = false,
  isNeedSeoOpt = true,
  refEl,
  
  // other props
  onClick,
  ...restProps  
}) => {

  const [params, setParams] = useState('');

  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const params = getUrlParams({ passParamKeys });
    setParams(stringify(params)); 
  }, []);

  const filteredHref = useMemo(() => {
    if (!href) return undefined;
  
    const hashSplit = href.split('#');
    const [base, hash] = hashSplit;
  
    const querySplit = base.split('?');
    let pathname = '';
    let query = '';
  
    if (querySplit.length > 1) {
      [pathname, query] = querySplit;
    } else {
      [pathname] = querySplit;
    }
  
    const params = [];
    if (params) params.push(params);
    if (query) params.push(query);
  
    if (params.length > 0) {
      return [pathname, params.join('&')].join('?') + (hash ? `#${hash}` : ''); 
    }
  
    return pathname + (hash ? `#${hash}` : '');
  
  }, [params, href]);

  let processedHref = filteredHref;

  if (isNeedSeoOpt && !spa && processedHref) {

    const [base, hash] = processedHref.split('#');
    const [cleanedBase, search] = base.split('?');
  
    processedHref = cleanedBase;
  
  }

  if (spa) {
    return (
      <RouterLink
        to={processedHref}
        className={clsx(styles.aLink, className)}
        style={style}
        suppressHydrationWarning={false}
        {...restProps}  
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      ref={el => {
        anchorRef.current = el;
        refEl && (refEl.current = el);  
      }}
      suppressHydrationWarning={false}
      href={globalThis.xssNamespace.douyin_web.filterUrl(processedHref, null, {
        logType: "js.href/src",
        mode: "black",
        reportOnly: false
      })}
      className={clsx(styles.aLink, className)}
      style={style}
      target={isMobile() ? '_self' : restProps.target} 
      onClick={(e) => {
        // custom click handler
      }}
      {...restProps}
    >
      {children}
    </a>
  );

};

export default Link;