import { HEADER_HEIGHT } from '@/constants/layout';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const { spacing, palette } = useTheme();

  return {
    root: css({
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      maxHeight: '100vh',
    }),
    workspace: css({
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    }),

    content: css({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: spacing(4, 0),
      gap: spacing(4),

      maxHeight: '100vh',
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

    controls: css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',

      padding: spacing(0, 3),
    }),

    leftControls: css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: spacing(4),
    }),

    description: css({
      color: palette.text.secondary,

      padding: spacing(0, 3),
    }),

    tabs: css({
      margin: spacing(0, 3),
    }),
  };
};
