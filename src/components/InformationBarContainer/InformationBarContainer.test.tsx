import { render } from '@testing-library/react';
import React from 'react';
import { Fa500Px } from 'react-icons/fa';
import { TestContextProvider } from '../../TestContextProvider';
import { InformationBarContainer } from './InformationBarContainer';

const mockData = {
  title: 'mock title',
  icon: <Fa500Px />,
  informations: [
    { startYear: '2016', endYear: '2019', nameOfOrganization: 'mock organization', details: 'mock details' },
  ],
};

test('InformationBarContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <InformationBarContainer {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
