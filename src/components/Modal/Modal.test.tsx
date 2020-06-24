import { render } from '@testing-library/react';
import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { TestContextProvider } from '../../TestContextProvider';
import { Modal } from './Modal';

const mockData = {
  open: true,
  onClose: jest.fn(),
  icon: <FaRegThumbsUp />,
};

test('Modal renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <Modal {...mockData}>Mock description</Modal>
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
