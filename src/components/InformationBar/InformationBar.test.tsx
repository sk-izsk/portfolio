import { render } from '@testing-library/react';
import React from 'react';
import { Fa500Px } from 'react-icons/fa';
import { TestContextProvider } from '../../TestContextProvider';
import { InformationBar } from './InformationBar';

const mockData = {
  icon: <Fa500Px />,
  startYear: '2016',
  endYear: '2019',
  nameOfOrganization: 'mock organization',
  details: 'mock details',
};

test('InformationBar renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <InformationBar {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
