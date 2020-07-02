import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { OffersContainer } from './OffersContainer';

const mockData = {
  title: 'mock title',
  offerings: ['mock description'],
};

test('OffersContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <OffersContainer {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
