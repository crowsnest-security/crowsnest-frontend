import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();
  return {
    appFail: css({
      fill: palette.error.light,
    }),
    appSuccess: css({
      fill: palette.success.light,
    }),
  };
};
