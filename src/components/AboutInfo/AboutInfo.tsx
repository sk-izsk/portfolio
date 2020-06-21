import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Button, ProgressBarContainer } from '..';
import { CustomTheme } from '../../theme';
import { SkillInformationTypes, skillsInformation } from '../../utils/informations';

interface AboutInfoProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    backgroundColor: theme.colors.darkerPrimaryColor,
    color: theme.colors.white,
    display: 'flex',
    padding: theme.spacing(2.5),
    borderRadius: 20,
    height: '100%',
    border: `1px solid ${theme.colors.secondaryColor}`,
  },
  descriptionContainer: {
    maxWidth: theme.spacing(27.25),
    width: '100%',
    borderRightColor: theme.colors.thirdColor,
    borderRightWidth: 2,
    borderRightStyle: 'solid',
    paddingRight: theme.spacing(2),
  },
  description: {
    fontSize: 22,
  },
  button: {
    position: 'relative',
    top: theme.spacing(6.25),
  },
  skillsInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(1),
    width: '100%',
  },
  triangleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  triangle: {
    position: 'relative',
    right: theme.spacing(3.75),
    width: 0,
    height: 0,
    borderTop: `10px solid transparent`,
    borderBottom: `10px solid transparent`,
    borderRight: `10px solid ${theme.colors.secondaryColor}`,
  },
  triangleMobile: {
    left: theme.spacing(21.5),
    right: theme.spacing(0),
    top: theme.spacing(-4.375),
    transform: 'rotate(90deg)',
  },
  triangleContainerMobile: {
    alignSelf: 'end',
  },
}));

const AboutInfo: React.FC<AboutInfoProps> = () => {
  const classes: Record<
    | 'mainContainer'
    | 'descriptionContainer'
    | 'triangle'
    | 'description'
    | 'button'
    | 'skillsInfoContainer'
    | 'triangleMobile'
    | 'triangleContainer'
    | 'triangleContainerMobile',
    string
  > = useStyles();

  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  return (
    <div className={classes.mainContainer}>
      <div className={clsx([classes.triangleContainer, isMobile && classes.triangleContainerMobile])}>
        <div className={clsx([classes.triangle, isMobile && classes.triangleMobile])} />
      </div>

      <div className={classes.descriptionContainer}>
        <div className={classes.description}>
          I am Shaikh Zeeshan Murshed, Front-End developer from Montreal, Canada. I have experience in making Website.
          Also I am a hobbits photographer.
        </div>
        <div className={classes.button}>
          <Button
            onClick={() =>
              window.open(
                'https://docs.google.com/document/d/16Ko4S8n50fedwi4re2K-djKxe2zGrRRWKuXdtko7jow/edit?usp=sharing',
                '_blank',
              )
            }
          >
            Download My CV
          </Button>
        </div>
      </div>
      <div className={classes.skillsInfoContainer}>
        {skillsInformation.map((skillInformation: SkillInformationTypes) => {
          return (
            <ProgressBarContainer
              name={skillInformation.name}
              progress={skillInformation.progress}
              backgroundColor={skillInformation.backgroundColor}
              key={skillInformation.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export { AboutInfo };
