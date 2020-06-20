import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.colors.thirdColor,
    color: theme.colors.white,
    borderWidth: 0,
    borderRadius: 25,
    maxWidth: 172,
    width: '100%',
    maxHeight: 40,
    height: '100%',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colors.darkerThirdColor,
    },
  },
}));

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const classes: Record<'mainContainer', string> = useStyles();

  return (
    <button onClick={() => window.open('mailto:sk.zeeshan1992@gmail.com', '_blank')} className={classes.mainContainer}>
      {children}
    </button>
  );
};

export { Button };
