import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { SocialIcons } from './SocialIcons';

test('SocialIcons renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <SocialIcons />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
