import React, { Context, createContext, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { getInformations } from './api/api';
import { AppBar } from './components';
import { About, Contact, Education, Experience, Home, Photography } from './screens';
import { CustomTheme } from './theme';
import { MemoizedComponent } from './utils/custom-hook';
import { Informations } from './utils/informations';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.colors.primaryColor,
      fontFamily: theme.fontProperties.fontFamily,
      scrollBehavior: 'smooth',
    },
  },
}));

const InformationsContext: Context<Informations | undefined> = createContext<Informations | undefined>(undefined);

const App: React.FC = () => {
  useStyles();
  const [informations, setInformations] = useState<Informations | undefined>();
  useEffect(() => {
    getInformations()
      .then((response) => {
        response.status === 200 && setInformations(response.data);
      })
      .catch((err) => console.warn(err));
  }, []);

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
      <InformationsContext.Provider value={informations}>
        {Components.map((Component: JSX.Element, index: number) => (
          <div key={index}>{MemoizedComponent(Component)}</div>
        ))}
      </InformationsContext.Provider>
    </>
  );
};

export default App;
export { InformationsContext };
