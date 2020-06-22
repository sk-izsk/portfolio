import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Photography } from './Photography';

test('Photography renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Photography />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
