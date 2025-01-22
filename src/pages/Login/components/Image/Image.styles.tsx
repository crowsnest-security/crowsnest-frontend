import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: 560,
      height: 800,
      backgroundColor: palette.primary.dark,
    }),

    logo: css({
      marginBottom: 80,
    }),

    whiteText: css({ color: palette.common.white }),
    greenText: css({ color: palette.secondary.main }),
  };
};
