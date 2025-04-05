import { Box, Modal, ModalOwnProps } from '@mui/material';
import { classNames } from 'shared/lib';

import classes from './MuiModal.module.scss';
import { ModalSize } from './types';

interface UiModalProps extends ModalOwnProps{
  className?: string;
  size?: string;
}

export const MuiModal = ({
  size = ModalSize.SMALL,
  children,
  className,
  ...modalProps
}: UiModalProps) => (
  <Modal
    className={classNames({ additional: [className] })}
    {...modalProps}
  >
    <Box
      className={classNames({ cls: classes.modalContent, additional: [classes[size]] })}
    >
      {children}
    </Box>
  </Modal>
);
