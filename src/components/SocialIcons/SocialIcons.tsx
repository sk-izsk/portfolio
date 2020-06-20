import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { CustomTheme } from '../../theme';

interface SocialIcons {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(4),
  },
  socialIconContainer: {
    color: theme.colors.white,
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.secondaryColor,
    },
  },
}));

const socialIcons: JSX.Element[] = [
  <FaGithub onClick={() => window.open('https://github.com/sk-izsk', '_blank')} size={25} />,
  <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/skizsk/', '_blank')} size={25} />,
  <FiTwitter onClick={() => window.open('https://twitter.com/Sk_iZsk', '_blank')} size={25} />,
  <FaFacebookSquare onClick={() => window.open('https://www.facebook.com/Sk.iZsk', '_blank')} size={25} />,
  <FiInstagram onClick={() => window.open('https://www.instagram.com/sk_izsk/', '_blank')} size={25} />,
  <FaTelegram onClick={() => window.open('https://t.me/sk_izsk', '_blank')} size={25} />,
  <AiOutlineMail onClick={() => window.open('mailto:sk.zeeshan1992@gmail.com', '_blank')} size={25} />,
];

const SocialIcons: React.FC<SocialIcons> = () => {
  const classes: Record<'mainContainer' | 'socialIconContainer', string> = useStyles();

  return (
    <div className={classes.mainContainer}>
      {socialIcons.map((socialIcon: JSX.Element, index: number) => {
        return (
          <div className={classes.socialIconContainer} key={index}>
            {socialIcon}
          </div>
        );
      })}
    </div>
  );
};

export { SocialIcons };
