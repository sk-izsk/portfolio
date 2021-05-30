import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { FormContainer, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';

interface ContactProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(1.5),
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  mapContainer: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
    marginLeft: theme.spacing(3),
    paddingRight: theme.spacing(6),
  },
  mapContainerMobile: {
    width: '90%',
    marginLeft: theme.spacing(0),
    alignSelf: 'center',
    paddingRight: theme.spacing(0),
  },
  contactUsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  contactUsContainerMobile: {
    flexDirection: 'column',
  },
  mainContainer: {
    marginTop: theme.spacing(1.5),
  },
}));

const Contact: React.FC<ContactProps> = () => {
  const classes: Record<
    | 'header'
    | 'contactUsContainer'
    | 'contactUsContainerMobile'
    | 'formContainer'
    | 'mapContainer'
    | 'mapContainerMobile'
    | 'mainContainer',
    string
  > = useStyles();

  const isMobile: boolean = useMediaQuery({ maxWidth: 1118 });

  return (
    <Element className={classes.mainContainer} name='Contact'>
      <div className={classes.header}>
        <VanishAnimation words={['Contact']} />
      </div>
      <div className={clsx([classes.contactUsContainer, isMobile && classes.contactUsContainerMobile])}>
        <div className={classes.formContainer}>
          <FormContainer />
        </div>
      </div>
    </Element>
  );
};

export { Contact };
