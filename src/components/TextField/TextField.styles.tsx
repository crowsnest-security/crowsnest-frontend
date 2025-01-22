import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette } = useTheme();

  return {
    searchInput: css({
      backgroundColor: palette.focusVisible,
      width: 60,

      '& .MuiTextField-root': {
        backgroundColor: palette.focusVisible,
        border: '1px solid red',
      },

      '& .MuiFormControl': {
        height: 24,
      },
      '& .MuiInputBase': {
        height: 24,
      },
    }),
  };
};
