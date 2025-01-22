import { css } from '@emotion/react';

export const useStyles = () => {
  return {
    wrapper: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }),
  };
};
