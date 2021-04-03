import ParticlesBg from 'particles-bg';
import React, { useContext, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Element } from 'react-scroll';
import { InformationsContext } from '../../App';
import { AnimatedText, Avatar, Button, SocialIcons, ThreeDAnimation } from '../../components';
import { CustomTheme } from '../../theme';
import { Informations } from '../../utils/informations';

interface HomeProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    height: 400,
    backgroundAttachment: 'fixed',
  },
  textColor: {
    color: theme.colors.white,
  },
  childContainer: {
    marginTop: theme.spacing(4),
    width: 340,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
  },
  button: {
    width: '100%',
    marginLeft: theme.spacing(1),
  },
}));

const Home: React.FC<HomeProps> = () => {
  // eslint-disable-next-line
  const [animationStyle, setAnimationStyle] = useState<boolean>(Math.round(Math.random() * 2) % 2 === 1);
  const classes: Record<
    'mainContainer' | 'textColor' | 'button' | 'childContainer' | 'buttonContainer',
    string
  > = useStyles();
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);

  return (
    <Element name='Home'>
      <ParticlesBg type={animationStyle ? 'fountain' : 'circle'} bg={true}></ParticlesBg>
      <div className={classes.mainContainer}>
        <div className={classes.childContainer}>
          {context?.avatar.avatarOne && (
            <ThreeDAnimation>
              <Avatar url={context.avatar.avatarOne as string} />
            </ThreeDAnimation>
          )}
          <h1 className={classes.textColor}>Zeeshan</h1>
          <AnimatedText />
          <SocialIcons />
          <div className={classes.buttonContainer}>
            <Button onClick={() => window.open('https://izsk.vercel.app', '_blank')}>Next Portfolio</Button>
            <div className={classes.button}>
              <Button onClick={() => window.open('https://izsk-vue.netlify.app', '_blank')}>Vue Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export { Home };
