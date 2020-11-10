import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { CustomTheme } from '../../theme';

interface PhotoProps {
  url?: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  photo: {
    width: '80%',
    height: theme.spacing(25),
    borderRadius: 20,
    padding: theme.spacing(0.75),
    cursor: 'pointer',
    filter: 'grayscale(100%)',
    transition: 'transform 0.5s ease',
    '&:hover': {
      filter: 'grayscale(0%)',
      transform: 'scale(1.1)',
    },
  },
  photoMobile: {
    width: 150,
    height: 114,
  },
  photoForSmallerDevice: {
    width: 126,
    height: 100,
    padding: theme.spacing(1.625),
  },
}));

const UnMemoizedPhoto: React.FC<PhotoProps> = ({ url }) => {
  const classes: Record<'photo' | 'photoMobile' | 'photoForSmallerDevice', string> = useStyles();

  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const isSmallerDevice: boolean = useMediaQuery({ maxWidth: 480 });
  return (
    <img
      onClick={() => window.open('https://www.instagram.com/sk_izsk/', '_blank')}
      className={clsx([
        classes.photo,
        isMobile && classes.photoMobile,
        isSmallerDevice && classes.photoForSmallerDevice,
      ])}
      alt='photoBanner'
      src={url}
    />
  );
};

const Photo: React.NamedExoticComponent<PhotoProps> = React.memo(UnMemoizedPhoto);

export { Photo };
