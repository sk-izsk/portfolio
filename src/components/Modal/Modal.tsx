import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { Button } from '..';
import { CustomTheme, theme } from '../../theme';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
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

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const classes: Record<'modalContainer' | 'modal', string> = useStyles();
  return (
    <ResponsiveModal
      closeOnEsc
      closeOnOverlayClick
      open={open}
      classNames={{ modal: classes.modalContainer }}
      onClose={onClose}
      center
    >
      <div className={classes.modal}>
        <FaRegThumbsUp color={theme.colors.thirdColor} size={50} />
        <h2>Will get back to you as soon as possible</h2>
        <Button onClick={onClose}>Okay</Button>
      </div>
    </ResponsiveModal>
  );
};

export { Modal };
