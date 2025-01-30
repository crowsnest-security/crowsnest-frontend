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
      alignItems: 'center',
      justifyContent: 'center',
    }),

    contentRoot: css({
      padding: spacing(2, 3),
      // MUI bug https://github.com/mui/material-ui/issues/27851
      paddingTop: `${spacing(2)} !important`,
    }),
  };
};
