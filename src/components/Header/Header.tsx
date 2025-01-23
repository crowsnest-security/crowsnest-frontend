import AvatarPhoto from '@/assets/avatar.png';
import CrowLogo from '@/assets/crow_logo.svg?react';
import MenuFilledIcon from '@/assets/menu_filled.svg?react';
import MoreVerticalIcon from '@/assets/more_vertical.svg?react';
import NotificationsFilledIcon from '@/assets/notifications_filled.svg?react';
import { TextFieldWithSearch } from '@/components/TextField';
import { useRouteName } from '@/hooks/useRouteName';
import { Avatar, Box, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Typography } from '../Typography';
import { useStyles } from './Header.styles';

export const Header = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const routeName = useRouteName();

  return (
    <Box css={styles.root}>
      <Box css={styles.box} gap={2}>
        <MenuFilledIcon />
        <CrowLogo />
        <Typography variant="h6" css={styles.appName}>
          {t('header.appName')}
        </Typography>
        {/* TODO: text according page route */}
        <Typography variant="h6" css={styles.pageName}>
          {routeName}
        </Typography>
      </Box>

      <Box css={styles.box} gap={1}>
        <TextFieldWithSearch />
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
        <IconButton>
          <NotificationsFilledIcon />
        </IconButton>
        <IconButton>
          <MoreVerticalIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
