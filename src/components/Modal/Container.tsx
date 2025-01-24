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
  ...otherProps
}) => {
  const modalStyles = useStyles();
  console.log('otherProps', otherProps);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      {...otherProps}
      css={modalStyles.paperScrollPaper} // TODO: add classname from outside
    >
      <DialogTitle css={modalStyles.title} variant="h6">
        {title}
      </DialogTitle>
      {children}
    </Dialog>
  );
};
