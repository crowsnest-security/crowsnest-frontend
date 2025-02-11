import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing, palette } = useTheme();

  return {
    modalsContent: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacing(4),

      '& .MuiPaper-root': {
        width: '100vw',
        maxWidth: '100vw',

        height: 820,
      },
    }),

    paper: css({
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 0,
      margin: 0,
      width: '100vw',
      maxWidth: '100vw',
      height: 820,
    }),

    header: css({
      backgroundColor: palette.primary.dark,
      color: palette.common.white,
      padding: spacing(2),
    }),
  };
};
