import AvatarPhoto from '@/assets/avatar.png';
import CrowLogo from '@/assets/crow_logo.svg?react';
import MenuFilledIcon from '@/assets/menu_filled.svg?react';
import MoreVerticalIcon from '@/assets/more_vertical.svg?react';
import NotificationsFilledIcon from '@/assets/notifications_filled.svg?react';
import { TextFieldWithSearch } from '@/components/TextField';
import { Avatar, Box, IconButton } from '@mui/material';

import { Typography } from '../Typography';
import { useStyles } from './Header.styles';

export const Header = () => {
  const styles = useStyles();
  return (
    <Box css={styles.root}>
      <Box css={styles.box} gap={2}>
        <MenuFilledIcon />
        <CrowLogo />
        <Typography variant="h6" css={styles.appName}>
          Governance Engine
        </Typography>
        {/* TODO: text according page route */}
        <Typography variant="h6" css={styles.pageName}>
          Dashboard
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
