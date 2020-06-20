import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { AppBar } from './AppBar';

test('AppBar renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <AppBar />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
