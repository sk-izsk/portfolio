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
}));

const App: React.FC = () => {
  useStyles();
  return (
    <div>
      <AppBar />
      <Home />
    </div>
  );
};

export default App;
