import React, { FC, useId, useState } from "react";
import { AccordionGroupContext } from "./accordion-group-context";

export const toggleClick = (setCurrentValue: React.Dispatch<React.SetStateAction<string | null>>) => (newValue: string) => {
  setCurrentValue((currentValue) => (currentValue === newValue) ? null : newValue);
};

export interface AccordionGroupProps extends React.HTMLAttributes<HTMLElement> { }

export const AccordionGroup: FC<AccordionGroupProps> = ({ children }) => {
  const name = useId();
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  return (
    <AccordionGroupContext.Provider value={{ name, currentValue, toggle: toggleClick(setCurrentValue) }}>
      {children}
    </AccordionGroupContext.Provider>
  );
}
