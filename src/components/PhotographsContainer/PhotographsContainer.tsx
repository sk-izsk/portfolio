import clsx from 'clsx';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Button, Photo } from '..';
import { InformationsContext } from '../../App';
import { CustomTheme } from '../../theme';
import { Informations, PhotoType } from '../../utils/informations';
import { ThreeDAnimation } from '../AnimatedContainer/AnimatedContainer';

interface PhotographsContainerProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    backgroundColor: theme.colors.darkerPrimaryColor,
    color: theme.colors.white,
    display: 'flex',
    padding: theme.spacing(2.5),
    borderRadius: 10,
    height: '100%',
    border: `1px solid ${theme.colors.secondaryColor}`,
    width: '92%',
    flexDirection: 'column',
    textAlign: 'center',
  },
  mainContainerMobile: {
    width: '92%',
  },
  photosContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    position: 'relative',
  },
}));

const PhotographsContainer: React.FC<PhotographsContainerProps> = () => {
  const classes: Record<'mainContainer' | 'mainContainerMobile' | 'photosContainer' | 'button', string> = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);

  return (
    <div className={clsx([classes.mainContainer, isMobile && classes.mainContainerMobile])}>
      <div className={classes.photosContainer}>
        {context?.photos &&
          context.photos.map((photo: PhotoType) => {
            return <ThreeDAnimation key={photo.url}>{<Photo url={photo.url} />}</ThreeDAnimation>;
          })}
      </div>

      <div className={classes.button}>
        <Button onClick={() => window.open('https://www.instagram.com/sk_izsk/', '_blank')}>Explore more images</Button>
      </div>
    </div>
  );
};

export { PhotographsContainer };
