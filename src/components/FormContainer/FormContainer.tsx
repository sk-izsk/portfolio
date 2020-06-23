import clsx from 'clsx';
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Button, Modal } from '..';
import { CustomTheme } from '../../theme';
import { useForm } from '../../utils/CutomHook';
import { formSchema } from '../../validation/validation';

interface FormContainerProps {}

interface Error {
  name: string;
  errorMessage: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
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
    borderRadius: 8,
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

const FormContainer: React.FC<FormContainerProps> = () => {
  const classes: Record<
    | 'form'
    | 'smallInputField'
    | 'smallInputFieldContainer'
    | 'textArea'
    | 'buttonContainer'
    | 'biggerInputFieldContainer'
    | 'email'
    | 'smallInputFieldParentContainer'
    | 'emailTextContainer'
    | 'formMobile'
    | 'warningMessage',
    string
  > = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<Error>({ name: '', errorMessage: '' });
  const [values, handleChange, reset] = useForm({ name: '', subject: '', message: '', email: '' });

  const onSubmit: (e: KeyboardEvent) => void = async (e: KeyboardEvent) => {
    try {
      e.preventDefault();
      setError({ name: '', errorMessage: '' });
      await formSchema.validate(values);
      ['name', 'subject', 'message', 'email'].forEach((item: string) => reset(item));
      setOpenModal(true);
    } catch (err) {
      setError({ name: err.path, errorMessage: err.message });
    }
  };

  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <form className={clsx([classes.form, isMobile && classes.formMobile])}>
        <div className={classes.smallInputFieldContainer}>
          <div className={classes.smallInputFieldParentContainer}>
            <input
              value={values.name}
              className={classes.smallInputField}
              onChange={handleChange}
              name='name'
              type='text'
              placeholder='Your Name'
            />
            {error.name === 'name' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
          </div>
          <div className={classes.smallInputFieldParentContainer}>
            <input
              className={classes.smallInputField}
              value={values.email}
              onChange={handleChange}
              name='email'
              type='email'
              placeholder='Email address'
            />
            {error.name === 'email' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
          </div>
        </div>
        <div className={classes.biggerInputFieldContainer}>
          <input
            value={values.subject}
            onChange={handleChange}
            className={classes.smallInputField}
            name='subject'
            type='text'
            placeholder='Subject'
          />
          {error.name === 'subject' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}
        </div>
        <textarea
          className={clsx([classes.smallInputField, classes.textArea])}
          placeholder='Type your message here.'
          name='message'
          value={values.message}
          onChange={handleChange}
        />
        {error.name === 'message' && <span className={classes.warningMessage}>*{error.errorMessage}</span>}

        <div className={classes.buttonContainer}>
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
      </form>
    </>
  );
};

export { FormContainer };
