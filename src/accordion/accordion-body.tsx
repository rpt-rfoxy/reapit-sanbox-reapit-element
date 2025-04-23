import React, { FC } from "react";
import { ElAccordionBody, ElAccordionContentArea } from "./styles";

export interface AccordionBodyProps extends React.HTMLAttributes<HTMLDivElement> { }

export const AccordionBody: FC<AccordionBodyProps> = ({ children, ...props }) => {
  return (
    <ElAccordionBody {...props}>
      <ElAccordionContentArea>{children}</ElAccordionContentArea>
    </ElAccordionBody>
  );
}