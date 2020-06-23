import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { Modal } from './Modal';

const mockData = {
  open: true,
  onClose: jest.fn(),
};

test('Modal renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Modal {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
