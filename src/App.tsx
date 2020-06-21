import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppBar } from './components';
import { Home } from './screens';
import { CustomTheme } from './theme';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.colors.primaryColor,
      fontFamily: theme.fontProperties.fontFamily,
    },
  },
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
}));

const App: React.FC = () => {
  useStyles();
  const classes: Record<'@global' | 'sticky', string> = useStyles();
  return (
    <>
      <div className={classes.sticky}>
        <AppBar />
      </div>
      <Home />
    </>
  );
};

export default App;
