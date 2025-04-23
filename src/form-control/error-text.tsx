import React, { FC, HTMLAttributes } from 'react'
import { ElErrorText } from './styles'

interface ErrorTextProps extends HTMLAttributes<HTMLParagraphElement> { }

export const ErrorText: FC<ErrorTextProps> = ({ children, ...restProps }) => {
  return <ElErrorText role='alert' {...restProps}>{children}</ElErrorText>
}
