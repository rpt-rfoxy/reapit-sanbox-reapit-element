import React, { FC, HTMLAttributes } from 'react'
import { ElFormControl, Variants } from './styles'
import { Label } from './label'
import { FormInput } from './form-input'
import { HelperText } from './helper-text'
import { ErrorText } from './error-text'

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variants
}

export const FormControlComponent: FC<FormControlProps> = ({ children, variant, ...restProps }) => {
  return (
    <ElFormControl {...restProps} data-variant={variant}>
      {children}
    </ElFormControl>
  )
}

export const FormControl = Object.assign(FormControlComponent, {
  Label: Label,
  Input: FormInput,
  ErrorText: ErrorText,
  HelperText: HelperText
});
