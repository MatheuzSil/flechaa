"use client"
import React, { useCallback, useMemo, useState } from 'react';
import *as S from './RegisterForm.styles';
import { Paragraph } from '@meu-workspace/safira';
import Link from 'next/link';

export const RegisterForm = () => {
  const [name, setName] = useState({ value: '', error: false, errorMessage: '' });
  const [email, setEmail] = useState({ value: '', error: false, errorMessage: '' });
  const [password, setPassword] = useState({ value: '', error: false, errorMessage: '' });
  const [errorMessage, setErrorMessage] = useState<any>('');

  const onNameChange = useCallback((e:any) => { setName({ value: e.target.value, error: false, errorMessage: '' })}, [])
  const onEmailChange = useCallback((e:any) => { 
    e.target.value === 0 
    ? setEmail({ value: '', error: true, errorMessage: 'Email inválido' })
    : setEmail({ value: e.target.value, error: false, errorMessage: '' })
    !e.target.value.includes('@') && setEmail({ value: e.target.value, error: true, errorMessage: 'Email inválido' })
  }, [])
  const onPasswordChange = useCallback((e:any) => { setPassword({ value: e.target.value, error: false, errorMessage: '' })}, [])

  const onNameBlur = useCallback((e: any) => {
    if (e.target.value.length === 0) {
      setName({ value: e.target.value, error: true, errorMessage: 'Campo obrigatório' })
    } else if (e.target.value.split(' ').length > 1) {
      setName({ value: e.target.value, error: true, errorMessage: 'Digite apenas o primeiro nome ou apelido' })
    } else {
      setName({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, [name]);

  const onPasswordBlur = useCallback((e: any) => {
    if (e.target.value.length === 0 || e.target.value.length < 6) {
      setPassword({ value: e.target.value, error: true, errorMessage: 'Campo obrigatório' })
    } else {
      setPassword({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, [password]);

  const disabled = useMemo(() => {
    return !name.value || !email.value || !password.value || name.error || email.error || password.error
  }, [name, email, password])


  return (
    <>
      <S.RegisterFormBackground>
        <S.RegisterForm>
          <S.RegisterFormContainer>
            <S.RegisterFormTitleContainer>
              <S.RegisterFormTitle>Cadastrar-se</S.RegisterFormTitle>
            </S.RegisterFormTitleContainer>
            <S.RegisterFormContent>
              <S.RegisterFormLabel>Nome</S.RegisterFormLabel>
              <S.RegisterFormInput placeholder='Nome' label="Nome" type='text' onChange={onNameChange} onBlur={onNameBlur} {...name}  />
              <S.RegisterFormLabel>E-mail</S.RegisterFormLabel>
              <S.RegisterFormInput placeholder='Email' label="E-mail" type='email' onChange={onEmailChange} {...email}  />
              <S.RegisterFormLabel>Senha</S.RegisterFormLabel>
              <S.RegisterFormInput placeholder='Senha' label="Senha" type='password' onChange={onPasswordChange} onBlur={onPasswordBlur} {...password} />
              <S.RegisterFormButton disabled={disabled} >Register</S.RegisterFormButton>
              <S.Links >
                <Paragraph>Veja aqui os <Link href="/termos-de-uso">termos de uso</Link> e a <Link href="/politica-de-privacidade">política de privacidade</Link></Paragraph>
                <Paragraph>Já é cadastrado?  <Link href="/login" >Então entre por aqui!</Link></Paragraph>
              </S.Links>
            </S.RegisterFormContent>
          </S.RegisterFormContainer>
        </S.RegisterForm>
      </S.RegisterFormBackground>
    </>
  );
}