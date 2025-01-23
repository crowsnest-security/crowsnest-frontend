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
// TODO: will be updated with new "Dark" values
export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    common: {
      white: 'rgba(255, 255, 255, 1)', //#FFFFFF
      black: 'rgba(0, 0, 0, 0.87)', //#000000DE
    },
    primary: {
      main: 'rgba(70, 142, 204, 1)', // #468ECC
      light: 'rgba(122, 192, 253, 1)', //#7AC0FD
      dark: 'rgba(41, 38, 99, 1)', // #292663
      contrastText: 'rgba(255, 255, 255, 1)', //#FFFFFF
    },
    secondary: {
      main: 'rgba(40, 185, 160, 1)', //#28B9A0
      light: 'rgba(46, 201, 174, 1)', //#2EC9AE
      dark: 'rgba(21, 158, 135, 1)', //#159E87
      contrastText: 'rgba(255, 255, 255, 1)', //#FFFFFF
    },
    error: {
      main: 'rgba(211, 47, 47, 1)', //#D32F2F
      light: 'rgba(239, 83, 80, 1)', //#EF5350
      dark: 'rgba(198, 40, 40, 1)', //#C62828
      contrastText: 'rgba(255, 255, 255, 1)', //#FFFFFF
    },
    warning: {
      main: 'rgba(239, 108, 0, 1)', //#EF6C00
      light: 'rgba(255, 152, 0, 1)', //#FF9800
      dark: 'rgba(230, 81, 0, 1)', // #E65100
      contrastText: 'rgba(255, 255, 255, 1)', //#FFFFFF
    },
    info: {
      main: 'rgba(25, 118, 210, 1)', //#1976D2
      light: 'rgba(3, 169, 244, 1)', //#03A9F4
      dark: 'rgba(13, 60, 97, 1)', //#0D3C61
      contrastText: 'rgba(255, 255, 255, 1)', //#FFFFFF
    },
    success: {
      main: 'rgba(46, 125, 50, 1)', //#2E7D32
      light: 'rgba(76, 175, 80, 1)', //#4CAF50
      dark: 'rgba(27, 94, 32, 1)', // #1B5E20
      contrastText: 'rgba(255, 255, 255, 1)', //#FFFFFF
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)', //#000000DE
      secondary: 'rgba(0, 0, 0, 0.6)', //#00000099
      disabled: 'rgba(0, 0, 0, 0.38)', //#00000061
    },
    action: {
      active: 'rgba(0, 0, 0, 0.56)', // #0000008F
      hover: 'rgba(0, 0, 0, 0.04)', //#0000000A
      selected: 'rgba(0, 0, 0, 0.08)', // #00000014
      disabledBackground: ' rgba(0, 0, 0, 0.12)', //#0000001F
      focus: 'rgba(0, 0, 0, 0.12)', //#0000001F
      disabled: 'rgba(0, 0, 0, 0.38)', //#00000061
    },
    // other colors
    divider: 'rgba(0, 0, 0, 0.12)', //#0000001F
    focusVisible: 'rgba(25, 118, 210, 0.3)', //#1976D24D
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Roboto',
    h1: {
      fontSize: '6rem', // 96px
      fontWeight: 300,
      lineHeight: '112px',
    },
    h2: {
      fontSize: '3.75rem', // 60px
      fontWeight: 300,
      lineHeight: '72px',
    },
    h3: {
      fontSize: '3rem', // 48px
      fontWeight: 400,
      lineHeight: '56px',
    },
    h4: {
      fontSize: '2.125rem', // 34px
      fontWeight: 400,
      lineHeight: '42px',
    },
    h5: {
      fontSize: '1.5rem', // 24px
      fontWeight: 400,
      lineHeight: '32px',
    },
    h6: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
      lineHeight: '32px',
    },
    subtitle1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: '28px',
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: '22px',
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: '20px',
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: '20px',
    },
    overline: {
      fontSize: '0.75rem', // 12px
      fontWeight: 700,
      lineHeight: '32px',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.dark,
        }),
      },
    },
  },
});
