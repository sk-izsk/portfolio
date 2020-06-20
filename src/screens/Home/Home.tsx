import React from 'react';
import { createUseStyles } from 'react-jss';
import { AnimatedText, Button, SocialIcons } from '../../components';
import { Avatar } from '../../components/Avatar/Avatar';
import { CustomTheme } from '../../theme';

interface HomeProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  },
  textColor: {
    color: theme.colors.white,
  },
  childContainer: {
    width: 340,
    textAlign: 'center',
  },
}));

const Home: React.FC<HomeProps> = () => {
  const classes: Record<'mainContainer' | 'textColor' | 'childContainer', string> = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.childContainer}>
        <Avatar url='https://lh3.googleusercontent.com/F8KLg2sPp76ZRIdAbG0QwHspM1jZbAgx6GdYVlOn0T9STESNoScrQon73LOLpmySnpl3WZXPA8P3lnwjW3Qoe2hsbNhAlwsvaxOIeIIpOpcFP_dNiYt8DyQUdI8c0dlZcdlZDSpwWo2Sd7_AzclMp0sAvOYl1T3VY2ME0IVzEGTYl6R7MwsAccokdfgzGmqDQ_d1LWG0EzpjZEA1jZuY0CGXFwcXGbeKpCGfnDlo3a4NByKuEMxWyHD5M_f8d7h3zRKRnOaroDnPqYwkIbCcuMex4vqheqaRzlJKYgzB76bzMLOnb45C2OhW6A5iIEY0hmLdhot5Vq8trKz7VAeDYlw8tW8XZ0m1Stm5kJYAR7RJShkNcCX5xYTsgvE6z47VY8k-RTBQLy8kcIHDS2yOu_R-i437kC5LLZUZqKiJSgto749pkYSxLihUJwxSzS9kunOCzV50qgHohIXweK847hJ-8QBqK3CPlRUpDPyGpwq_1UuB-XYj6FlXZjcfZiwVlMjUechy0nMOZkBLvM-EfhKcCPSpaSac6nj82IFH_hEBhifceD8lAeIStPVwmoYcCYvRXnLt5ZHIhgBL2J4fwkzOSH95gORWljPx3NIfkm2UNIE1883k4W3tPJATt8sYN7oDWR5_ksPtHdZS9z_DT9w-TPaDyg3t5-09hh3zDqVjSNpJ5ty5Uut8NKXQ_AU=w912-h861-no?authuser=0' />
        <h1 className={classes.textColor}>Zeeshan</h1>
        <AnimatedText />
        <SocialIcons />
        <Button>Hire me</Button>
      </div>
    </div>
  );
};

export { Home };
