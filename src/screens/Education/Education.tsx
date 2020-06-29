import React, { useContext } from 'react';
import { IoMdSchool } from 'react-icons/io';
import { InformationsContext } from '../../App';
import { InformationBarContainer } from '../../components';
import { theme } from '../../theme';
import { Informations } from '../../utils/informations';

interface EducationProps {}

const EducationIcon: () => JSX.Element = () => <IoMdSchool size={30} color={theme.colors.thirdColor} />;

const Education: React.FC<EducationProps> = () => {
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);
  return (
    <>
      {context?.educationInformations && (
        <InformationBarContainer
          icon={<EducationIcon />}
          marginTop={6}
          title='Education'
          informations={context.educationInformations}
        />
      )}
    </>
  );
};

export { Education };
