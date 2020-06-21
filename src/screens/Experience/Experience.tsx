import React from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import { InformationBarContainer } from '../../components';
import { theme } from '../../theme';
import { experienceInformations } from '../../utils/informations';

interface ExperienceProps {}

const ExperienceIcon: () => JSX.Element = () => <FaNetworkWired size={30} color={theme.colors.thirdColor} />;

const Experience: React.FC<ExperienceProps> = () => {
  return <InformationBarContainer icon={<ExperienceIcon />} title='Experience' informations={experienceInformations} />;
};

export { Experience };
