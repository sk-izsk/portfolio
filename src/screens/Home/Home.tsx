import React, { useContext } from 'react';
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
    background: `linear-gradient(transparent, #000 ), url("https://lh3.googleusercontent.com/pw/ACtC-3cIqjvnyBnmXJ4ffwm3IxbhS3GYetTzeeT36RLKGXt3dpcSe2yGXApMXvB7dhCt5t5Vga9i2hm8Io3o7tqhAg6gd8X_KpWcutJGJ3AN3vbgrWzg7S7zPDW9aTjR_aiONuTMcAgtwmSrdtfK2IOEe3hKZg=w1391-h927-no")`,
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
  },
}));

const Home: React.FC<HomeProps> = () => {
  const classes: Record<'mainContainer' | 'textColor' | 'childContainer' | 'buttonContainer', string> = useStyles();
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);

  return (
    <Element name='Home'>
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
            <Button onClick={() => window.open('mailto:sk.zeeshan1992@gmail.com', '_blank')}>Hire me</Button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export { Home };
