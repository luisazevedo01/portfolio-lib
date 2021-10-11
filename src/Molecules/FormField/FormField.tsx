import React, { FC, HTMLAttributes } from 'react';

export interface FormFieldProps extends HTMLAttributes<HTMLInputElement> {
  /** Provide a label for the Field */
  label?: string;
  /** Provide a placeholder for the Field */
  placeholder?: string;
  /** Provide a type for the Field */
  type?: 'text' | 'number' | 'password' | 'radio' | 'checkbox';
}

export const FormField: FC<FormFieldProps> = ({ label, type, placeholder }) => {
  return (
    <>
      {label && (
        <>
          <label>{label}</label>
          <br />
        </>
      )}
      <input type={type} placeholder={placeholder} />
    </>
  );
};
