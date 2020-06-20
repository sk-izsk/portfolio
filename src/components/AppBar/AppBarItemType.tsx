import React from 'react';
import { FaCamera, FaCode, FaHome, FaUser } from 'react-icons/fa';
import { IoIosChatbubbles, IoIosSchool } from 'react-icons/io';

export interface AppBarItemType {
  title: string;
  icon: (size?: number, color?: string) => JSX.Element;
}

const appBarItems: AppBarItemType[] = [
  {
    title: 'Home',
    icon: (size?: number, color?: string) => (
      <FaHome size={size ? size : undefined} color={color ? color : undefined} />
    ),
  },
  {
    title: 'About',
    icon: (size?: number, color?: string) => (
      <FaUser size={size ? size : undefined} color={color ? color : undefined} />
    ),
  },
  {
    title: 'Education',
    icon: (size?: number, color?: string) => (
      <IoIosSchool size={size ? size : undefined} color={color ? color : undefined} />
    ),
  },
  {
    title: 'Experience',
    icon: (size?: number, color?: string) => (
      <FaCode size={size ? size : undefined} color={color ? color : undefined} />
    ),
  },
  {
    title: 'Photography',
    icon: (size?: number, color?: string) => (
      <FaCamera size={size ? size : undefined} color={color ? color : undefined} />
    ),
  },
  {
    title: 'Contact',
    icon: (size?: number, color?: string) => (
      <IoIosChatbubbles size={size ? size : undefined} color={color ? color : undefined} />
    ),
  },
];

export { appBarItems };
