import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { About } from './About';

test('About renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <About />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
