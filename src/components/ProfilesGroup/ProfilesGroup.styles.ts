import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing(2),
    }),
  };
};
