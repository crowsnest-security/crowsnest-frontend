import { createTheme } from '@mui/material';

/* 
    100 – Thin.
    200 – Extra Light (Ultra Light)
    300 – Light.
    400 – Normal/Regular.
    500 – Medium.
    600 – Semi Bold (Demi Bold)
    700 – Bold.
    800 – Extra Bold (Ultra Bold)
 */
export const theme = createTheme({
  // TODO: integrate palette colors from design
  palette: {
    primary: {
      main: 'rgb(1, 135, 208)', // #0187d0
      light: 'rgb(69, 142, 204)', // #458ecc
      dark: 'rgb(41, 37, 98)', // #292562
      contrastText: 'rgb(240, 241, 249)', //#f0f1f9
    },

    secondary: {
      main: 'rgb(40, 185, 160)', // #28b9a0
      light: 'rgb(46, 200, 174)', //#2ec8ae
      dark: 'rgb(21, 157, 134)', //#159d86
      contrastText: 'rgb(237, 237, 237)', // #ededed
    },

    error: {
      main: 'rgb(211, 46, 46)', //#d32e2e
      light: 'rgb(239, 83, 79)', //#ef534f
      dark: 'rgb(162, 26, 26)', //#a21a1a
      // background: 'rgb(253, 236, 235)', // #fdeceb
      // content: 'rgb(97, 27, 22)', //#611b16
    },

    warning: {
      main: 'rgb(236, 107, 1)', //#ec6b01
      light: 'rgb(255, 152, 0)', //#ff9800
      dark: 'rgb(230, 80, 0)', // #e65000
      // background: 'rgb(255, 245, 230)', //#fff5e6
      // content: 'rgb(102, 60, 0)', //#663c00
    },

    info: {
      main: 'rgb(13, 60, 97)', //#0d3c61
      light: 'rgb(3, 168, 244)', //#03a8f4
      dark: 'rgb(24, 117, 209)', //#1875d1
      // background: 'rgb(232, 245, 254)', //#e8f5fe
      // content: 'rgb(29, 69, 32)', //#1d4520
    },

    success: {
      main: 'rgb(46, 125, 50)', //#2e7d32
      light: 'rgb(75, 175, 79)', //#4baf4f
      dark: 'rgb(27, 93, 32)', // #1b5d20
      // background: 'rgb(236, 246, 237)', //#ecf6ed
      // content: 'rgb(29, 69, 32)', //#1d4520
    },

    text: {
      primary: 'rgb(33, 33, 33)', //#212121
      secondary: 'rgb(102, 102, 102)', //#666666
      disabled: 'rgb(163, 163, 163)', //#a3a3a3
    },

    action: {
      disabled: 'rgb(190, 190, 190)', //#bebebe
      hover: 'rgb(246, 246, 246)', //#f6f6f6
      selected: 'rgb(236, 236, 236)',
    },

    // other colors
    divider: 'rgb(224, 224, 224)', //#e0e0e0
    // backdrop: 'rgb(127, 127, 127)', //#7f7f7f
    // snackbar: 'rgb(50, 50, 50)', //#323232
    // outlineBorder: 'rgb(255, 255, 255)', //#ffffff
    // ratingFull:'rgb(255, 180, 0)', //#ffb400
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Roboto',

    h1: {
      fontSize: '6rem', // 96px
      fontWeight: 300,
    },

    h2: {
      fontSize: '3.75rem', // 60px
      fontWeight: 300,
    },

    h3: {
      fontSize: '3rem', // 48px
      fontWeight: 400,
    },

    h4: {
      fontSize: '2.125rem', // 34px
      fontWeight: 400,
    },

    h5: {
      fontSize: '1.5rem', // 24px
      fontWeight: 400,
    },

    h6: {
      fontSize: '1.25rem', // 24px
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
    },

    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
    },

    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
    },

    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
    },

    button: {
      //TODO: define different buttons: small, standart, large
      //   sizes,
    },

    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
    },

    overline: {
      fontSize: '0.75rem', // 12px
      fontWeight: 700,
    },
  },
});
