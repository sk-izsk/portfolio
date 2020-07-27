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
  },
}));

const UnMemoizedInformationBar: React.FC<InformationBarProps> = ({
  icon,
  startYear,
  endYear,
  details,
  nameOfOrganization,
  link,
}) => {
  const classes: Record<
    'mainContainer' | 'iconContainer' | 'durationContainer' | 'descriptionContainer' | 'openProject',
    string
  > = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.iconContainer}>{icon}</div>
      <div className={classes.descriptionContainer}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className={classes.durationContainer}>
            {startYear}-{endYear}
          </div>
          {link && (
            <Button onClick={() => window.open(link, '_blank')} className={classes.openProject}>
              Open
            </Button>
          )}
        </div>
        <h2>{nameOfOrganization}</h2>
        <div>{details}</div>
      </div>
    </div>
  );
};

const InformationBar = React.memo(UnMemoizedInformationBar);

export { InformationBar };
