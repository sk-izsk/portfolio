import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { MapContainer } from './MapContainer';

test('MapContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <MapContainer />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
