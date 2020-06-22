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
    width: 200,
    height: 150,
    borderRadius: 30,
    padding: 16,
    cursor: 'pointer',
  },
  photoMobile: {
    width: 150,
    height: 114,
  },
}));

const Photo: React.FC<PhotoProps> = ({ url }) => {
  const classes: Record<'photo' | 'photoMobile', string> = useStyles();

  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  return (
    <img
      onClick={() => window.open('https://www.instagram.com/sk_izsk/', '_blank')}
      className={clsx([classes.photo, isMobile && classes.photoMobile])}
      alt='photoBanner'
      src={url}
    />
  );
};

export { Photo };
