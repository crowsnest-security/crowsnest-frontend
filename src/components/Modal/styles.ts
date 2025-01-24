import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();
  return {
    title: css({
      padding: spacing(2, 3),
    }),

    paperScrollPaper: css({
      display: 'flex',
      maxHeight: '100%',
      flexDirection: 'column',
    }),

    contentRoot: css({
      padding: spacing(0, 5),
      overflowX: 'hidden',
    }),
  };
};
