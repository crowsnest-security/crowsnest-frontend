import { MenuItemsList } from '@/components/MenuItemList';
import { MENU_LIST } from '@/contstants/drawer';
import { useLayoutStore } from '@/stores/layout';
import { Drawer as MuiDrawer } from '@mui/material';

import { useStyles } from './Drawer.styles';

export const Drawer = () => {
  const { isDrawerOpen, toggleDrawer } = useLayoutStore();
  const styles = useStyles(isDrawerOpen);

  return (
    <MuiDrawer
      css={styles.drawer}
      variant="permanent"
      open={isDrawerOpen}
      onClose={toggleDrawer}
    >
      <MenuItemsList items={MENU_LIST} />
    </MuiDrawer>
  );
};
