import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { PhotographsContainer, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';

interface PhotographyProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(1.5),
  },
  photographyContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  photographyContainerMobile: {
    flexWrap: 'wrap',
  },
  mainContainer: {
    marginTop: theme.spacing(1.5),
  },
}));

const Photography: React.FC<PhotographyProps> = () => {
  const classes: Record<
    'header' | 'photographyContainer' | 'mainContainer' | 'photographyContainerMobile',
    string
  > = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  return (
    <Element className={classes.mainContainer} name='Photography'>
      <div className={classes.header}>
        <VanishAnimation words={['Photography']} />
      </div>
      <div className={clsx([classes.photographyContainer, isMobile && classes.photographyContainerMobile])}>
        <PhotographsContainer />
      </div>
    </Element>
  );
};

export { Photography };
