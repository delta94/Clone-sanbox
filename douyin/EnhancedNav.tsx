import React, { useState, useEffect, useContext, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updateUserInfo } from 'store/user';
import { emit, EVENT } from 'eventEmitter'; 

import { NavigationMenuItemVal, CHANNEL_REF } from 'constants/menuItems';
import { getUrlParams } from 'utils/url';

import { NavMenu } from 'components/NavMenu';

import { UserContext } from 'contexts/UserContext';

interface Props {
  abTestData?: {
    recommendCache?: boolean; 
  };
  current: NavigationMenuItemVal;
  onReload?: () => void;
  customProps?: any;
  className?: string;
  needGrayscale?: boolean;
  errorRefresh?: (href: string) => void;
  isSpider?: boolean;
  tccConfig?: any;
  isMainland?: boolean;
}

const EnhancedNavMenu: React.FC<Props> = ({
  abTestData,
  current,
  onReload,
  customProps,
  className,
  needGrayscale,
  errorRefresh,
  isSpider,
  tccConfig,
  isMainland
}) => {

  const [selected, setSelected] = useState(current);

  const history = useHistory();
  const dispatch = useDispatch();

  const { userInfo, dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    setSelected(current);
  }, [current]);

  const handleLinkAction = useCallback(
    (key: string, action: 'enter' | 'leave' | 'click') => {
      if (key === 'discover') {
        switch (action) {
          case 'enter':
            // tracking enter
            
            break;
          case 'leave':
           // tracking leave 
  
            break;
          case 'click':
            // tracking click
  
            break;
        }
      }
    },
    [abTestData]
  );

  const handleNavigation = useCallback(
    (item: NavigationMenuItemVal, event: React.MouseEvent) => {
      if (item !== current) {
        
        event.preventDefault();
        
        if (item !== NavigationMenuItemVal.AsianGame) {
          emit(EVENT.refreshPage);
          onReload?.();
          window.scrollTo(0, 0);
        }

        if (CHANNEL_REF[item].route) {
          userDispatch?.(updateUserInfo());
          
          history.push({
            pathname: CHANNEL_REF[item].route,
            search: stringify({
              ...getUrlParams(),
              ...(CHANNEL_REF[item].params || {})  
            })
          });
          
          if (errorRefresh) {
            errorRefresh(CHANNEL_REF[item].href);  
          }
        }

      }
    },
    [current, onReload, errorRefresh, userDispatch, history]
  );

  return (
    <NavMenu
      isSpider={isSpider}
      userInfo={userInfo}
      abTestData={abTestData}
      activeClickable
      onChange={handleNavigation}
      current={selected}
      customProps={customProps}
      className={className}
      needGrayscale={needGrayscale}  
      tccConfig={tccConfig}
      isMainland={isMainland}
      onLinkAction={handleLinkAction}
    />
  );

};

export default EnhancedNavMenu;