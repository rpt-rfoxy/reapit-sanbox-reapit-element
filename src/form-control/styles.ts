import { styled } from '@linaria/react'

export type Variants = "default" | "secondary";

export const ElLabel = styled.label`
  display: inline-flex;
  gap: var(--spacing-1);
  color: var(--comp-label_text-colour-text-secondary);
  font-family: var(--font-xs-regular-family);
  font-size: var(--font-xs-regular-size);
  font-style: normal;
  font-weight: var(--font-xs-regular-weight);
  line-height: var(--font-xs-regular-line_height); 
  letter-spacing: var(--font-xs-regular-letter_spacing);
`

export const ElErrorText = styled.p`
  gap: var(--spacing-1);
  display: none;
  color: var(--comp-input-colour-text-info-error);
  font-family: var(--font-xs-regular-family);
  font-size: var(--font-xs-regular-size);
  font-style: normal;
  font-weight: var(--font-xs-regular-weight);
  line-height: var(--font-xs-regular-line_height);
  letter-spacing: var(--font-xs-regular-letter_spacing);

`

export const ElFormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  &:has(input[data-required='true']){
    label{
      &::after{
        content: "*";
      }
    }
  }
  &:has(input[data-size='medium']), &:has(input[data-size='small']) {
    [role='alert'], [role='article'], label {
      font-family: var(--font-xs-regular-family);
      font-size: var(--font-xs-regular-size);
      font-weight: var(--font-xs-regular-weight);
      line-height: var(--font-xs-regular-line_height); 
      letter-spacing: var(--font-xs-regular-letter_spacing);
    }
    svg {
      width: var(--icon_size-s) !important;
      height: var(--icon_size-s) !important;
    }
  }

  &:has([data-size='large']) {
    [role='alert'], [role='article'], label{
      font-family: var(--font-sm-regular-family);
      font-size: var(--font-sm-regular-size);
      font-weight: var(--font-sm-regular-weight);
      line-height: var(--font-sm-regular-line_height); 
      letter-spacing: var(--font-sm-regular-letter_spacing);
    }
    svg {
      width: var(--icon_size-m) !important;
      height: var(--icon_size-m) !important;
      
    }
  }

  &:has([data-is-error='true']) {
    &:not(:has(input:disabled)):not(:has(input:read-only)) {
      [role='alert']{
        display: inline-flex !important;
      }
      [role='article']{
        display: none !important;
      }
    }
  }


`

export const ElHelperText = styled.p`
  color: var(--comp-input-colour-text-info-helper);
  font-family: var(--font-xs-regular-family);
  font-size: var(--font-xs-regular-size);
  font-style: normal;
  font-weight: var(--font-xs-regular-weight);
  line-height: var(--font-xs-regular-line_height);
  letter-spacing: var(--font-xs-regular-letter_spacing);
  gap: var(--spacing-1);
  display: inline-flex;
  
`
