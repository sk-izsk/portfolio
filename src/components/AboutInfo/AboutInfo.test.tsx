import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { AboutInfo } from './AboutInfo';

test('AboutInfo renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <AboutInfo />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
