import React from 'react';
import * as S from './LoginForm.styles';


export const LoginForm = () => {

  return(
    <>
      <S.LoginFormBackground>
        <S.LoginForm>
          <S.LoginFormContainer>
            <S.LoginFormTitleContainer>
              <S.LoginFormTitle>Login</S.LoginFormTitle>
            </S.LoginFormTitleContainer>
            <S.LoginFormContent>
              <S.LoginFormLabel>E-mail</S.LoginFormLabel>
              <S.LoginFormInput placeholder='Email' label="E-mail" type='email'/>
              <S.LoginFormLabel>Senha</S.LoginFormLabel>
              <S.LoginFormInput placeholder='Senha' label="Senha" type='password' />
              <S.LoginFormButton>Login</S.LoginFormButton>
            </S.LoginFormContent>
          </S.LoginFormContainer>
        </S.LoginForm>
      </S.LoginFormBackground>
    </>

  )

}