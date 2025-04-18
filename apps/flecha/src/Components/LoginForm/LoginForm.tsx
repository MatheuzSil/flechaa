import React from 'react';
import * as S from './LoginForm.styles';
import { Paragraph } from '@meu-workspace/safira';
import Link from 'next/link';

export const LoginForm = () => {

  return(
    <>
      <S.FlechaIconContainer>
        <S.FlechaIcon src="/flecha_logo.svg" />
      </S.FlechaIconContainer>
      <S.LoginFormBackground>
          <S.LoginFormContainer>
            <S.LoginTitleContainer>
              <S.LoginFormTitle>Bem vindo de volta!</S.LoginFormTitle>
              <S.LoginFormSubtitle>
                  Por favor, coloque os dados da sua conta.
              </S.LoginFormSubtitle>
            </S.LoginTitleContainer>
            <S.LoginFormContent>
              <S.LoginFormLabel>E-mail</S.LoginFormLabel>
              <S.LoginFormInput placeholder='Email' label="E-mail" type='email'/>
              <S.LoginFormLabel>Senha</S.LoginFormLabel>
              <S.LoginFormInput placeholder='Senha' label="Senha" type='password' />
              <S.LoginFormButton>Login</S.LoginFormButton>
              <S.Links >
                <S.LinksText>Não tem uma conta?{' '}
                  <Link href="/cadastrar">Cadastre-se aqui!</Link>
                </S.LinksText>
              </S.Links>
            </S.LoginFormContent>
          </S.LoginFormContainer>
      </S.LoginFormBackground>
    </>

  )

}