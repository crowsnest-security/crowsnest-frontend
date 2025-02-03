import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();
  return {
    root: css({}),

    activeChip: css({
      backgroundColor: palette.secondary.main,
    }),
  };
};
