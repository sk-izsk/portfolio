import React from 'react';
import { ThemeProvider } from 'react-jss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';

const queryClient = new QueryClient();

const TestContextProvider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export { TestContextProvider };
