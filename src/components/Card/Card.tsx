import FailImage from '@/assets/fail.png';
import PassImage from '@/assets/pass.png';
import {
  Avatar,
  Box,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Card as MuiCard,
} from '@mui/material';

import { Divider } from '../Divider';
import { Typography } from '../Typography';

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
          <CardMedia
            component="img"
            image={status ? PassImage : FailImage}
            alt={status ? 'Pass' : 'Fail'}
          />
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
