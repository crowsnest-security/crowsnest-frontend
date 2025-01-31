import { IMenuItem } from '@/types/menuItem';
import { List, ListItemButton } from '@mui/material';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

export const MenuItemsList = ({ items = [] }: { items?: IMenuItem[] }) => {
  if (!items.length) return null;

  return (
    <List>
      {items.map(({ label, Icon }, index) => (
        <ListItem key={label} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
