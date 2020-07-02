import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { MyOffers } from './MyOffers';

test('MyOffers renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <MyOffers />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
