import React, { FC, HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /** Provide a type for the Input*/
  type?: 'text' | 'number' | 'password' | 'radio' | 'checkbox';
  /** Pick a variant for the Input*/
  variant?: 'primary' | 'round';
}

export const Input: FC<InputProps> = ({ variant, ...props }) => {
  return (
    <input
      {...props}
      style={{
        borderRadius: variant === 'round' ? '30px' : '',
        cursor: 'pointer',
        outline: 'none',
        padding: '4px',
      }}
    />
  );
};
