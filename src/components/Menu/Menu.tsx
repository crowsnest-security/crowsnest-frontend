import {
  MenuItem,
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
} from '@mui/material';

export type MenuItem = {
  content: React.ReactNode | React.ReactElement;
  onClick?: () => void;
};

type MenuProps = MuiMenuProps & {
  items: Array<MenuItem>;
};

export const Menu: React.FC<MenuProps> = ({
  anchorEl,
  open,
  items,
  ...props
}) => {
  return (
    <MuiMenu anchorEl={anchorEl} id="account-menu" open={open} {...props}>
      {items?.map((item) =>
        item.onClick ? (
          <MenuItem onClick={item.onClick}>{item.content}</MenuItem>
        ) : (
          <MenuItem>{item.content}</MenuItem>
        ),
      )}
    </MuiMenu>
  );
};
