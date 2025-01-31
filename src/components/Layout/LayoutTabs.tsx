import { Tabs } from '@/components/Tabs';
import { useCommonDataStore } from '@/stores/common';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useStyles } from './Layout.styles';
import { DASHBOARD_TAB_VALUE, TABS } from './constants';

export const LayoutTabs = () => {
  const [activeTab, setActiveTab] = useState(DASHBOARD_TAB_VALUE);
  const { mode } = useCommonDataStore();
  const styles = useStyles();
  const navigate = useNavigate();

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
