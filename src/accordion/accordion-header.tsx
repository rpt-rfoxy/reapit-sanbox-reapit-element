import React, { FC } from "react";
import { ElAccordionHeader } from "./styles";

export interface AccordionBodyProps extends React.HTMLAttributes<HTMLElement> { }

export const AccordionHeader: FC<AccordionBodyProps> = ({ children, ...props }) => {
  return (
    <ElAccordionHeader {...props}>{children}</ElAccordionHeader>
  );
}