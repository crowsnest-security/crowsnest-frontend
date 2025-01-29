import MoreVerticalIcon from '@/assets/more_vertical.svg?react';
import { Menu, MenuItem } from '@/components/Menu';
import { Switch } from '@/components/Switch';
import { Typography } from '@/components/Typography';
import { useMenu } from '@/hooks/useMenu';
import { useMUIValues } from '@/providers/muiProvider';
import { Box, IconButton, useTheme } from '@mui/material';

const ThemeSwitch = () => {
  const { palette } = useTheme();
  const { toggleColorMode } = useMUIValues();

  const isDarkMode = palette.mode === 'dark';

  return (
    <Box>
      <Typography variant="body1" component="span">
        Light mode
      </Typography>
      <Switch checked={isDarkMode} onChange={toggleColorMode} />
      <Typography variant="body1" component="span">
        Dark mode
      </Typography>
    </Box>
  );
};

const MENU_ITEMS: Array<MenuItem> = [{ content: <ThemeSwitch /> }];

export const ProfileMenu = () => {
  const { anchorElement, isOpen, setAnchorElement } = useMenu();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => setAnchorElement(null);

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <MoreVerticalIcon />
      </IconButton>
      <Menu
        items={MENU_ITEMS}
        anchorEl={anchorElement}
        open={isOpen}
        onClose={handleClose}
      />
    </>
  );
};
