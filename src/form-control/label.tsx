import React, { AnchorHTMLAttributes, FC, HTMLAttributes } from 'react'
import { ElLabel } from './styles'
import { ElLabelRequiredMark } from '../label-text'

interface TextLabelProps extends HTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

export const Label: FC<TextLabelProps> = ({ children, isRequired, ...restProps }) => {
  return (
    <ElLabel {...restProps}>
      {children}
      {isRequired && <ElLabelRequiredMark>*</ElLabelRequiredMark>}
    </ElLabel>
  )
}
