import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { SkillInformationTypes } from '../../utils/informations';
import { SkillInformationsContainer } from './SkillInformationsContainer';

const mockData = {
  skillsInformations: [{ name: 'mock name', backgroundColor: 'blue', progress: 50, technology: 'BACKEND' }],
};
test('SkillInformationsContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <SkillInformationsContainer skillsInformations={mockData.skillsInformations as SkillInformationTypes[]} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
