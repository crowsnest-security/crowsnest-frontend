import HomeFilledIcon from '@/assets/home_filled.svg?react';
import {
  BreadcrumbsProps,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
} from '@mui/material';

// import { useLocation } from 'react-router';

import { Typography } from '../Typography';
import { useStyles } from './Breadcrumbs.styles';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const styles = useStyles();
  // TODO: integrate pathname for define breadcrumbs path
  // const { pathname } = useLocation();

  const handleClickLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <MuiBreadcrumbs separator="/" {...props}>
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        onClick={handleClickLink}
        css={styles.link}
      >
        <HomeFilledIcon />
        <Typography variant="body1">Dashboard</Typography>
      </Link>
    </MuiBreadcrumbs>
  );
};
