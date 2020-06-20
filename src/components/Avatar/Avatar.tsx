import React from 'react';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';

interface AvatarProps {
  url: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    borderRadius: 50,
    height: 108,
    width: 108,
  },
}));

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  const classes: Record<'mainContainer', string> = useStyles();

  return <img className={classes.mainContainer} alt='Avatar' src={url} />;
};

export { Avatar };
