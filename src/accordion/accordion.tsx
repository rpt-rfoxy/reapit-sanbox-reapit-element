import React, { FC, useId } from "react";
import { ElAccordion } from "./styles";
import { useAccordionGroup } from "./accordion-group-context";
import { AccordionBody } from "./accordion-body";
import { AccordionGroup } from "./accordion-group";
import { AccordionHeader } from "./accordion-header";
import { AccordionLegend } from "./accordion-legend";

export interface AccordionProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> { }

const AccordionComponent: FC<AccordionProps> = ({ children, ...props }) => {
  const value = useId();
  const { currentValue, toggle } = useAccordionGroup();

  const onToggleClick = (event: React.MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    toggle(value);
  }

  return (
    <ElAccordion
      {...props}
      onClick={onToggleClick}
      open={currentValue === value}
    >
      {children}
    </ElAccordion>
  );
}

export const Accordion = Object.assign(AccordionComponent, {
  Body: AccordionBody,
  Group: AccordionGroup,
  Header: AccordionHeader,
  Legend: AccordionLegend
});
