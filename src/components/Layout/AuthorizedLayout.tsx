import { Drawer } from '@/components/Drawer';
import { Header } from '@/components/Header';
import { useDashboardDescription } from '@/hooks/useDashboardDescription';
import { useProfilesListQuery } from '@/queries/profile';
import { useCommonDataStore } from '@/stores/common';
import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router';

import { Breadcrumbs } from '../Breadcrumbs';
import { ModeSwitch } from '../ModeSwitch';
import { ProfilesGroup } from '../ProfilesGroup';
import { Tabs } from '../Tabs';
import { Typography } from '../Typography';
import { useStyles } from './Layout.styles';
import { DASHBOARD_TAB_VALUE, TABS } from './constants';

export const AuthorizedLayout: React.FC = () => {
  const styles = useStyles();
  const { mode } = useCommonDataStore();
  const isAdminMode = mode === 'admin';
  const description = useDashboardDescription();

  const [activeTab, setActiveTab] = useState(DASHBOARD_TAB_VALUE);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

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
              <Breadcrumbs />
              <Box css={styles.leftControls}>
                <ProfilesGroup />
                <ModeSwitch />
              </Box>
            </Box>
            <Typography variant="body1" css={styles.description}>
              {description}
            </Typography>
            {isAdminMode ? (
              <Tabs
                tabs={TABS}
                value={activeTab}
                onChange={handleChange}
                withBackground
                css={styles.tabs}
              />
            ) : (
              <Box />
            )}
            <Outlet />
          </Box>
        )}
      </Box>
    </Box>
  );
};
