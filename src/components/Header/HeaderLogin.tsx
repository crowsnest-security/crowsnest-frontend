import HeaderLogo from '@/assets/header_logo.svg?react';

import { useStyles } from './Header.styles';

export const HeaderLogin = () => {
  const styles = useStyles();

  return (
    <div css={styles.root}>
      <HeaderLogo />
    </div>
  );
};
