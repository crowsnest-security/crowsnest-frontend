import { css } from '@emotion/react';

export const useStyles = () => {
  return {
    root: css({
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    }),
  };
};
