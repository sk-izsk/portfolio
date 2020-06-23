import React from 'react';
import { createUseStyles } from 'react-jss';
import 'react-responsive-modal/styles.css';
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
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Contact: React.FC<ContactProps> = () => {
  const classes: Record<'header' | 'formContainer', string> = useStyles();

  return (
    <Element name='Contact'>
      <div className={classes.header}>
        <VanishAnimation words={['Contact']} />
      </div>
      <div className={classes.formContainer}>
        <FormContainer />
      </div>
    </Element>
  );
};

export { Contact };
