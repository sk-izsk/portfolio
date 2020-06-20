import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Avatar } from './Avatar';

test('Avatar renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Avatar url='mock url' />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
