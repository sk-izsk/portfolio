import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Contact } from './Contact';

test('Contact renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Contact />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
