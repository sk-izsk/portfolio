import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Experience } from './Experience';

test('Experience renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Experience />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
