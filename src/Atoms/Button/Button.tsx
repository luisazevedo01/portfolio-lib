import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the Button */
  children: ReactNode;
  /** Pick a variant for the Button*/
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'green',
        color: 'white',
        border: 'none',
        borderRadius: '100px',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
