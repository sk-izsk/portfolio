import React from 'react';
import { IoMdSchool } from 'react-icons/io';
import { InformationBarContainer } from '../../components';
import { theme } from '../../theme';
import { educationInformations } from '../../utils/informations';

interface EducationProps {}

const EducationIcon: () => JSX.Element = () => <IoMdSchool size={30} color={theme.colors.thirdColor} />;

const Education: React.FC<EducationProps> = () => {
  return <InformationBarContainer icon={<EducationIcon />} title='Education' informations={educationInformations} />;
};

export { Education };
