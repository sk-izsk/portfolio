import React from 'react';
import { createUseStyles } from 'react-jss';
import { AnimatedText, Button, SocialIcons, ThreeDAnimation } from '../../components';
import { Avatar } from '../../components/Avatar/Avatar';
import { CustomTheme } from '../../theme';

interface HomeProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    background: `linear-gradient(transparent, #000 ), url("https://lh3.googleusercontent.com/4b66nkdIyy2Kd7wvHvPiL0gx24TEMFxRHf9-K_7udMQCT11jMFKY5A4B1h4vM5uz-RXHrx18mnIfxJz__6e451yA20U2qwddEGHvOMXh_XGb6COAue5luf3RzvGqnl_-IYdkLlKSOPFOV_Ct46Miahvz_M_0ZPRtJGtbCKPyH0m6elJDkPNjyC75yPMySqUi-F6AJTKHU8EYkOtaI2bqxGRJ3iJpMrPAuDXVAjbcSl8gxLdXjn2O3vodWpMwK3mTq7IJj_ASd806wMndmxlmSHPbo0G05Je5GaANNM3WrkNYKnHfk1ob-Qv4xQxhCeBkSd_JSnPV7Bn7RJhnRkwCgK_qoKvc2lXZbyoQ08-jHHRzedHfMxkDRuSDi3bqwCX6a_DXk9s6nmWAVSpNai4WKNfo8xHxC78uHwVc3WeEOH3i3h0-3HH_zjNjs0UdPdmuo1hJOt23UNxPS9JYZvbKcUTFQb2Oa2S_ktxtc_1ztoqUNyebb1pu-UVV-yIRR-YOcJrd-xtbXt-qSWoSv1VCfY09Yw3rLAwQZR82wmdKPw_PePvFQ8j17LVD-BbJKhUhWUsB_M4iNgQGtY-Lw2g824hLFtlUjSn-WL6mE8bnJ5hqdXRvRqFQdyYsHhRA7AndGFki4n3FTw5mJbqoRS_Gb65givoizUA4_DBQGPg3XcO0-Ei1qnrEKluf-j3W2jM=w1320-h881-no?authuser=0")`,
    backgroundPosition: '50% 0',
    height: 400,
    backgroundAttachment: 'fixed',
  },
  textColor: {
    color: theme.colors.white,
  },
  childContainer: {
    marginTop: theme.spacing(4),
    zIndex: 1200,
    width: 340,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    height: '100%',
  },
}));

const Home: React.FC<HomeProps> = () => {
  const classes: Record<'mainContainer' | 'textColor' | 'childContainer' | 'buttonContainer', string> = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.childContainer}>
        <ThreeDAnimation>
          <Avatar url='https://lh3.googleusercontent.com/F8KLg2sPp76ZRIdAbG0QwHspM1jZbAgx6GdYVlOn0T9STESNoScrQon73LOLpmySnpl3WZXPA8P3lnwjW3Qoe2hsbNhAlwsvaxOIeIIpOpcFP_dNiYt8DyQUdI8c0dlZcdlZDSpwWo2Sd7_AzclMp0sAvOYl1T3VY2ME0IVzEGTYl6R7MwsAccokdfgzGmqDQ_d1LWG0EzpjZEA1jZuY0CGXFwcXGbeKpCGfnDlo3a4NByKuEMxWyHD5M_f8d7h3zRKRnOaroDnPqYwkIbCcuMex4vqheqaRzlJKYgzB76bzMLOnb45C2OhW6A5iIEY0hmLdhot5Vq8trKz7VAeDYlw8tW8XZ0m1Stm5kJYAR7RJShkNcCX5xYTsgvE6z47VY8k-RTBQLy8kcIHDS2yOu_R-i437kC5LLZUZqKiJSgto749pkYSxLihUJwxSzS9kunOCzV50qgHohIXweK847hJ-8QBqK3CPlRUpDPyGpwq_1UuB-XYj6FlXZjcfZiwVlMjUechy0nMOZkBLvM-EfhKcCPSpaSac6nj82IFH_hEBhifceD8lAeIStPVwmoYcCYvRXnLt5ZHIhgBL2J4fwkzOSH95gORWljPx3NIfkm2UNIE1883k4W3tPJATt8sYN7oDWR5_ksPtHdZS9z_DT9w-TPaDyg3t5-09hh3zDqVjSNpJ5ty5Uut8NKXQ_AU=w912-h861-no?authuser=0' />
        </ThreeDAnimation>
        <h1 className={classes.textColor}>Zeeshan</h1>
        <AnimatedText />
        <SocialIcons />
        <div className={classes.buttonContainer}>
          <Button>Hire me</Button>
        </div>
      </div>
    </div>
  );
};

export { Home };
