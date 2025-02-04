import HeaderLogo from '@/assets/header_logo.svg?react';
import { AppBar, Toolbar } from '@mui/material';

import { useStyles } from './Header.styles';

export const HeaderLogin = () => {
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar css={styles.toolbar}>
        <HeaderLogo />
      </Toolbar>
    </AppBar>
  );
};
