import MoreVerticalIcon from '@/assets/more_vertical.svg?react';
import { Menu, MenuItem } from '@/components/Menu';
import { Switch } from '@/components/Switch';
import { Typography } from '@/components/Typography';
import { UserRole } from '@/constants/auth';
import { useMenu } from '@/hooks/useMenu';
import { useMUIValues } from '@/providers/muiProvider';
import { useAuthStore } from '@/stores/auth';
import { Box, IconButton, useTheme } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeSwitch = () => {
  const { palette } = useTheme();
  const { toggleColorMode } = useMUIValues();
  const { t } = useTranslation();

  const isDarkMode = palette.mode === 'dark';

  return (
    <Box>
      <Typography variant="body1" component="span">
        {t('header.lightMode')}
      </Typography>
      <Switch checked={isDarkMode} onChange={toggleColorMode} />
      <Typography variant="body1" component="span">
        {t('header.darkMode')}
      </Typography>
    </Box>
  );
};

const useMenuItems = (): Array<MenuItem> => {
  const { t } = useTranslation();
  const { setUserRole } = useAuthStore();

  const handleLogout = useCallback(() => {
    setUserRole(UserRole.GUEST);
  }, [setUserRole]);

  return useMemo(
    () => [
      { content: <ThemeSwitch /> },
      { onClick: handleLogout, content: t('header.logout') },
    ],
    [handleLogout, t],
  );
};

export const ProfileMenu = () => {
  const { anchorElement, isOpen, setAnchorElement } = useMenu();
  const menuItems = useMenuItems();

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
        items={menuItems}
        anchorEl={anchorElement}
        open={isOpen}
        onClose={handleClose}
      />
    </>
  );
};
