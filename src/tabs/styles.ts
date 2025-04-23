import { css } from '@linaria/core';
import { styled } from '@linaria/react'

export type Variants = "default" | "secondary";

// interface ElTabItemProps {
//   "aria-selected": boolean
//   "aria-disabled"?: boolean
//   "data-is-focused": boolean
// }

interface ElTabsProps {
  "data-variant"?: Variants
}


export const elTabItem = css`
  text-decoration: none;
  border: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: var(--spacing-3) 0px;
  align-items: flex-start;
  display: flex;
  
  background: var(--fill-white);
  color: var(--text-secondary);
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-base);
  &:hover{
    border-bottom: var(--border-double) solid var(--outline-dashed);
  }
  &[aria-disabled=true]{
    color: var(--text-placeholder);
    cursor: initial;
    &:hover{
      border-bottom-color: transparent;
    }
  }

  
  &[aria-selected=true] {
    border-bottom: var(--border-double) solid var(--outline-primary);
    color: var(--text-action);
  }
  &[data-is-focused=true] {
    box-shadow: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px var(--purple-300);
  }
`

export const ElTabList = styled.ul`
  outline: none;
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: var(--spacing-7);
  border-bottom: var(--border-default) solid var(--outline-default);
  list-style: none;
  padding: 0;
  margin: 0;

`
export const ElTabItemWrapper = styled.li``

export const ElTabs = styled.section<ElTabsProps>`
  
  &[data-variant="secondary"]{
    ${ElTabList}{
      border-bottom: none;
      gap: var(--spacing-3);
    }
    ${elTabItem}{
      padding: var(--spacing-0) 0px;
      border-bottom: 1px solid transparent;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-3);
      &::after{
        content: "";
        width: 1px;
        height: var(--size-4);
        background: var(--fill-default-light);
      }
      &:hover{
        border-bottom: 1px solid var(--outline-dashed);
      }
      &[aria-disabled=true]{
        color: var(--text-placeholder);
        cursor: initial;
        &:hover{
          border-bottom-color: transparent;
        }
      }

      
      &[aria-selected=true] {
        color: var(--text-primary);
      }
      &[data-is-focused=true] {
        box-shadow: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px var(--purple-300);
      }
    }
    
  }
`