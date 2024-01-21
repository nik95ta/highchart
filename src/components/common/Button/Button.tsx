import React from 'react';
import { Button as MaterialButton } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <MaterialButton variant='contained' color='primary' onClick={onClick}>
      {children}
    </MaterialButton>
  );
};

export default Button;
