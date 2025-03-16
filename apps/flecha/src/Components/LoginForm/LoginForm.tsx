import React from 'react';
import * as S from './LoginForm.styles';


export const LoginForm = () => {

  return(
    <>
      <S.LoginFormContainer>
        <S.LoginForm>
          <S.LoginFormTitle>Login</S.LoginFormTitle>
          <S.LoginFormInput placeholder='Email' />
          <S.LoginFormInput placeholder='Senha' />
          <S.LoginFormButton>Login</S.LoginFormButton>
        </S.LoginForm>
      </S.LoginFormContainer>
    </>

  )

}