import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Context, createContext, useEffect } from 'react';
import ReactGa from 'react-ga';
import { createUseStyles } from 'react-jss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { NavBar } from './components';
import { informations } from './data';
import { About, Contact, Education, Experience, Home, MyOffers, Photography } from './screens';
import { CustomTheme } from './theme';
import { Informations } from './utils/informations';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.colors.primaryColor,
      scrollBehavior: 'smooth',
      fontFamily: theme.fontProperties.fontFamily,
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
  // const { data, isLoading, isFetching, error } = useQuery<AxiosResponse<any>, 'informations', any>(
  //   'informations',
  //   getInformations,
  // );

  console.log('information', informations);

  // useEffect(() => {
  //   socket.on('getInformations', (data: any) => {
  //     console.log('this is socket data', data);
  //     const { informations } = data;
  //     setInformations(informations[0]);
  //   });
  // }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TOKEN as string);
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
        <>
          <NavBar />
          {Components.map((Component: JSX.Element, index: number) => (
            <div key={`${index}`}>{Component}</div>
          ))}
        </>

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </InformationsContext.Provider>
    </>
  );
};

export default App;
export { InformationsContext };
