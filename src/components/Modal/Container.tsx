import { Dialog, DialogTitle } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';
import { ModalContainerProps } from './types';

const Title = ({ title }: { title: string | React.ReactElement }) => {
  const modalStyles = useStyles();
  return typeof title === 'string' ? (
    <DialogTitle css={[modalStyles.title]} variant="h6">
      {title}
    </DialogTitle>
  ) : (
    title
  );
};

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
    <Dialog
      onClose={onClose}
      open={open}
      {...otherProps}
      className={className}
      css={[modalStyles.paperScrollPaper]}
    >
      <Title title={title} />
      {children}
    </Dialog>
  );
};
