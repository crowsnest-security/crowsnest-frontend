import { css } from '@emotion/react';
import { useTheme } from '@mui/material';
import { CSSProperties } from 'react';

export const useStyles = () => {
  const { palette, typography, spacing } = useTheme();

  return {
    root: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '6px 8px',
      borderRadius: spacing(1),
      ...(typography.body2 as CSSProperties),
    }),

    activeChip: css({
      backgroundColor: palette.secondary.main,
      color: palette.primary.contrastText,

      '&&:hover': {
        backgroundColor: palette.secondary.light,
      },
    }),
  };
};
