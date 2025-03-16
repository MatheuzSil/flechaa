import React from 'react';
import { useTheme } from 'styled-components';
import { Input } from '../Input/Input'
import * as S from './Field.styles'
import { forwardRef } from 'react';
import { Paragraph } from '@meu-workspace/safira';

export const Field = forwardRef(({ label, style, className, onClick, ...props }: any, ref: any) => {
  const { errorMessage, error, required, ...inputProps } = props;
  const theme: any = useTheme();
  return (
    <S.Field ref={ref} style={style} className={className} type={props.type} label={label} required={required} htmlFor={props.name} error={error} onClick={onClick}>
      <Input {...inputProps} />
      {errorMessage && (
        <S.ErrorContainer>
          <Paragraph>{errorMessage}</Paragraph>
          <S.Arrow />
        </S.ErrorContainer>
      )}
      {props.hint && !props.disabled && <Paragraph>{props.hint}</Paragraph>}
    </S.Field>
  )
})
