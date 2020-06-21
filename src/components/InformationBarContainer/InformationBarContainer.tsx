import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { InformationBar, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';
import { Information } from '../../utils/informations';

interface InformationBarContainerProps {
  title?: string;
  informations?: Information[];
  icon?: JSX.Element;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    marginTop: theme.spacing(6),
  },
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  informationBarContainerParent: {
    display: 'flex',
    justifyContent: 'center',
  },
  informationBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colors.darkerPrimaryColor,
    color: theme.colors.white,
    border: `1px solid ${theme.colors.secondaryColor}`,
    borderRadius: 20,
    width: '92%',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    paddingTop: theme.spacing(2.5),
  },
  informationBarContainerMobile: {
    width: '82%',
  },
}));

const InformationBarContainer: React.FC<InformationBarContainerProps> = ({ title, informations, icon }) => {
  const classes: Record<
    | 'header'
    | 'mainContainer'
    | 'informationBarContainerParent'
    | 'informationBarContainerMobile'
    | 'informationBarContainer',
    string
  > = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  return (
    <Element className={classes.mainContainer} name={`${title}`}>
      <div className={classes.header}>
        <VanishAnimation words={[`${title}`]} />
      </div>
      <div className={classes.informationBarContainerParent}>
        <div className={clsx([classes.informationBarContainer, isMobile && classes.informationBarContainerMobile])}>
          {informations?.map((educationInformation: Information) => {
            return (
              <InformationBar icon={icon} {...educationInformation} key={educationInformation.nameOfOrganization} />
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export { InformationBarContainer };
