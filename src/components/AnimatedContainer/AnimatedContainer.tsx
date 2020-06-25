import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { animated, useSpring, useTrail } from 'react-spring';
import { CustomTheme } from '../../theme';

interface ThreeDAnimationProps {}

const calc: (x: number, y: number) => number[] = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans: (x: number, y: number, s: number) => string | undefined = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ThreeDAnimation: React.FC<ThreeDAnimationProps> = ({ children }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans as any) }}
    >
      {children}
    </animated.div>
  );
};

interface VanishAnimationProps {
  words: string[];
}

const config = { mass: 5, tension: 2000, friction: 200 };

const useStyles = createUseStyles((theme: CustomTheme) => ({
  h2Text: {
    marginRight: theme.spacing(1),
  },
}));

const UnMemoizedVanishAnimation: React.FC<VanishAnimationProps> = ({ words }) => {
  const classes: Record<'h2Text', string> = useStyles();

  const [toggle, setToggle] = useState(true);
  const trail = useTrail(words.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          onClick={() => {
            setToggle(false);
            setTimeout(() => {
              setToggle(true);
            }, 1000);
          }}
          key={words[index]}
          //@ts-ignore
          style={{ ...rest, transform: x.interpolate((x: number) => `translate3d(0,${x}px,0)`) }}
        >
          <animated.h2 className={classes.h2Text}>{words[index]}</animated.h2>
        </animated.div>
      ))}
    </>
  );
};

const VanishAnimation: React.NamedExoticComponent<VanishAnimationProps> = React.memo(UnMemoizedVanishAnimation);

export { ThreeDAnimation, VanishAnimation };
