"use client"
import React from 'react';
import *as S from './RegisterForm.styles';

export const RegisterForm = () => {
  return (
    <>
      <S.RegisterFormBackground>
        <S.RegisterForm>
          <S.RegisterFormContainer>
            <S.RegisterFormTitleContainer>
              <S.RegisterFormTitle>Register</S.RegisterFormTitle>
            </S.RegisterFormTitleContainer>
            <S.RegisterFormContent>
              <S.RegisterFormLabel>Nome</S.RegisterFormLabel>
              <S.RegisterFormInput placeholder='Nome' label="Nome" type='text'/>
              <S.RegisterFormLabel>E-mail</S.RegisterFormLabel>
              <S.RegisterFormInput placeholder='Email' label="E-mail" type='email'/>
              <S.RegisterFormLabel>Senha</S.RegisterFormLabel>
              <S.RegisterFormInput placeholder='Senha' label="Senha" type='password' />
              <S.RegisterFormButton>Register</S.RegisterFormButton>
            </S.RegisterFormContent>
          </S.RegisterFormContainer>
        </S.RegisterForm>
      </S.RegisterFormBackground>
    </>
  );
}