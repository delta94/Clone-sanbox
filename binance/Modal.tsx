import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Flex, VisuallyHidden } from 'rebass';
import { ReactComponent as SvgComponent } from 'path-to-svg';
import { useTheme } from 'emotion-theming';
import { useDevice } from 'path-to-device-library';
import { Dialog, Drawer } from 'path-to-dialog-library';
import CloseButton from "./CloseButton"

    const modalStyles = {
    height: ['56px', '64px'],
    lineHeight: ['56px', '64px'],
    pl: ['16px', '24px']
    };

const Modal = ({
  children,
  visible,
  onMaskClick,
  mask,
  layerProps = {},
  responsive = true,
  keepMobileStyle = false,
  headerComponent,
  onCancel = () => {},
  hideClose,
  mobileAsDialog,
  ...rest
}) => {
  const { isMobile } = useDevice();
  const shouldUseMobileStyle = (isMobile && responsive) || keepMobileStyle;

  if (shouldUseMobileStyle && !mobileAsDialog) {
    return (
      <>
        {visible && (
          <Drawer
            id="kl999"
            maskBg="dialog.mask"
            direction="bottom"
            visible={visible}
            bg="dialog.mask"
            outerClick={onMaskClick}
            {...layerProps}
          >
            <Box
              id="drow-content"
              sx={{
                bg: 'bg0',
                height: '500px',
                overflow: 'auto',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
              }}
            >
              <Flex
                tx="modal"
                variant="drawer"
                width="100%"
                height="100%"
                {...rest}
              >
                {!hideClose && (
                  <CloseButton
                    onClick={onCancel}
                    size={12}
                    sx={{
                      position: 'absolute',
                      cursor: 'pointer',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.02)',
                      borderRadius: '4px',
                      zIndex: 1000,
                      top: '16px',
                      right: '16px',
                      color: 'iconNormal'
                    }}
                  />
                )}
                {headerComponent && (
                  <Box sx={{ originSx: modalStyles }}>{headerComponent}</Box>
                )}
                {children}
              </Flex>
            </Box>
          </Drawer>
        )}
      </>
    );
  } else {
    return (
      <Dialog
        mask={mask}
        visible={visible}
        onMaskClick={onMaskClick}
        width={['298px', '360px']}
        {...layerProps}
      >
        {!hideClose && (
          <CloseButton
            onClick={onCancel}
            size={22}
            sx={{
              position: 'absolute',
              cursor: 'pointer',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.02)',
              borderRadius: '4px',
              zIndex: 1000,
              top: '20px',
              right: '20px',
              color: 'iconNormal'
            }}
          />
        )}
        {headerComponent && (
          <Box sx={modalStyles}>{headerComponent}</Box>
        )}
        <Flex tx="modal" variant="default" {...rest}>
          {children}
        </Flex>
      </Dialog>
    );
  }
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  onMaskClick: PropTypes.func,
  mask: PropTypes.bool,
  layerProps: PropTypes.object,
  responsive: PropTypes.bool,
  keepMobileStyle: PropTypes.bool,
  headerComponent: PropTypes.node,
  onCancel: PropTypes.func,
  hideClose: PropTypes.bool,
  mobileAsDialog: PropTypes.bool
};

export default Modal;
