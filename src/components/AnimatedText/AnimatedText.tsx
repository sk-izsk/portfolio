import React from 'react';
import { createUseStyles } from 'react-jss';
import TextLoop from 'react-text-loop';
import { CustomTheme } from '../../theme';
import { MemoizedComponent } from '../../utils/custom-hook';

interface AnimatedTextProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  textColor: {
    color: theme.colors.white,
  },
  animatedText: {
    marginLeft: theme.spacing(1),
  },
}));

const AnimatedText: React.FC<AnimatedTextProps> = () => {
  const classes: Record<'textColor' | 'animatedText', string> = useStyles();

  return (
    <div className={classes.textColor}>
      I am a
      <span className={classes.animatedText}>
        {MemoizedComponent(
          <TextLoop
            springConfig={{ stiffness: 180, damping: 8 }}
            interval={1500}
            children={['Full Stack Web Developer', 'Photography Lover']}
          />,
        )}
      </span>
    </div>
  );
};

export { AnimatedText };
