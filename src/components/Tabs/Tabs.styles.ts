import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();

  return {
    withBackground: css({
      backgroundColor: palette.primary.dark,
    }),

    tab: css({
      color: palette.primary.contrastText,
      opacity: 0.7,

      ' .Mui-selected': {
        color: 'red !important',
      },
    }),
  };
};
