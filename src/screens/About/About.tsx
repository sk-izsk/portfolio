import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { AboutInfo, Avatar, ThreeDAnimation, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';
import { MemoizedComponent } from '../../utils/custom-hook';

interface AboutProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  avatar: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutInfo: {
    width: '50%',
    paddingRight: theme.spacing(3.75),
  },
  aboutInfoMobile: {
    width: '90%',
    paddingRight: theme.spacing(0),
    marginTop: theme.spacing(2),
  },
  aboutContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  aboutContainerMobile: {
    flexWrap: 'wrap',
  },
}));

const About: React.FC<AboutProps> = () => {
  const classes: Record<
    'header' | 'avatar' | 'aboutInfo' | 'aboutContainer' | 'aboutContainerMobile' | 'aboutInfoMobile',
    string
  > = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  return (
    <Element name='About'>
      <div className={classes.header}>{MemoizedComponent(<VanishAnimation words={['About', 'Me']} />)}</div>
      <div className={clsx([classes.aboutContainer, isMobile && classes.aboutContainerMobile])}>
        <div className={classes.avatar}>
          {MemoizedComponent(
            <ThreeDAnimation>
              <Avatar url='https://lh3.googleusercontent.com/pw/ACtC-3fkT2wC_oB8Y4Fo48qOW6acvyLmAhr7NoFlLzb1Vnh-5qY_FDc_1ktlCP42JrwK5_TpT6PyAJZ18v63iAk-hIGQ6xnQEDw1agvzeGw_U8j-RN6ipnl6Z-1bHyfdL8jbLAXmXPJRNaGN1Qi6oq0k-6ntEQ=w800-h741-no' />
            </ThreeDAnimation>,
          )}
        </div>
        <div className={clsx([classes.aboutInfo, isMobile && classes.aboutInfoMobile])}>
          {MemoizedComponent(<AboutInfo />)}
        </div>
      </div>
    </Element>
  );
};

export { About };
