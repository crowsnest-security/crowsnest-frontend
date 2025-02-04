import { DialogActions } from '@mui/material';
import React from 'react';

import { ModalActionsProps } from './types';

export const ModalsActions: React.FC<ModalActionsProps> = (props) => {
  return <DialogActions {...props} />;
};
