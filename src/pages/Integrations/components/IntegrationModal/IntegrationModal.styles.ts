import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing } = useTheme();

  return {
    modalsContent: css({
      display: 'flex',
      flexDirection: 'column',
      gap: spacing(4),

      '& .MuiPaper-root': {
        width: '100vw',
        maxWidth: '100vw',

        height: 820,
      },
    }),
  };
};
