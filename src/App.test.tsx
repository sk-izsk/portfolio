import { render } from '@testing-library/react';
import React from 'react';
import ReactGa from 'react-ga';
import App from './App';
import { TestContextProvider } from './TestContextProvider';

test('App renders correctly', () => {
  ReactGa.initialize('test', { testMode: true });
  const { asFragment } = render(
    <TestContextProvider>
      <App />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
