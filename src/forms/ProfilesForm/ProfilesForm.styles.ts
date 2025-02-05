import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing, palette } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexGrow: 1,
      height: '100%',
      width: '100%',
    }),

    form: css({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      gap: spacing(2),
      width: '100%',
    }),

    item: css({
      width: '33%',
    }),

    row: css({
      display: 'flex',
      gap: spacing(5),
      justifyContent: 'space-between',
    }),

    flexRowItem: css({
      flex: 1,
    }),

    submitButton: css({
      alignSelf: 'flex-end',
      maxWidth: 170,
      width: '100%',
    }),

    buttons: css({
      display: 'flex',
      alignSelf: 'flex-end',
      gap: spacing(3),
    }),

    lastItemWrapper: css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      flexGrow: 1,
    }),

    errorButton: css({
      backgroundColor: palette.error.main,
    }),

    domainsWrapper: css({
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%',
    }),
  };
};
