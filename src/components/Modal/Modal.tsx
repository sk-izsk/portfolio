import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { Button } from '../';
import { CustomTheme } from '../../theme';

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  header?: string;
  icon?: JSX.Element;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  modalBody: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Modal: React.FC<ModalProps> = ({ open, onClose, header, children, icon }) => {
  const classes = useStyles();
  return (
    <BootstrapModal show={open} onHide={onClose} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{header}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body className={classes.modalBody}>
        {icon}
        {children}
      </BootstrapModal.Body>
      <BootstrapModal.Footer className={classes.modalFooter}>
        <Button onClick={onClose}>Close</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export { Modal };
