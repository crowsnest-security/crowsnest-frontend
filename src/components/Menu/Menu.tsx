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
    <MuiMenu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      //   slotProps={{
      //     paper: {
      //       elevation: 0,
      //       sx: {
      //         overflow: 'visible',
      //         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      //         mt: 1.5,
      //         '& .MuiAvatar-root': {
      //           width: 32,
      //           height: 32,
      //           ml: -0.5,
      //           mr: 1,
      //         },
      //         '&::before': {
      //           content: '""',
      //           display: 'block',
      //           position: 'absolute',
      //           top: 0,
      //           right: 14,
      //           width: 10,
      //           height: 10,
      //           bgcolor: 'background.paper',
      //           transform: 'translateY(-50%) rotate(45deg)',
      //           zIndex: 0,
      //         },
      //       },
      //     },
      //   }}
      //   transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      //   anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      {...props}
    >
      {items?.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          {item.content}
        </MenuItem>
      ))}
    </MuiMenu>
  );
};
