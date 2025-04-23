import React, { FC, HTMLAttributes } from 'react'
interface FormInputProps extends HTMLAttributes<HTMLElement> { }

export const FormInput: FC<FormInputProps> = ({ children }) => {
  return children
}
