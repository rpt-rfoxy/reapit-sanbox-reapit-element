import React, { FC } from "react";
import { ElAccordionLegend } from "./styles";

export interface AccordionLegendProps extends React.HTMLAttributes<HTMLDivElement> { }

export const AccordionLegend: FC<AccordionLegendProps> = ({ children, ...props }) => {
  return (
    <ElAccordionLegend {...props}>{children}</ElAccordionLegend>
  );
}