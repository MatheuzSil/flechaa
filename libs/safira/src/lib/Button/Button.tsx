import { forwardRef } from 'react';
import React from 'react';
import * as S from './Button.styles';

export const Button: any = forwardRef(({ label, children, loading, variant, isActive, hideColor, ...props }: any, ref: any) => {
  return (
    <S.Button ref={ref} {...props} $variant={variant} $active={isActive} $hideColor={hideColor}>
      {label}
      {children}
    </S.Button>
  );
});
