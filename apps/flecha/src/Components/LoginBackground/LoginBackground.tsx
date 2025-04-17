import React from 'react';
import * as S from './LoginBackground.styles';

export const LoginBackground = ({children}: any) => {

  return(
    <>
      <S.LoginBackgroundContainer/>
        {children}
    </>


  )

}