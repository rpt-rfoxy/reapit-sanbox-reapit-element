import { styled } from '@linaria/react'

export const ElAccordionHeader = styled.summary`
  display: flex;
  padding: var(--spacing-3) var(--spacing-none);
  align-items: center;
  gap: var(--spacing-3);
  align-self: stretch;
  justify-content: space-between;
  border-bottom: var(--border-default) solid var(--outline-default);
  
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing-sm);

  &:after {
    cursor: pointer;
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M10 13.7534C9.77862 13.7547 9.56583 13.6678 9.40865 13.5118L3.5783 7.67843C3.36703 7.46705 3.28452 7.15895 3.36185 6.8702C3.43918 6.58144 3.66461 6.3559 3.95321 6.27853C4.24182 6.20116 4.54975 6.28371 4.76103 6.4951L10 11.7451L15.239 6.4951C15.5656 6.16833 16.0951 6.16833 16.4217 6.4951C16.7483 6.82186 16.7483 7.35166 16.4217 7.67843L10.5914 13.5118C10.4342 13.6678 10.2214 13.7547 10 13.7534Z' fill='%23607890'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }
`


export const ElAccordion = styled.details`
  display: flex;
  padding: var(--spacing-none);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-none);
  align-self: stretch;

  &[open]{
    border-bottom: var(--border-default) solid var(--outline-default);
    ${ElAccordionHeader}{
      border: none;
      &:after{
        transform: rotate(180deg);
      }
    }
  }
`
export const ElAccordionBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-none);
  align-self: stretch;
  padding-bottom: var(--spacing-6);
`
export const ElAccordionContentArea = styled.div`
  display: flex;
  padding: var(--spacing-3);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2);
  align-self: stretch;
`
export const ElAccordionLegend = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: var(--spacing-3);
  flex: 1;
`

