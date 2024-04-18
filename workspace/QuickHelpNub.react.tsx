__d("GeminiQuickHelpNub.react", ["fbt", "ix", "CometEntryPointPopoverTrigger.react", "CometIcon.react", "CometPressable.react", "GeminiNub.react", "GeminiQuickHelpNubMenu.entrypoint", "WorkAdoptionOnboardingLoggerFalcoEvent", "fbicon", "react"], (function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j, k = j || (j = d("react")),
        l = j.useState;

    function a() {
        var a = l(!1),
            b = a[0];
        a = a[1];
        var e = h._("Quick Help");
        return k.jsx(c("CometEntryPointPopoverTrigger.react"), {
            align: "middle",
            entryPointParams: {},
            onVisibilityChange: a,
            otherProps: {},
            popoverEntryPoint: c("GeminiQuickHelpNubMenu.entrypoint"),
            popoverType: "menu",
            position: "end",
            children: function (a, f) {
                return k.jsx(c("GeminiNub.react"), {
                    title: h._("Quick Help"),
                    children: k.jsx(c("CometPressable.react"), {
                        "aria-label": e,
                        display: "block",
                        onPress: function () {
                            c("WorkAdoptionOnboardingLoggerFalcoEvent").log(function () {
                                return {
                                    event: "QUICK_HELP_NUB_CLICKED"
                                }
                            }), f()
                        },
                        overlayDisabled: !0,
                        ref: a,
                        testid: void 0,
                        children: function (a) {
                            a = a.hovered;
                            return k.jsx(c("CometIcon.react"), {
                                color: a || b ? "secondary" : "tertiary",
                                icon: b ? d("fbicon")._(i("496951"), 20) : d("fbicon")._(i("496959"), 20)
                            })
                        }
                    })
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);



import * as React from 'react';
import { useState } from 'react';

import { fbt } from 'fbt';
import { CometEntryPointPopoverTrigger, CometIcon, CometPressable } from 'components'; 
import { GeminiNub, GeminiQuickHelpNubMenu } from 'nubs';

import { WorkAdoptionOnboardingLoggerFalcoEvent } from 'loggers';
import { fbicon } from 'iconImports';

interface Props {
  // No props for this component
}

const QuickHelpNub: React.FC<Props> = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openLabel = fbt._('Quick Help');

  return (
    <CometEntryPointPopoverTrigger
      align="middle"
      entryPointParams={{}}
      onVisibilityChange={setIsOpen}
      otherProps={{}}
      popoverEntryPoint={GeminiQuickHelpNubMenu} 
      popoverType="menu"
      position="end"
    >
      {({ ref, showPopover }) => (
        <GeminiNub title={fbt._('Quick Help')}>
          <CometPressable
            aria-label={openLabel}
            display="block"
            onPress={() => {
              WorkAdoptionOnboardingLoggerFalcoEvent.log(() => {
                return {
                    event: "QUICK_HELP_NUB_CLICKED"
                }
              });
              showPopover();
            }}
            overlayDisabled
            ref={ref}
          >
            {({ hovered }) => (
              <CometIcon 
                color={(hovered || isOpen) ? 'secondary' : 'tertiary'}
                icon={isOpen ? fbicon('496951', 20) : fbicon('496959', 20)}  
              />
            )}
          </CometPressable>
        </GeminiNub>
      )}
    </CometEntryPointPopoverTrigger>
  );
};

export default QuickHelpNub;
