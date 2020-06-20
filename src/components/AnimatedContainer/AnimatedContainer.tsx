import React from 'react';
import { animated, useSpring } from 'react-spring';

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

export { ThreeDAnimation };
