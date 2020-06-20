import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { AnimatedText } from './AnimatedText';

test('AnimatedText renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <AnimatedText />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
