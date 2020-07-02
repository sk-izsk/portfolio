import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { NavBar } from './NavBar';

test('NavBar renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <NavBar />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
