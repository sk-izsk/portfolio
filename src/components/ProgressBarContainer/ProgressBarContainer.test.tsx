import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { ProgressBarContainer } from './ProgressBarContainer';

const mockData = {
  name: 'mock name',
  backgroundColor: 'blue',
  progress: 50,
};
test('ProgressBarContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <ProgressBarContainer {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
