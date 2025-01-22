import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette, spacing } = useTheme();

  return {
    wrapper: css({
      width: 656,
      height: 656,
      border: `1px solid ${palette.divider}`,
      padding: spacing(10, 6.5),
    }),

    form: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacing(2),
    }),
  };
};
