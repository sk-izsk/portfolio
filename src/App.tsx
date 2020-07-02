import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Context, createContext, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getInformations } from './api/api';
import { AppBar } from './components';
import { About, Contact, Education, Experience, Home, Photography } from './screens';
import { CustomTheme, theme } from './theme';
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
  loaderContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const InformationsContext: Context<Informations | undefined> = createContext<Informations | undefined>(undefined);

const App: React.FC = () => {
  useStyles();
  const classes: Record<'@global' | 'loaderContainer', string> = useStyles();
  const [informations, setInformations] = useState<Informations | undefined>();
  const [showLoader, setShowLoader] = useState<boolean>(true);
  useEffect(() => {
    getInformations()
      .then((response) => {
        response.status === 200 && setInformations(response.data);
      })
      .catch((err) => console.warn(err))
      .finally(() => setShowLoader(false));
  }, []);

  const Components: JSX.Element[] = [<Home />, <About />, <Education />, <Experience />, <Photography />, <Contact />];
  return (
    <>
      <InformationsContext.Provider value={informations}>
        {showLoader ? (
          <div className={classes.loaderContainer}>
            <Loader type='Puff' color={theme.colors.secondaryColor} height={200} width={200} visible={showLoader} />
          </div>
        ) : (
          <>
            <AppBar />
            {Components.map((Component: JSX.Element, index: number) => (
              <div key={`${index}`}>{Component}</div>
            ))}
          </>
        )}
      </InformationsContext.Provider>
    </>
  );
};

export default App;
export { InformationsContext };
