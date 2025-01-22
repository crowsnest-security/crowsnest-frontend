import { HeaderLogin } from '@/components/Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';

import { useStyles } from './Layout.styles';

export const Layout: React.FC = () => {
  const styles = useStyles();

  return (
    <Box css={styles.root}>
      <HeaderLogin />
      <Outlet />
    </Box>
  );
};
