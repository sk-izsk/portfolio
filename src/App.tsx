import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppBar } from './components';
import { About, Contact, Education, Experience, Home, Photography } from './screens';
import { CustomTheme } from './theme';
import { MemoizedComponent } from './utils/custom-hook';

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

  const Components: JSX.Element[] = [
    <AppBar />,
    <Home />,
    <About />,
    <Education />,
    <Experience />,
    <Photography />,
    <Contact />,
  ];
  return (
    <>
      {Components.map((Component: JSX.Element, index: number) => (
        <div key={index}>{MemoizedComponent(Component)}</div>
      ))}
    </>
  );
};

export default App;
