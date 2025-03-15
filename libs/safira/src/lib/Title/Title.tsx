"use client"
import React from 'react';
import * as S from './Title.styles';

export const Title = ({ text, children, variant = "h1", ...props}: any) => {

  return(
    <S.Title {...props} variant={variant}>{text}{children}</S.Title>
  )
}
