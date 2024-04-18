const THRESHOLD = 5;

const PresetItem = ({
    id, 
    preset,
    elementItemClickHandlers,
    elementItemDragStartHandlers,
    elementItemHelpIconClickHandlers,
    elementItemMouseEnterHandlers,
    pluginStyleOverrides,
    elementItemMouseLeave,
    siteSlug,
    plugins
  }) => {
  
    const libraries = useDesignerSelector(state => state.DesignerStore.libraries);
    const pluginName = getPluginName(id);
    const name = getName(id);
    
    const icon = ElementPreset.getIcon(preset)
    const label = ElementPreset.getLabel(preset)
    const dynamic = ElementPreset.getDynamic(preset)
    const needsUpgrade = ElementPreset.getNeedsUpgrade(preset)
    const enableIfFlag = ElementPreset.getEnableIfFlag(preset)
    const beta = ElementPreset.getBeta(preset)
    const isNew = ElementPreset.getIsNew(preset)
    const prebuiltLayoutsImage = ElementPreset.getPrebuiltLayoutsImage(preset)
    
    const isFromLibrary = Object.keys(libraries).includes(pluginName) && pluginName !== 'PrebuiltLayouts' || pluginNameToString(pluginName) === "PrebuiltLayouts";
    
    const meetsEnableIfFlag = !enableIfFlag || !!props[enableIfFlag];
    
    const onClick = meetsEnableIfFlag && elementItemClickHandlers.get(qualify(pluginName, name));
    const onDragStart = meetsEnableIfFlag && elementItemDragStartHandlers && elementItemDragStartHandlers.get(qualify(pluginName, name));
    const onHelpIconClick = elementItemHelpIconClickHandlers && elementItemHelpIconClickHandlers.get(qualify(pluginName, name));
    const onMouseEnter = elementItemMouseEnterHandlers && elementItemMouseEnterHandlers.get(qualify(pluginName, name)) || noop;
    const onMouseLeave = elementItemMouseLeave || noop;
    
    let iconElement = "";
    
    if (prebuiltLayoutsImage) {
      iconElement = (
        <img 
          src={prebuiltLayoutsImage}
          alt={`${label} layout`} 
          itemHeight={pluginStyleOverrides?.maxHeight}
        />
      );
    } else {
      iconElement = <Plugins.PluginIcon icon={icon.medium} />;
    }
  
    return (
      <Hitarea key={JSON.stringify(id)}>
        <ElementItem 
          disabled={!meetsEnableIfFlag}
          threshold={THRESHOLD}
          icon={iconElement}
          name={label}
          isHelpIconHidden={isFromLibrary}
          isFromLibrary={isFromLibrary}
          dynamic={dynamic}
          needsUpgrade={needsUpgrade}
          beta={beta}
          isNew={isNew}
          data-automation-id={`add-tab-${name.replace(":", "-")}`}
          onClick={meetsEnableIfFlag ? onClick : noop}
          onDragStart={meetsEnableIfFlag ? onDragStart : noop}
          onHelpIconClick={onHelpIconClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          siteSlug={siteSlug}
          plugins={plugins}
          isDraggable={!!(meetsEnableIfFlag && onDragStart)}
          pluginStyleOverrides={pluginStyleOverrides}
        />
      </Hitarea>
    );
  }