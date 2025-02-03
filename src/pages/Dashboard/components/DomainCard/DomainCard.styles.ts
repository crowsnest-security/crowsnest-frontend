import { css } from '@emotion/react';

export const useStyles = () => {
  return {
    contentItem: css({
      display: 'flex',
      width: 250,
      height: 42,
      padding: '8px 5px 10px 0px',
      alignItems: 'center',
      gap: 9,
      flexShrink: 0,
    }),
  };
};
