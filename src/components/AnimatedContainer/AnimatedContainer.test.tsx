import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { ThreeDAnimation, VanishAnimation } from './AnimatedContainer';

describe('AnimatedContainer component render correctly', () => {
  test('ThreeDAnimation renders correctly', () => {
    const { asFragment } = render(
      <TestContextProvider>
        <ThreeDAnimation> mock children</ThreeDAnimation>
      </TestContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('VanishAnimation renders correctly', () => {
    const { asFragment } = render(
      <TestContextProvider>
        <VanishAnimation words={['mock', 'words']} />
      </TestContextProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
