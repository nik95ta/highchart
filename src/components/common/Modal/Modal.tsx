import React from 'react';
import Dialog from '@mui/material/Dialog';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullScreen>
      <span className={styles.close} onClick={onClose}>
        &times;
      </span>
      {children}
    </Dialog>
  );
};

export default Modal;
