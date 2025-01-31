import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = (isOpened: boolean) => {
  const { transitions } = useTheme();

  return {
    drawer: css({
      width: isOpened ? 256 : 0,
      height: '100%',
      overflow: 'auto',
      transition: isOpened
        ? transitions.create('width', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.enteringScreen,
          })
        : transitions.create('width', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen,
          }),

      '& .MuiDrawer-paper': {
        position: 'static',
        overflowX: 'hidden',
      },
    }),
  };
};
