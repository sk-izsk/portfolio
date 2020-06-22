import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { PhotographsContainer } from './PhotographsContainer';

test('PhotographsContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <PhotographsContainer />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
