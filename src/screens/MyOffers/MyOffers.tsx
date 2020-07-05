import clsx from 'clsx';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { InformationsContext } from '../../App';
import { OffersContainer, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';
import { Informations } from '../../utils/informations';

export interface MyOffersProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(0.5),
  },
  mainContainer: {
    marginTop: theme.spacing(1.5),
  },
  mainOfferContainer: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    justifyContent: 'center',
  },
  offerContainer: {
    display: 'flex',
    width: '93%',
    justifyContent: 'space-between',
  },
  offerContainerMobile: {
    // paddingRight: theme.spacing(2),
    // paddingLeft: theme.spacing(2),
    flexDirection: 'column',
  },
  backEndContainer: {
    marginLeft: theme.spacing(1),
  },
  backEndContainerMobile: {
    marginLeft: 0,
  },
  frontEndContainer: {
    marginRight: theme.spacing(1),
  },
  frontEndContainerMobile: {
    marginRight: 0,
  },
}));

const MyOffers: React.FC<MyOffersProps> = () => {
  const classes = useStyles();
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);

  const isMobile: boolean = useMediaQuery({ maxWidth: 980 });
  return (
    <Element className={classes.mainContainer} name='My Offers'>
      <div className={classes.header}>
        <VanishAnimation words={['My Offers']} />
      </div>
      <div className={classes.mainOfferContainer}>
        {context !== undefined && (
          <div className={clsx([classes.offerContainer, isMobile && classes.offerContainerMobile])}>
            <OffersContainer
              title='Frontend'
              offerings={context?.myOffers.frontEnd.offerings}
              className={clsx([classes.frontEndContainer, isMobile && classes.frontEndContainerMobile])}
            />
            <OffersContainer
              title='Backend'
              offerings={context?.myOffers.backEnd.offerings}
              className={clsx([classes.backEndContainer, isMobile && classes.backEndContainerMobile])}
            />
          </div>
        )}
      </div>
    </Element>
  );
};

export { MyOffers };
