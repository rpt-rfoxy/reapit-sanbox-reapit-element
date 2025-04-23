import React, { createContext, useContext } from "react";

interface AccordionGroupContext {
  toggle: (newValue: string) => void,
  currentValue: string | null,
  name: string
}

export const AccordionGroupContext = createContext<AccordionGroupContext>({
  toggle: (newValue: string) => newValue,
  name: '',
  currentValue: null
});

export const useAccordionGroup = () => useContext(AccordionGroupContext)

