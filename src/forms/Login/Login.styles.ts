import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette, spacing } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexGrow: 1,
      maxWidth: 656,
      maxHeight: 656,
      border: `1px solid ${palette.divider}`,
      padding: spacing(10, 6.5),
    }),

    form: css({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      gap: spacing(2),
    }),
  };
};
