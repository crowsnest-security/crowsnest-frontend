import { MUIWrapper } from '@/providers/muiProvider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router';

import App from './App';
import { i18n } from './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <MUIWrapper>
          <CssBaseline />
          <App />
        </MUIWrapper>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
);
