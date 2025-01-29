import { css } from '@emotion/react';
import {
  Tab as MuiTab,
  TabProps as MuiTabProps,
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
} from '@mui/material';

import { useStyles } from './Tabs.styles';

type TabsProps = MuiTabsProps & {
  withBackground?: boolean;
  tabs: Array<{ label: string; value: string | number }>;
};

export const Tabs: React.FC<TabsProps> = ({
  withBackground = false,
  tabs,
  className,
  ...props
}) => {
  const styles = useStyles();

  return (
    <MuiTabs
      css={css(styles.withBackground)}
      className={`   ${className || ''}`}
      {...props}
    >
      {tabs?.map((tab) => (
        <Tab key={tab.value} label={tab.label} value={tab.value} />
      ))}
    </MuiTabs>
  );
};

type TabProps = MuiTabProps & {};

export const Tab: React.FC<TabProps> = (props) => {
  const styles = useStyles();

  return <MuiTab css={styles.tab} {...props} />;
};
