import { Tabs } from '@/components/Tabs';
import { Routes } from '@/constants/routes';
import { useCommonDataStore } from '@/stores/common';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useStyles } from './Layout.styles';
import { DASHBOARD_TAB_VALUE, TABS } from './constants';

export const LayoutTabs = () => {
  const [activeTab, setActiveTab] = useState(DASHBOARD_TAB_VALUE);
  const { mode } = useCommonDataStore();
  const styles = useStyles();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  // when route don't match active tab
  useEffect(() => {
    const activeRoute = TABS?.find((tab) => tab.value === activeTab)?.route;

    if (pathname !== activeRoute && mode === 'admin') {
      const newTab = TABS?.find((tab) => tab.route === pathname);
      newTab?.value && setActiveTab(newTab?.value);
    }
  }, [pathname]);

  // when switch to dev mode
  useEffect(() => {
    if (mode === 'dev') {
      navigate(Routes.INDEX);
      setActiveTab(DASHBOARD_TAB_VALUE);
    }
  }, [mode, navigate]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    const newRoute = TABS?.find((tab) => tab.value === newValue)?.route;
    if (newRoute) {
      navigate(newRoute);
    }
  };

  const isAdminMode = mode === 'admin';

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
