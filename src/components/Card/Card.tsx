import AppStatusIcon from '@/assets/app_status.svg?react';
import {
  Avatar,
  Box,
  CardActions,
  CardContent,
  CardHeader,
  Card as MuiCard,
} from '@mui/material';

import { Divider } from '../Divider';
import { Typography } from '../Typography';
import { useStyles } from './Card.styles';

type CardProps = {
  status?: boolean;
  actions?: React.ReactNode;
  avatar?: string;
  title?: string;
  content?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({
  status,
  actions,
  avatar,
  title,
  content,
}) => {
  const styles = useStyles();

  return (
    <MuiCard
      sx={{ maxWidth: 266, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <CardHeader
        avatar={avatar && <Avatar src={avatar}></Avatar>}
        title={title && <Typography variant="body1">{title}</Typography>}
      />
      {(status === true || status === false) && (
        <Box
          padding="12px 29px"
          bgcolor="primary.dark"
          display="flex"
          justifyItems="center"
          alignItems="center"
          flexGrow={1}
          width="100%"
        >
          <AppStatusIcon css={status ? styles.appSuccess : styles.appFail} />
        </Box>
      )}
      {content && (
        <CardContent style={{ padding: '16px 8px' }}>{content}</CardContent>
      )}
      {actions && <Divider />}
      {actions && (
        <CardActions style={{ justifyContent: 'flex-end' }}>
          {actions}
        </CardActions>
      )}
    </MuiCard>
  );
};
