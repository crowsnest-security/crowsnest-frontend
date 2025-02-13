import { Tabs } from '@/components/Tabs';
import { UserRole } from '@/constants/auth';
import { useAuthStore } from '@/stores/auth';
import { useEffect, useState } from 'react';
import { To, useLocation, useNavigate } from 'react-router';

import { useStyles } from './Layout.styles';
import { DASHBOARD_TAB_VALUE, TABS } from './constants';

export const LayoutTabs = () => {
  const [activeTab, setActiveTab] = useState(DASHBOARD_TAB_VALUE);

  const styles = useStyles();
  const navigate = useNavigate();
  const { userRole } = useAuthStore();

  const { pathname } = useLocation();

  // when route don't match active tab
  useEffect(() => {
    const activeRoute = TABS?.find((tab) => tab.value === activeTab)?.route;

    if (pathname !== activeRoute) {
      const newTab = TABS?.find((tab) => tab.route === pathname);
      newTab?.value && setActiveTab(newTab?.value);
    }
  }, [pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    const newRoute = TABS?.find((tab) => tab.value === newValue)?.route;
    if (newRoute) {
      navigate(newRoute as To);
    }
  };

  const isAdminMode = userRole === UserRole.ADMIN;

  return isAdminMode ? (
    <Tabs
      tabs={TABS}
      value={activeTab}
      onChange={handleChange}
      withBackground
      css={styles.tabs}
    />
  ) : (
    <></>
  );
};
