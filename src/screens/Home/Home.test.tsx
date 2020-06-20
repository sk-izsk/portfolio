import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Home } from './Home';

test('Home renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Home />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
