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
      flexGrow: 1,
      height: '100%',
      maxWidth: 560,
      maxHeight: 800,
      backgroundColor: palette.primary.dark,
    }),

    logo: css({
      marginBottom: 80,
    }),

    whiteText: css({ color: palette.common.white }),
    greenText: css({ color: palette.secondary.main }),
  };
};
