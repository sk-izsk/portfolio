import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';

interface AppBarItemProps {
  icon: JSX.Element;
  fontSize?: number | null;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: theme.fontProperties.textFontSize,
    fontWeight: 'bold',
    cursor: 'pointer',
    justifyContent: 'space-between',
    color: theme.colors.white,
    '&:hover': {
      color: theme.colors.secondaryColor,
      borderBottom: `2px solid ${theme.colors.secondaryColor}`,
    },
  },
  title: {
    marginLeft: theme.spacing(1.25),
    fontSize: ({ fontSize }: AppBarItemProps): number | null => (fontSize ? fontSize : null),
  },
}));

const AppBarItem: React.FC<AppBarItemProps> = (props) => {
  const classes: Record<'mainContainer' | 'title', string> = useStyles(props);
  return (
    <div className={classes.mainContainer}>
      {props.icon}
      <div className={classes.title}>{props.children}</div>
    </div>
  );
};

export { AppBarItem };
