import { DialogContent, DialogContentProps } from '@mui/material';
import React from 'react';

type ModalsContentProps = DialogContentProps;

export const ModalsContent: React.FC<ModalsContentProps> = ({
  children,
  ...props
}) => {
  return <DialogContent {...props}>{children}</DialogContent>;
};
