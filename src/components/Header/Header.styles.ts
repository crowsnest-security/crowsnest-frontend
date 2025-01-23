import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette, spacing } = useTheme();

  return {
    root: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 80,

      backgroundColor: palette.primary.dark,

      padding: spacing(0, 3),
    }),

    box: css({
      display: 'flex',
      flexDirection: 'row',

      justifyContent: 'center',

      alignItems: 'center',
    }),

    appName: css({
      color: palette.common.white,
    }),

    pageName: css({
      color: palette.primary.main,
    }),

    userInfo: css({
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      gap: spacing(1),
      paddingLeft: spacing(6),
    }),

    icon: css({
      margin: spacing(0, 1),
    }),

    usernameText: css({ color: palette.common.white }),
  };
};
