import React, { useContext } from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import { InformationsContext } from '../../App';
import { InformationBarContainer } from '../../components';
import { theme } from '../../theme';
import { Informations } from '../../utils/informations';

interface ExperienceProps {}

const ExperienceIcon: () => JSX.Element = () => <FaNetworkWired size={30} color={theme.colors.thirdColor} />;

const Experience: React.FC<ExperienceProps> = () => {
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);
  return (
    <InformationBarContainer
      icon={<ExperienceIcon />}
      title='Experience'
      informations={context?.experienceInformations}
    />
  );
};

export { Experience };
