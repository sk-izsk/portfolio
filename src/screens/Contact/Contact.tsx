import clsx from 'clsx';
import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Element } from 'react-scroll';
import { Button, VanishAnimation } from '../../components';
import { CustomTheme, theme } from '../../theme';

interface ContactProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    alignItems: 'center',
  },
  formMobile: {
    width: '90%',
  },
  smallInputFieldContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  smallInputFieldParentContainer: {
    padding: theme.spacing(0.8),
    flex: '1 1 330px',
  },
  smallInputField: {
    height: 50,
    width: '100%',
    borderRadius: 30,
    outline: 'none',
    border: 0,
    textAlign: 'center',
    fontSize: 18,
  },

  biggerInputFieldContainer: {
    padding: theme.spacing(0.8),
    flex: '1 1 56px',
    width: '100%',
  },
  textArea: {
    height: 100,
    borderRadius: 20,
    fontSize: 22,
    paddingTop: 22,
    resize: 'none',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  emailTextContainer: {
    marginTop: theme.spacing(0.8),
    color: theme.colors.white,
  },
  email: { color: theme.colors.thirdColor, cursor: 'pointer', marginLeft: theme.spacing(1) },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.darkerPrimaryColor,
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.colors.white,
    alignItems: 'center',
    padding: theme.spacing(2.5),
  },
}));

const Contact: React.FC<ContactProps> = () => {
  const classes: Record<
    | 'header'
    | 'form'
    | 'formContainer'
    | 'smallInputField'
    | 'smallInputFieldContainer'
    | 'textArea'
    | 'buttonContainer'
    | 'biggerInputFieldContainer'
    | 'email'
    | 'smallInputFieldParentContainer'
    | 'emailTextContainer'
    | 'formMobile'
    | 'modalContainer'
    | 'modal',
    string
  > = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onSubmit: (e: KeyboardEvent) => void = (e: KeyboardEvent) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <Element name='Contact'>
      <Modal
        closeOnEsc
        closeOnOverlayClick
        open={openModal}
        classNames={{ modal: classes.modalContainer }}
        onClose={() => setOpenModal(false)}
        center
      >
        <div className={classes.modal}>
          <FaRegThumbsUp color={theme.colors.thirdColor} size={50} />
          <h2>Will get back to you as soon as possible</h2>
          <Button onClick={() => setOpenModal(false)}>Okay</Button>
        </div>
      </Modal>
      <div className={classes.header}>
        <VanishAnimation words={['Contact']} />
      </div>
      <div className={classes.formContainer}>
        <form className={clsx([classes.form, isMobile && classes.formMobile])}>
          <div className={classes.smallInputFieldContainer}>
            <div className={classes.smallInputFieldParentContainer}>
              <input className={classes.smallInputField} name='name' type='text' placeholder='Your Name' />
            </div>
            <div className={classes.smallInputFieldParentContainer}>
              <input className={classes.smallInputField} name='email' type='email' placeholder='Email address' />
            </div>
          </div>
          <div className={classes.biggerInputFieldContainer}>
            <input className={classes.smallInputField} name='subject' type='text' placeholder='Subject' />
          </div>
          <textarea
            className={clsx([classes.smallInputField, classes.textArea])}
            placeholder='Type your message here.'
            name='description'
          />
          <div className={classes.buttonContainer}>
            <Button onClick={onSubmit as any}>Send Message</Button>
            <div className={classes.emailTextContainer}>
              Don't link forms? Send me an
              <span onClick={() => window.open('mailto:sk.zeeshan1992@gmail.com', '_blank')} className={classes.email}>
                Email
              </span>
            </div>
          </div>
        </form>
      </div>
    </Element>
  );
};

export { Contact };
