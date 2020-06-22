import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Photo } from './Photo';

test('Photo renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Photo url='mock url' />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
