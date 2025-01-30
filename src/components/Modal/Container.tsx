import { ClassNames } from '@emotion/react';
import { Dialog, DialogTitle, css } from '@mui/material';
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

  return (
    <ClassNames>
      {({ css, cx }) => (
        <Dialog
          onClose={onClose}
          open={open}
          {...otherProps}
          className={className}
          css={[modalStyles.paperScrollPaper]}
        >
          <DialogTitle css={modalStyles.title} variant="h6">
            {title}
          </DialogTitle>
          {children}
        </Dialog>
      )}
    </ClassNames>
  );
};
