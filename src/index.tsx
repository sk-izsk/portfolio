import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { theme } from './theme';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
