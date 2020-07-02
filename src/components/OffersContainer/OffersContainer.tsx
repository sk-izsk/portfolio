import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';

export interface OffersContainerProps {
  className?: string;
  title?: string;
  offerings: string[];
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // textAlign: 'center',
    border: `1px solid ${theme.colors.secondaryColor}`,
    borderRadius: 10,
    // justifyContent: 'center',
    width: '100%',
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },

  header: {
    color: theme.colors.white,
    borderBottomColor: theme.colors.thirdColor,
    borderBottomWidth: 3,
    borderBottomStyle: 'dashed',
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    paddingTop: theme.spacing(2),
  },

  ulContainer: {
    listStyleType: 'circle',
    color: theme.colors.white,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2.5),
  },
}));

const OffersContainer: React.FC<OffersContainerProps> = ({ className, title, offerings }) => {
  const classes = useStyles();

  return (
    <div className={clsx([classes.mainContainer, className])}>
      <h3 className={classes.header}>{title}</h3>
      <ul className={classes.ulContainer}>
        {offerings.map((offering: string) => {
          return <li key={offering}>{offering}</li>;
        })}
      </ul>
    </div>
  );
};

export { OffersContainer };
