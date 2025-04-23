import React, { FC, HTMLAttributes } from 'react'
import { ElHelperText } from './styles'

interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> { }

export const HelperText: FC<HelperTextProps> = ({ children, ...restProps }) => {
  return (
    <ElHelperText role='article' {...restProps}>
      {children}
    </ElHelperText>
  )
}
