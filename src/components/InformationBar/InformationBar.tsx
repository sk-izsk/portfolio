import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '..';
import { CustomTheme } from '../../theme';

interface InformationBarProps {
  icon?: JSX.Element;
  startYear?: string;
  endYear?: string;
  nameOfOrganization?: string;
  details?: string;
  link?: string;
  demoLink?: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    height: '100%',
    paddingBottom: theme.spacing(2.5),
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRight: `1px solid ${theme.colors.thirdColor}`,
    paddingRight: theme.spacing(2.5),
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2.5),
    overflow: 'hidden',
  },
  durationContainer: {
    color: theme.colors.grayishBlue,
  },
  openProject: {
    maxWidth: 100,
    width: '100%',
    marginTop: theme.spacing(1),
  },
  openDemo: {
    marginLeft: theme.spacing(1),
  },
}));

const UnMemoizedInformationBar: React.FC<InformationBarProps> = ({
  icon,
  startYear,
  endYear,
  details,
  nameOfOrganization,
  link,
  demoLink,
}) => {
  const classes: Record<
    'mainContainer' | 'iconContainer' | 'durationContainer' | 'descriptionContainer' | 'openProject' | 'openDemo',
    string
  > = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.iconContainer}>{icon}</div>
      <div className={classes.descriptionContainer}>
        <div className={classes.durationContainer}>
          {startYear}-{endYear}
        </div>
        <h2>{nameOfOrganization}</h2>
        <div>{details}</div>
        <div>
          {link && (
            <Button onClick={() => window.open(link, '_blank')} className={classes.openProject}>
              Open
            </Button>
          )}
          {demoLink && (
            <Button
              onClick={() => window.open(demoLink, '_blank')}
              className={clsx([classes.openProject, classes.openDemo])}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const InformationBar = React.memo(UnMemoizedInformationBar);

export { InformationBar };
