import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();

  return {
    root: css({
      zIndex: 100,
      width: 'calc(100% - 160px)',
      placeSelf: 'center',
    }),

    carouselBackground: css({
      textAlign: 'center',
      position: 'absolute',
      top: 0,
      width: '100%',
      marginTop: 60,

      height: 320,
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', //TODO: add color to theme
    }),

    carouselBackgroundButton: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: 80,
    }),

    carouselIcon: css({
      fill: palette.text.primary,
    }),
  };
};
