import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Button } from './Button';

test('Button renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Button>Mock Button</Button>
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
