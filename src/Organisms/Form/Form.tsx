import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  action: string;
  children: ReactNode;
}
/** Title */
export const Form: FC<FormProps> = ({ action, children }) => {
  return <form action={action}>{children}</form>;
};
