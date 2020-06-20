import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { TestContextProvider } from './TestContextProvider';

test('App renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <App />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
