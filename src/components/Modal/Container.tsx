import { Dialog, DialogTitle } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';
import { ModalContainerProps } from './types';

export const ModalsContainer: React.FC<ModalContainerProps> = ({
  title,
  open,
  onClose,
  children,
  className,
  withSpecificHeader,
  ...otherProps
}) => {
  const modalStyles = useStyles();

  return (
    <Dialog
      onClose={onClose}
      open={open}
      {...otherProps}
      className={className}
      css={[modalStyles.paperScrollPaper]}
    >
      <DialogTitle
        css={[
          modalStyles.title,
          withSpecificHeader && modalStyles.titleClassName,
        ]}
        variant="h6"
      >
        {title}
      </DialogTitle>
      {children}
    </Dialog>
  );
};
