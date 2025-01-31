import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();

  return {
    root: css({
      border: 0,
      overflowY: 'scroll',

      '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
      },

      '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
      },

      '&::-webkit-scrollbar-thumb': {
        background: palette.action.disabledBackground,
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: palette.action.disabled,
      },
    }),
  };
};
