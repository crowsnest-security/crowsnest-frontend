import { Global, css } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';

import { i18n } from '../src/i18n';
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

export const withTranslation = (Story) => {
  return <I18nextProvider i18n={i18n}>{<Story />}</I18nextProvider>;
};

export const withRouter = (Story) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

export const decorators = [
  withMuiTheme,
  withThemeFromJSXProvider({ GlobalStyles }),
  withTranslation,
  withRouter,
];

export default preview;
