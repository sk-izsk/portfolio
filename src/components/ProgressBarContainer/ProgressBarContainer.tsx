import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';

interface ProgressBarContainerProps {
  name?: string;
  progress?: number;
  backgroundColor?: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    width: '100%',
    paddingLeft: theme.spacing(2.5),
  },
  description: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressBarContainer: {
    backgroundColor: theme.colors.white,
    height: 8,
    borderRadius: 20,
  },
  progressBar: {
    backgroundColor: ({ backgroundColor }: ProgressBarContainerProps): string =>
      backgroundColor ? backgroundColor : theme.colors.white,
    height: '100%',
    borderRadius: 20,
    width: ({ progress }: ProgressBarContainerProps): string => (progress ? `${progress}%` : '100%'),
  },
  progressBarParent: {
    width: '100%',
  },
}));
const UnMemoizedProgressBarContainer: React.FC<ProgressBarContainerProps> = (props) => {
  const classes: Record<
    'mainContainer' | 'description' | 'progressBarContainer' | 'progressBar' | 'progressBarParent',
    string
  > = useStyles(props);

  const { name, progress } = props;

  return (
    <div className={classes.progressBarParent}>
      <div className={classes.description}>
        <h3>{name}</h3>
        <h3>{progress}%</h3>
      </div>
      <div className={classes.progressBarContainer}>
        <div className={classes.progressBar} />
      </div>
    </div>
  );
};

const ProgressBarContainer: React.NamedExoticComponent<ProgressBarContainerProps> = React.memo(
  UnMemoizedProgressBarContainer,
);

export { ProgressBarContainer };
