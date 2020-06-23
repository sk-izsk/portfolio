import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { FormContainer } from './FormContainer';

test('FormContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <FormContainer />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
