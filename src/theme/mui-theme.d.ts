import {
  TypeAction as MuiTypeAction,
  PaletteColorOptions,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    focusVisible: string;
  }
  interface PaletteOptions {
    focusVisible: string;
  }
}
