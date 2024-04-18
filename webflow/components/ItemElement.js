import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Hitarea, Draggable } from 'components';

const ElementItem = ({
  disabled,
  siteSlug,
  hover,
  dragging,
  dynamic,
  needsUpgrade,
  beta,
  isNew,
  name,
  icon,
  dataAutomationId,
  onHelpIconClick,
  onClick, 
  onMouseEnter,
  onMouseLeave,
  isDraggable,
  pluginStyleOverrides,
  isHelpIconHidden,
  isFromLibrary  
}) => {

  const upgradeExperiment = useSelector(state => state.upgradeExperiment);
  
  const dynamicElementTooltipOpen = useSelector(dynamicElementTooltipSelector);
  
  const styles = useStyles();
  
  return (
    <Tooltip
      content={needsUpgrade?.disabledMessage}
    >
      <HoverOverlay 
        open={hover}
        render={hoverProps => (
          <AddTabScreenshotTooltip 
            {...hoverProps}
            plugins={plugins}
          />
        )}
      >
        <Draggable
          hover={hover}
          dragging={dragging}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
          upgradeExperiment={upgradeExperiment}
          dataAutomationId={dataAutomationId}
          name={truncate(name, 16)}
          icon={icon}
          isDraggable={isDraggable}
          style={pluginStyleOverrides}
          isFromLibrary={isFromLibrary}
        >
          {dynamic && !dynamicElementTooltipOpen && (
            <Tooltip
              alternate
              placement="bottom"
              content={dynamicElementTooltip}
              copy
            >
              <DynamicBadgeIcon>
                <DynamicIcon />
              </DynamicBadgeIcon>
            </Tooltip>
          )}

          {disabled && needsUpgrade ? (
            upgradeExperiment ? (
              <UpgradeExperiment>
                <ExperimentIcon />  
              </UpgradeExperiment>
            ) : (
              <UpgradeNotice>
                <UpgradeLink
                  href={
                    typeof needsUpgrade.upgradeLink === 'string' 
                      ? needsUpgrade.upgradeLink
                      : needsUpgrade.upgradeLink({
                        host: 'https://webflow.com',
                        siteSlug
                      })
                  }
                  target="_blank"
                >
                  <Button variant="warning">Upgrade</Button>
                </UpgradeLink>
              </UpgradeNotice>
            )
          ) : null}

          {isNew && <NewBadge shifted={dynamic || needsUpgrade} />}
          {beta && <BetaBadge shifted={dynamic || needsUpgrade} />}
          
          {hover && !isHelpIconHidden && onHelpIconClick && !dragging && !dynamicElementTooltipOpen && (
            <HelpIcon
              visible={hover}
              onClick={onHelpIconClick}  
            >
              <IconHelp />
            </HelpIcon>
          )}
        </Draggable>
      </HoverOverlay>
    </Tooltip>
  );
};

export default Draggable(ElementItem);

// Helper components & styles