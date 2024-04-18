const AppLayoutArea = memo(forwardRef((props, ref) => {
    const {
      area,
      bounds,
      content,
      disableResponsiveContainerMeasured,
      height,
      InnerComponent,
      onAreaMeasurementsAvailable,
      style,
      variables,
      width
    } = props;
  
    const {
      areEmptySlotsTransparent,
      areaRectangle,
      draggableAreaHeight,
      isColorSchemeDefaultBackground3,
      isColorSchemeDefaultBackground2,
      isColorSchemeDefaultBackground4,
      isColorSchemeDefaultBackground6,
      isSlotBackgroundSemiTransparent,
      isFloatable
    } = variables || {};
  
    const areaClassNames = [f8('fui-AppLayoutArea'), isFloatable && f8('isFloatable'), area === Core.WL.MODAL && f8('isModalSlot'), isColorSchemeDefaultBackground3 && f8('isSlotBackground3'), isColorSchemeDefaultBackground2 && f8('isSlotBackground2'), isColorSchemeDefaultBackground4 && f8('isSlotBackground4'), isColorSchemeDefaultBackground6 && f8('isSlotBackground6'), areEmptySlotsTransparent && f8('areEmptySlotsTransparent'), isSlotBackgroundSemiTransparent && f8('isSlotBackgroundSemiTransparent'), bounds && f8('isDraggable')];
  
    const enableDraggableSlots = NC(p.J.Core, ['enableDraggableSlots']);
    const enableVisualRefreshBackground = NC(p.J.Core, ['enableVisualRefreshBackground']);
    const isVisualRefreshEnabled = !!enableVisualRefreshBackground;
  
    const theme = useTheme();
    const themeType = theme.siteVariables.themeType;
  
    const appLayoutStyles = css`
      gridArea: ${area};
      height: ${height};
      width: ${width};
      ${style}
    `;
  
    const renderInnerComponent = useMemo(() => {
      return (
        <InnerComponent
          area={area}
          areEmptySlotsTransparent={!!areEmptySlotsTransparent}
          content={content}
          disableResponsiveContainerMeasured={!!disableResponsiveContainerMeasured}
          onAreaMeasurementsAvailable={onAreaMeasurementsAvailable}
        />
      );
    }, [area, areEmptySlotsTransparent, content, disableResponsiveContainerMeasured, onAreaMeasurementsAvailable, InnerComponent]);
  
    return (
      <div
        ref={ref}
        className={areaClassNames.join(' ')}
        style={appLayoutStyles}
      >
        {renderInnerComponent}
        {variables?.isDraggable && area && <ps area={area} />}
      </div>
    );
  }));
  
  AppLayoutArea.displayName = 'AppLayoutArea';
  
  export default AppLayoutArea;