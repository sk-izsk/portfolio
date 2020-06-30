import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { InformationBar, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';
import { MemoizedComponent } from '../../utils/custom-hook';
import { Information } from '../../utils/informations';

interface InformationBarContainerProps {
  title?: string;
  informations?: Information[];
  icon?: JSX.Element;
  marginTop?: number;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    marginTop: ({ marginTop }: InformationBarContainerProps): number | undefined =>
      marginTop ? theme.spacing(marginTop) : undefined,
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
    borderRadius: 10,
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

const InformationBarContainer: React.FC<InformationBarContainerProps> = (props) => {
  const classes: Record<
    | 'header'
    | 'mainContainer'
    | 'informationBarContainerParent'
    | 'informationBarContainerMobile'
    | 'informationBarContainer',
    string
  > = useStyles(props);
  const { title, informations, icon } = props;
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  return (
    <Element className={classes.mainContainer} name={`${title}`}>
      {MemoizedComponent(
        <div className={classes.header}>
          <VanishAnimation words={[`${title}`]} />
        </div>,
      )}
      {MemoizedComponent(
        <div className={classes.informationBarContainerParent}>
          <div className={clsx([classes.informationBarContainer, isMobile && classes.informationBarContainerMobile])}>
            {informations?.map((educationInformation: Information) => {
              return (
                <InformationBar icon={icon} {...educationInformation} key={educationInformation.nameOfOrganization} />
              );
            })}
          </div>
        </div>,
        isMobile,
      )}
    </Element>
  );
};

export { InformationBarContainer };
