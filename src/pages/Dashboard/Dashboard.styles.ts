import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();
  return {
    wrapper: css({
      // grid because react-carousel don't work with flex
      display: 'grid',
      width: '100%',
      position: 'relative',

      paddingBottom: spacing(3),
    }),
  };
};
