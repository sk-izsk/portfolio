import clsx from 'clsx';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Button } from '..';
import { InformationsContext } from '../../App';
import { CustomTheme } from '../../theme';
import { MemoizedComponent } from '../../utils/custom-hook';
import { Informations } from '../../utils/informations';
import { SkillInformationsContainer } from '../SkillInformationsContainer/SkillInformationsContainer';

interface AboutInfoProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    backgroundColor: theme.colors.darkerPrimaryColor,
    color: theme.colors.white,
    display: 'flex',
    padding: theme.spacing(2.5),
    borderRadius: 10,
    height: '100%',
    border: `1px solid ${theme.colors.secondaryColor}`,
  },
  descriptionContainer: {
    width: '100%',
    borderBottomColor: theme.colors.thirdColor,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    paddingBottom: theme.spacing(2),
  },
  descriptionContainerMobile: {
    borderBottomColor: theme.colors.thirdColor,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderRightColor: null,
    borderRightWidth: 0,
    borderRightStyle: null,
    paddingRight: theme.spacing(0),
  },
  description: {
    fontSize: 27,
  },
  descriptionMobile: {
    fontSize: 20,
  },
  button: {
    position: 'relative',
    top: 6,
    justifyContent: 'center',
    display: 'flex',
  },
  buttonMobile: {
    top: theme.spacing(0),
    marginBottom: theme.spacing(2.5),
    marginTop: theme.spacing(2.5),
  },
  skillsInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-around',
  },
  skillsInfoContainerMobile: {
    paddingLeft: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },
  triangleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  triangle: {
    position: 'relative',
    right: theme.spacing(3.75),
    width: 0,
    height: 0,
    borderTop: `10px solid transparent`,
    borderBottom: `10px solid transparent`,
    borderRight: `10px solid ${theme.colors.secondaryColor}`,
  },
  triangleMobile: {
    left: theme.spacing(21.5),
    right: theme.spacing(0),
    top: theme.spacing(-4.375),
    transform: 'rotate(90deg)',
  },
  triangleContainerMobile: {
    alignSelf: 'end',
  },
  descriptionParentContainer: { display: 'flex', width: '100%', flexDirection: 'column' },
  descriptionParentContainerMobile: { flexDirection: 'column' },
}));

const AboutInfo: React.FC<AboutInfoProps> = () => {
  const classes: Record<
    | 'mainContainer'
    | 'descriptionContainer'
    | 'descriptionParentContainer'
    | 'descriptionParentContainerMobile'
    | 'triangle'
    | 'description'
    | 'descriptionContainerMobile'
    | 'button'
    | 'skillsInfoContainer'
    | 'triangleMobile'
    | 'triangleContainer'
    | 'buttonMobile'
    | 'triangleContainerMobile'
    | 'skillsInfoContainerMobile'
    | 'descriptionMobile',
    string
  > = useStyles();

  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const isSmallerDevices: boolean = useMediaQuery({ maxWidth: 480 });
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);

  const onClick = () =>
    window.open(
      'https://docs.google.com/document/d/16Ko4S8n50fedwi4re2K-djKxe2zGrRRWKuXdtko7jow/edit?usp=sharing',
      '_blank',
    );

  return (
    <div className={classes.mainContainer}>
      {MemoizedComponent(
        <div className={clsx([classes.triangleContainer, isMobile && classes.triangleContainerMobile])}>
          <div className={clsx([classes.triangle, isMobile && classes.triangleMobile])} />
        </div>,
        isMobile,
      )}
      {MemoizedComponent(
        <div
          className={clsx([classes.descriptionParentContainer, isMobile && classes.descriptionParentContainerMobile])}
        >
          <div className={clsx([classes.descriptionContainer, isMobile && classes.descriptionContainerMobile])}>
            <div className={clsx([classes.description, isSmallerDevices && classes.descriptionMobile])}>
              I am Shaikh Zeeshan Murshed, Full stack web developer from Montreal, Canada. I have experience in making
              Website. Also I am a hobbyist photographer.
            </div>
            <div className={clsx([classes.button, isMobile && classes.buttonMobile])}>
              <Button onClick={onClick}>Download My CV</Button>
            </div>
          </div>
          <div className={clsx([classes.skillsInfoContainer, isMobile && classes.skillsInfoContainerMobile])}>
            {context?.skillsInformation && (
              <SkillInformationsContainer skillsInformations={context?.skillsInformation} />
            )}
          </div>
        </div>,
        onClick,
      )}
    </div>
  );
};

export { AboutInfo };
