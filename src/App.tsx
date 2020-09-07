import { AxiosResponse } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Context, createContext, useEffect } from 'react';
import ReactGa from 'react-ga';
import { createUseStyles } from 'react-jss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { getInformations } from './api/api';
import { NavBar } from './components';
import { About, Contact, Education, Experience, Home, MyOffers, Photography } from './screens';
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
  // const [informations, setInformations] = useState();
  useStyles();
  const classes: Record<'@global' | 'loaderContainer', string> = useStyles();
  const { data, isLoading, isFetching, error } = useQuery<AxiosResponse<any>, 'informations', any>(
    'informations',
    getInformations,
  );

  const informations: Informations = data?.data[0];

  // useEffect(() => {
  //   socket.on('getInformations', (data: any) => {
  //     console.log('this is socket data', data);
  //     const { informations } = data;
  //     setInformations(informations[0]);
  //   });
  // }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      //@ts-ignore
      ReactGa.initialize(process.env.REACT_GOOGLE_ANALYTICS_TOKEN);
      ReactGa.pageview('/');
    }
  }, []);

  const Components: JSX.Element[] = [
    <Home />,
    <About />,
    <Education />,
    <Experience />,
    <MyOffers />,
    <Photography />,
    <Contact />,
  ];
  return (
    <>
      <InformationsContext.Provider value={informations}>
        {isLoading || error ? (
          <div className={classes.loaderContainer}>
            <Loader type='Puff' color={theme.colors.secondaryColor} height={200} width={200} visible={isFetching} />
          </div>
        ) : (
          <>
            <NavBar />
            {Components.map((Component: JSX.Element, index: number) => (
              <div key={`${index}`}>{Component}</div>
            ))}
          </>
        )}
        <ReactQueryDevtools initialIsOpen={false} />
      </InformationsContext.Provider>
    </>
  );
};

export default App;
export { InformationsContext };
