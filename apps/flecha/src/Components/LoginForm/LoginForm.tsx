import React from 'react';
import * as S from './LoginForm.styles';
import { Paragraph } from '@meu-workspace/safira';
import Link from 'next/link';

export const LoginForm = () => {

  return(
    <>
      <S.LoginFormBackground>
          <S.LoginFormContainer>
            <S.LoginTitleContainer>
              <S.LoginFormTitle>Bem vindo!</S.LoginFormTitle>
              <S.LoginFormSubtitle>
                  Por favor, cadastre sua conta abaixo.
              </S.LoginFormSubtitle>
            </S.LoginTitleContainer>
            <S.LoginFormContent>
              <S.LoginFormLabel>E-mail</S.LoginFormLabel>
              <S.LoginFormInput placeholder='Email' label="E-mail" type='email'/>
              <S.LoginFormLabel>Senha</S.LoginFormLabel>
              <S.LoginFormInput placeholder='Senha' label="Senha" type='password' />
              <S.LoginFormButton>Login</S.LoginFormButton>
              <S.Links >
                <Paragraph>Veja aqui os <Link href="/termos-de-uso">termos de uso</Link> e a <Link href="/politica-de-privacidade">política de privacidade</Link></Paragraph>
              </S.Links>
            </S.LoginFormContent>
          </S.LoginFormContainer>
      </S.LoginFormBackground>
    </>

  )

}