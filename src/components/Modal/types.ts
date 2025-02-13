import { DialogProps } from '@mui/material';
import React from 'react';

export type ModalActionsProps = Record<string, unknown>;

export type ModalContainerProps = Omit<DialogProps, 'title'> & {
  title: string | React.ReactElement;
  open: boolean;
  children: React.ReactNode;
};
