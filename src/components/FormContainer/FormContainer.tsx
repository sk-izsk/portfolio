import clsx from 'clsx';
import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { IoMdSad } from 'react-icons/io';
import { createUseStyles } from 'react-jss';
import Loader from 'react-loader-spinner';
import { Shape } from 'yup';
import { Button, Modal } from '..';
import { sendEmail } from '../../api/api';
import { CustomTheme, theme } from '../../theme';
import { useForm } from '../../utils/custom-hook';
import { formSchema, InputValues } from '../../validation/validation';

interface FormContainerProps {}

interface Error {
  name: string;
  errorMessage: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
  },
  smallInputField: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    outline: 'none',
    border: 0,
    textAlign: 'center',
    fontSize: 18,
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: theme.spacing(0.8),
    flex: 1,
  },
  textArea: {
    height: 100,
    borderRadius: 8,
    fontSize: 22,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    resize: 'none',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  emailTextContainer: {
    marginTop: theme.spacing(0.8),
    color: theme.colors.white,
  },
  email: {
    color: theme.colors.thirdColor,
    cursor: 'pointer',
    marginLeft: theme.spacing(1),
  },
  warningMessage: {
    color: theme.colors.red,
    marginLeft: theme.spacing(2),
  },
}));

const SuccessIcon = () => <FaRegThumbsUp color={theme.colors.thirdColor} size={50} />;
const SadIcon = () => <IoMdSad color={theme.colors.thirdColor} size={50} />;

const FormContainer: React.FC<FormContainerProps> = () => {
  const classes: Record<
    'form' | 'smallInputField' | 'textArea' | 'buttonContainer' | 'email' | 'emailTextContainer' | 'warningMessage',
    string
  > = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false);
  const [error, setError] = useState<Error>({ name: '', errorMessage: '' });
  const [loader, setLoader] = useState<boolean>(false);
  const [values, handleChange, reset] = useForm({ name: '', subject: '', message: '', email: '' });

  const onSubmit: (e: KeyboardEvent) => void = async (e: KeyboardEvent) => {
    try {
      e.preventDefault();
      setError({ name: '', errorMessage: '' });
      setLoader(true);
      const validatedValues: Shape<
        InputValues | undefined,
        {
          name: string;
          email: string;
          subject: string;
          message: string;
        }
      > = await formSchema.validate(values);
      if (validatedValues !== undefined) {
        const addEnvironment = {
          ...validatedValues,
          environment: process.env.NODE_ENV,
        };
        const response = await sendEmail(addEnvironment);
        if (response.status === 200) {
          reset();
          setLoader(false);
          setOpenModal(true);
        }
      }
    } catch (err) {
      setLoader(false);
      err.name === 'ValidationError'
        ? setError({ name: err.path, errorMessage: err.message })
        : setOpenErrorModal(true);
    }
  };

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };

  return (
    <>
      <Modal header='Successfully Sent.' open={openModal} onClose={() => setOpenModal(false)} icon={<SuccessIcon />}>
        Will get back to you as soon as possible
      </Modal>
      <Modal
        header='Opsss something goes wrong!!!'
        open={openErrorModal}
        onClose={() => setOpenErrorModal(false)}
        icon={<SadIcon />}
      >
        Something is going wrong. Kindly send me email at
        <span onClick={() => window.open('mailto:sk.zeeshan1992@gmail.com', '_blank')} className={classes.email}>
          sk.zeeshan1992@gmail.com
        </span>
        Thanks
      </Modal>
      <form className={classes.form}>
        <input
          value={values.name}
          className={classes.smallInputField}
          onChange={handleChange}
          name='name'
          type='text'
          placeholder='Your Name'
        />
        {error.name === 'name' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
        <input
          className={classes.smallInputField}
          value={values.email}
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='Email address'
        />
        {error.name === 'email' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
        <input
          value={values.subject}
          onChange={handleChange}
          className={classes.smallInputField}
          name='subject'
          type='text'
          placeholder='Subject'
        />
        {error.name === 'subject' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
        <textarea
          className={clsx([classes.smallInputField, classes.textArea])}
          placeholder='Type your message here.'
          name='message'
          value={values.message}
          onChange={handleChange}
        />
        {error.name === 'message' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
        <Loader type='ThreeDots' color={theme.colors.thirdColor} height={50} width={50} visible={loader} />
        <div className={classes.buttonContainer}>
          <div>
            <Button onKeyDown={onKeyDownHandler as any} onClick={onSubmit as any}>
              Send Message
            </Button>
            <div className={classes.emailTextContainer}>
              Don't like forms? Send me an
              <span onClick={() => window.open('mailto:sk.zeeshan1992@gmail.com', '_blank')} className={classes.email}>
                Email
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { FormContainer };
