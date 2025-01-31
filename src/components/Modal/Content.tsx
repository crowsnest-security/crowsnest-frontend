import { DialogContent, DialogContentProps } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

type ModalsContentProps = DialogContentProps;

export const ModalsContent: React.FC<ModalsContentProps> = ({
  children,
  className,
  ...props
}) => {
  const styles = useStyles();
  return (
    <DialogContent className={className} css={styles.contentRoot} {...props}>
      {children}
    </DialogContent>
  );
};
