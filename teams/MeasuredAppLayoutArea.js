const {
    memo: il,
    useCallback: al,
    useMemo: ol,
    useState: rl
} = s, sl = il((({
    isLayoutSlotInError: e,
    bounds: t,
    layoutAreaProps: n,
    layoutSlot: i,
    onAreaMeasurementsAvailable: a,
    slotName: o
}) => {
    const {
        enableConvergedAppLayoutArea: s,
        enableVisualRefreshBackground: l,
        revealLayoutSlotsAnimationTiming: d
    } = (0, m.NC)(p.J.Core, ["enableConvergedAppLayoutArea", "enableVisualRefreshBackground", "revealLayoutSlotsAnimationTiming"]), c = !!l, u = ol((() => Object.assign(Object.assign({
        isRefreshBackground: c,
        revealLayoutSlotsAnimationTiming: d
    }, null == i ? void 0 : i.variables), null == n ? void 0 : n.variables)), [n, c, i, d]), g = s ? Ds : ss;
    if (!i || e) return null;
    const {
        isSubNavSlideOutMenu: v
    } = u, h = !!v || o === Gt.WL.MODAL;
    return (0, r.createElement)(g, Object.assign({}, n, {
        area: o,
        bounds: t,
        content: i.slot,
        disableResponsiveContainerMeasured: h,
        InnerComponent: tl,
        key: o,
        onAreaMeasurementsAvailable: a,
        variables: u
    }))
}));
sl.displayName = "MeasuredAppLayoutArea";


import { memo, useCallback, useMemo, useState } from 'react';

const MeasuredAppLayoutArea = memo(({
  isLayoutSlotInError,
  bounds,
  layoutAreaProps,
  layoutSlot,
  onAreaMeasurementsAvailable,
  slotName,
}) => {
  const {
    enableConvergedAppLayoutArea,
    enableVisualRefreshBackground,
    revealLayoutSlotsAnimationTiming,
  } = useContext(Context); // Assuming Context is a defined context

  const isRefreshBackground = !!enableVisualRefreshBackground;
  const variables = useMemo(
    () => ({
      isRefreshBackground,
      revealLayoutSlotsAnimationTiming,
      ...layoutSlot?.variables,
      ...layoutAreaProps?.variables,
    }),
    [layoutAreaProps, layoutSlot, isRefreshBackground, revealLayoutSlotsAnimationTiming]
  );

  const Component = enableConvergedAppLayoutArea ? Ds : ss; // Assuming Ds and ss are defined components

  if (!layoutSlot || isLayoutSlotInError) return null;

  const isDisableResponsiveContainerMeasured =
    variables.isSubNavSlideOutMenu || slotName === 'MODAL';

  return (
    <Component
      {...layoutAreaProps}
      area={slotName}
      bounds={bounds}
      content={layoutSlot.slot}
      disableResponsiveContainerMeasured={isDisableResponsiveContainerMeasured}
      InnerComponent={tl} // Assuming tl is a defined component
      key={slotName}
      onAreaMeasurementsAvailable={onAreaMeasurementsAvailable}
      variables={variables}
    />
  );
});

MeasuredAppLayoutArea.displayName = 'MeasuredAppLayoutArea';
