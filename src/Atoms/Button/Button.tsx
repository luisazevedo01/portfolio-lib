import React, { FC, HTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the Button */
  children: ReactNode;
  /** Pick a variant for the Button*/
  variant?: 'dark' | 'light';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'dark',
  ...props
}) => {
  return (
    <button id={variant === 'dark' ? 'dark-button' : 'light-button'} {...props}>
      {children}
    </button>
  );
};
