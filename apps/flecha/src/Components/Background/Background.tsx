import React from 'react';
import * as S from './Background.styles';

export const LoginBackground = ({ children }: any) => {
  return (
    <>
      <S.LoginBackgroundContainer />
      {children}
    </>
  );
};
