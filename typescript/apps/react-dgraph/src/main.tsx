import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';

import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </StrictMode>
);
