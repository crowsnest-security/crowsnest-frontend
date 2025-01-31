import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexGrow: 1,
      width: '100%',
    }),

    form: css({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      gap: spacing(2),
      width: '100%',
    }),

    submitButton: css({
      alignSelf: 'flex-end',
      maxWidth: 170,
      width: '100%',
    }),
  };
};
