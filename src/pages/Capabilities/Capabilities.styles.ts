import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing, palette } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',

      padding: spacing(0, 3),
    }),

    texts: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacing(2),
    }),

    description: css({
      color: palette.text.secondary,
    }),
    note: css({
      color: palette.text.secondary,
    }),

    content: css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexGrow: 1,
      maxWidth: '100%',
      gap: spacing(10),
    }),

    leftSide: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacing(3),
      width: '100%',
    }),

    rightSide: css({
      display: 'flex',
      width: '100%',
      maxWidth: 320,
    }),
  };
};
