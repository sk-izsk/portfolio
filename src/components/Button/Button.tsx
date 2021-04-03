import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { animated, useSpring } from 'react-spring';
import { CustomTheme } from '../../theme';

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    backgroundColor: theme.colors.thirdColor,
    color: theme.colors.white,
    borderWidth: 0,
    borderRadius: 25,
    maxWidth: 200,
    width: '100%',
    height: 40,
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colors.darkerThirdColor,
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
}));

const calc: (x: number, y: number) => number[] = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans: (x: number, y: number, s: number) => string | undefined = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface ButtonProps {
  onClick?: () => void;
  onKeyDown?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, onKeyDown, className }) => {
  const classes: Record<'mainContainer', string> = useStyles();
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return (
    <animated.button
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans as any) }}
      onClick={onClick}
      className={clsx([classes.mainContainer, className && className])}
      onKeyDown={onKeyDown}
    >
      {children}
    </animated.button>
  );
};

export { Button };
