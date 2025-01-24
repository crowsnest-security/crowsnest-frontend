import { Drawer } from '@/components/Drawer';
import { Header } from '@/components/Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';

import { useStyles } from './Layout.styles';

export const AuthorizedLayout: React.FC = () => {
  const styles = useStyles();

  return (
    <Box css={styles.root}>
      <Header />

      <Box css={styles.content}>
        <Drawer />
        <Outlet />
      </Box>
    </Box>
  );
};
