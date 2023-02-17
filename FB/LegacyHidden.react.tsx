import React, { Ref, forwardRef } from "react";
const R = require("react")

import { LegacyHiddenProps } from "./types";


const LegacyHidden = (props: LegacyHiddenProps, ref: Ref<HTMLDivElement>) => {

  const {
    children,
    mode,
    suppressHydrationWarning,
    htmlAttributes
  } = props;

  return (
    <div
      {...htmlAttributes}
      hidden={mode === "hidden" ? true : undefined}
      ref={ref}
      suppressHydrationWarning={suppressHydrationWarning}
    // {...Object.assign({}, htmlAttributes, {
    //   hidden: mode === "hidden" ? true : undefined,
    //   ref,
    //   suppressHydrationWarning,
    // })}
    >
      <R.unstable_LegacyHidden
        mode={mode === "hidden" ? "unstable-defer-without-hiding" : mode}
      >
        {children}
      </R.unstable_LegacyHidden>
    </div>
  )
}

LegacyHidden.displayName = `${LegacyHidden.name} [from LegacyHidden]`
LegacyHidden.displayName = "LegacyHidden"

const LegacyHidden = forwardRef(LegacyHidden);
export default LegacyHidden;
export { LegacyHidden }
