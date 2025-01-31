import AvatarPhoto from '@/assets/avatar.png';
import CrowLogo from '@/assets/crow_logo.svg?react';
import MenuFilledIcon from '@/assets/menu_filled.svg?react';
import NotificationsFilledIcon from '@/assets/notifications_filled.svg?react';
import { SearchInput } from '@/components/SearchInput';
import { useRouteName } from '@/hooks/useRouteName';
import { useLayoutStore } from '@/stores/layout';
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Typography } from '../Typography';
import { useStyles } from './Header.styles';
import { ProfileMenu } from './ProfileMenu';

export const Header = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { toggleDrawer } = useLayoutStore();

  const routeName = useRouteName();

  return (
    <>
      <AppBar position="static">
        <Toolbar css={styles.toolbar}>
          <Box css={styles.box} gap={2}>
            <IconButton color="inherit" aria-label="menu">
              <MenuFilledIcon onClick={toggleDrawer} />
            </IconButton>
            <CrowLogo />

            <Typography variant="h6" css={styles.appName} component="span">
              {t('header.appName')}
            </Typography>

            <Typography variant="h6" css={styles.pageName}>
              {routeName}
            </Typography>
          </Box>
          <Box css={styles.box} gap={1}>
            <SearchInput />
            <Box css={styles.userInfo}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Typography variant="overline" css={styles.usernameText}>
                  Name
                </Typography>
                <Typography variant="caption" css={styles.usernameText}>
                  Title
                </Typography>
              </Box>
              <Avatar src={AvatarPhoto} />
            </Box>
            <IconButton color="inherit">
              <NotificationsFilledIcon />
            </IconButton>
            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
