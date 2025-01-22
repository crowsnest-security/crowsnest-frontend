import { Global, css } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';

import { theme } from '../src/theme';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Roboto';
      }
    `}
  />
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [
  withMuiTheme,
  withThemeFromJSXProvider({ GlobalStyles }),
];

export default preview;
