import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppBar } from './components';
import { About, Contact, Education, Experience, Home, Photography } from './screens';
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
    <>
      <AppBar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Photography />
      <Contact />
    </>
  );
};

export default App;
