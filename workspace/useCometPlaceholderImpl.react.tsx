import React, { useCallback, useRef } from 'react';
import { addMarkersToChildren, addMarkersToFallback } from 'CometSSRHydrationMarkerUtils';
import { CometSuspenseHUD } from 'CometSuspenseHUD.react';
import { canUseDOM } from 'ExecutionEnvironment';
import gkx from 'gkx';
import { HeroPlaceholder } from 'hero-tracing-placeholder';
import useLayoutEffect_SAFE_FOR_SSR from 'useLayoutEffect_SAFE_FOR_SSR';
import useStable from 'useStable';
import requireDeferred from 'requireDeferred';

const MAX_SUSPENSE_COUNT = 5;
const cometSuspenseFalcoEvent = requireDeferred("CometSuspenseFalcoEvent").__setRef("useCometPlaceholderImpl");

function IncrementSuspenseCount({ cb }) {
    const mounted = useRef(false);
  
    useLayoutEffect_SAFE_FOR_SSR(() => {
      if (!mounted.current) {
        cb();
        mounted.current = true;
      }
    });
  
    return null;
}

const useCometPlaceholderImpl = ({
    children,
    fallback,
    name,
    unstable_avoidThisFallback,
    unstable_onSuspense
  }) => {
      const suspenseCountRef = useRef(0);
      const promiseNameRef = useRef(null);
      const isBackupPlaceholder = useRef(false);

      const suspenseHUDRef = useStable(() => {
        if (CometSuspenseHUD && canUseDOM) {
          return document.createElement("div");
        }
        return null;
      });

      const onSuspense = useCallback((promiseName) => {
        if (suspenseHUDRef) {
          suspenseHUDRef.textContent = promiseName;
        }
        promiseNameRef.current = promiseName;
        if (unstable_onSuspense) {
          unstable_onSuspense(promiseName);
        }
      }, [suspenseHUDRef, unstable_onSuspense]);

      let suspenseHUD = null;
      if (suspenseHUD && CometSuspenseHUD) {
        suspenseHUD = <CometSuspenseHUD desc={suspenseHUDRef} />;
      }

      const incrementSuspenseCount = useCallback(() => {
        suspenseCountRef.current += 1;
        if (gkx('1863055')) {
          if (isBackupPlaceholder.current && suspenseCountRef.current <= MAX_SUSPENSE_COUNT) {
            cometSuspenseFalcoEvent.onReady((falcoEvent) => {
              falcoEvent.log(() => ({
                event: 'unexpected_suspense',
                is_backup_placeholder: unstable_avoidThisFallback === true,
                placeholder_name: name,
                promise_name: promiseNameRef.current,
                suspense_count: String(suspenseCountRef.current)
              }));
            });
          }
        }
      }, [name, unstable_avoidThisFallback]);

      const markAsBackupPlaceholder = useCallback(() => {
        isBackupPlaceholder.current = true;
      }, []);

      let updatedChildren = children;
      let updatedFallback = fallback;

      if (addMarkersToChildren && addMarkersToFallback) {
        updatedChildren = addMarkersToChildren(children);
        updatedFallback = addMarkersToFallback(updatedFallback)
      }

      let hud = null;
      if (suspenseHUDRef && CometSuspenseHUD) {
          hud = <CometSuspenseHUD desc={suspenseHUDRef} />;
      }
    

      return (
        <HeroPlaceholder
            fallback={
                <>
                    {fallback}
                    <IncrementSuspenseCount cb={incrementSuspenseCount} />
                    {hud}
                </>
            }
            name={name}
            unstable_avoidThisFallback={isBackupPlaceholder.current}
            unstable_onSuspense={onSuspense}
            children={
                <>
                    <IncrementSuspenseCount cb={markAsBackupPlaceholder} />
                    {children}
                </>
            }
        />
    );
  }
  