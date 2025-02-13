import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette, spacing } = useTheme();

  return {
    wrapper: css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }),

    filtersLabel: css({
      color: palette.text.secondary,
      marginRight: spacing(2),
      textWrap: 'nowrap',
    }),

    filterSelect: css({
      minWidth: 250,
    }),
  };
};
