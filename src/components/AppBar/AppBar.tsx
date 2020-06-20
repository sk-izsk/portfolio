import clsx from 'clsx';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { CustomTheme } from '../../theme';
import { AppBarItem } from '../AppBarItem/AppBarItem';
import { appBarItems, AppBarItemType } from './AppBarItemType';

interface AppBarProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'sticky',
    backgroundColor: theme.colors.primaryColor,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
  mainContainerForMobile: {
    color: theme.colors.white,
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(2.5),
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.secondaryColor,
      pointerEvent: 'none',
    },
  },
  mobileAppBarItem: {
    marginTop: theme.spacing(1.5),
  },
  mobileAppBarItemsContainer: {
    maxWidth: theme.spacing(32.5),
    width: '100%',
  },
  mobileAppBarItemsMainContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2.5),
  },
}));

const AppBar: React.FC<AppBarProps> = () => {
  const classes: Record<
    | 'mainContainer'
    | 'mainContainerForMobile'
    | 'mobileAppBarItemsContainer'
    | 'mobileAppBarItem'
    | 'mobileAppBarItemsMainContainer',
    string
  > = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const [showMobileAppBar, setShowMobileAppBar] = useState<boolean>(true);

  return (
    <>
      {!isMobile ? (
        <div className={classes.mainContainer}>
          {appBarItems.map((appBarItem: AppBarItemType) => {
            return (
              <AppBarItem key={appBarItem.title} icon={appBarItem.icon()}>
                {appBarItem.title}
              </AppBarItem>
            );
          })}
        </div>
      ) : (
        <>
          {showMobileAppBar ? (
            <div className={clsx([classes.mainContainer, classes.mainContainerForMobile])}>
              <FiMenu onClick={() => setShowMobileAppBar(false)} size={30} />
            </div>
          ) : (
            <>
              <div className={clsx([classes.mainContainer, classes.mainContainerForMobile])}>
                <IoMdClose onClick={() => setShowMobileAppBar(true)} size={30} />
              </div>
              <div className={classes.mobileAppBarItemsMainContainer}>
                <div className={classes.mobileAppBarItemsContainer}>
                  {appBarItems.map((appBarItem: AppBarItemType) => {
                    return (
                      <div className={classes.mobileAppBarItem} key={appBarItem.title}>
                        <AppBarItem fontSize={30} icon={appBarItem.icon(30)}>
                          {appBarItem.title}
                        </AppBarItem>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export { AppBar };
