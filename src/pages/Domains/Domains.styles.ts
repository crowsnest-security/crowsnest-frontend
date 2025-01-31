import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();
  return {
    wrapper: css({
      display: 'flex',
      flexGrow: 1,
      position: 'relative',

      padding: spacing(0, 3),
    }),

    content: css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexGrow: 1,
      maxWidth: '100%',
      gap: spacing(25),
    }),

    leftSide: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacing(4),
      width: '100%',
      // flexGrow: 1,
      // maxWidth: 1120,
    }),

    rightSide: css({
      display: 'flex',
      width: '100%',
      maxWidth: 320,
    }),

    alert: css({
      width: '100%',
      maxWidth: 560,
    }),
  };
};
