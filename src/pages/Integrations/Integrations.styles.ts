import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      gap: spacing(3),

      padding: spacing(0, 3),
    }),

    top: css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: spacing(2),
    }),
  };
};
