import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Education } from './Education';

test('Education renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Education />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
