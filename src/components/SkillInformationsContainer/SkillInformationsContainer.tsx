import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { ProgressBarContainer } from '..';
import { CustomTheme } from '../../theme';
import { SkillInformationTypes } from '../../utils/informations';

export interface SkillInformationsContainerProps {
  skillsInformations?: SkillInformationTypes[];
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  mainContainerMobile: {
    flexDirection: 'column',
  },
  textContainer: {
    borderBottomColor: theme.colors.thirdColor,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  infoContainer: {
    flex: 1,
    padding: theme.spacing(1),
  },
}));

type Technology = 'BACKEND' | 'FRONTEND' | 'MISC';

const getTechnology = (informations: SkillInformationTypes[], technology: Technology) =>
  informations.filter((informations: SkillInformationTypes) => informations.technology === technology);

const technologies: Technology[] = ['FRONTEND', 'BACKEND', 'MISC'];

const SkillInformationsContainer: React.FC<SkillInformationsContainerProps> = ({ skillsInformations }) => {
  const classes: Record<
    'mainContainer' | 'textContainer' | 'infoContainer' | 'mainContainerMobile',
    string
  > = useStyles();

  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  return (
    <>
      {skillsInformations !== undefined && (
        <div className={clsx([classes.mainContainer, isMobile && classes.mainContainerMobile])}>
          {technologies.map((technology: Technology) => {
            return (
              <div key={technology} className={classes.infoContainer}>
                <h4 className={classes.textContainer}>{technology}</h4>
                {getTechnology(skillsInformations, technology).map((skillInformation: SkillInformationTypes) => {
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
            );
          })}
        </div>
      )}
    </>
  );
};

export { SkillInformationsContainer };
