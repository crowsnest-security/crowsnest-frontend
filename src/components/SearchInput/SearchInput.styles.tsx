import { css } from '@emotion/react';
import { alpha, useTheme } from '@mui/material';

export const useStyles = () => {
  const { palette, shape, breakpoints, spacing, transitions, typography } =
    useTheme();

  return {
    search: css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      padding: '0 2px 0 4px',
      borderRadius: shape.borderRadius,
      backgroundColor: alpha(palette.text.primary, 0.3),

      marginLeft: 0,
      width: '100%',
      maxWidth: spacing(15),
      [breakpoints.up('sm')]: {
        width: 'auto',
      },

      height: 20,
    }),

    searchIcon: css({
      padding: spacing(0, 0.5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),

    inputBase: css({
      color: 'inherit',
      width: '100%',
      height: 20,
      padding: 0,
      '& .MuiInputBase-input': {
        height: 20,
        padding: 0,
        paddingLeft: spacing(3),
        transition: transitions.create('width'),

        fontSize: typography.caption.fontSize,
        fontWeight: typography.caption.fontWeight,

        // [breakpoints.up('sm')]: {
        //   //   width: spacing(6),
        //   '&:focus': {
        //     // width: spacing(11),
        //   },
        // },

        '&::placeholder': {
          fontSize: typography.caption.fontSize,
          fontWeight: typography.caption.fontWeight,

          color: alpha(palette.common.white, 0.6),
        },
      },
    }),
  };
};
