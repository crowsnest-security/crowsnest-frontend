import { Drawer } from '@/components/Drawer';
import { Header } from '@/components/Header';
import { Routes } from '@/constants/routes';
import { useDashboardDescription } from '@/hooks/useDashboardDescription';
import { useProfilesListQuery } from '@/queries/profile';
import { Box, CircularProgress } from '@mui/material';
import { Outlet, useLocation } from 'react-router';

// import { Breadcrumbs } from '../Breadcrumbs';
import { ProfilesGroup } from '../ProfilesGroup';
import { Typography } from '../Typography';
import { useStyles } from './Layout.styles';
import { LayoutTabs } from './LayoutTabs';

export const AuthorizedLayout: React.FC = () => {
  const styles = useStyles();
  const description = useDashboardDescription();
  const { pathname } = useLocation();

  const isDashboardActive = pathname === Routes.INDEX;

  const { isLoading } = useProfilesListQuery();

  return (
    <Box css={styles.root}>
      <Header />

      <Box css={styles.workspace}>
        <Drawer />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box css={styles.content}>
            <Box css={styles.controls}>
              {/* TODO: disabled for now due to tabs have the same functionality */}
              {/* <Breadcrumbs /> */}
              <Box css={styles.leftControls}>
                {isDashboardActive && <ProfilesGroup />}
              </Box>
            </Box>
            <Typography variant="body1" css={styles.description}>
              {description}
            </Typography>
            <LayoutTabs />
            <Outlet />
          </Box>
        )}
      </Box>
    </Box>
  );
};
