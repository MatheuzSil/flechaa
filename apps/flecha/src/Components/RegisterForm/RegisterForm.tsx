'use client';
import React, { useCallback, useMemo, useState } from 'react';
import * as S from './RegisterForm.styles';
import { Paragraph } from '@meu-workspace/safira';
import useSWRMutation from 'swr/mutation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const register = async (url: any, { arg }: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });
  const data = await response.json();
  if (!response.ok) {
    const error = await response.json();
    throw new Error(data || error.message);
  }
  return data;
};

export const RegisterForm = () => {
  const [name, setName] = useState({
    value: '',
    error: false,
    errorMessage: '',
  });
  const [email, setEmail] = useState({
    value: '',
    error: false,
    errorMessage: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: false,
    errorMessage: '',
  });
  const [errorMessage, setErrorMessage] = useState<any>('');
  const { trigger, isMutating } = useSWRMutation('api/register', register);
  const router = useRouter();

  const onNameChange = useCallback((e: any) => {
    setName({ value: e.target.value, error: false, errorMessage: '' });
  }, []);
  const onEmailChange = useCallback((e: any) => {
    e.target.value === 0
      ? setEmail({ value: '', error: true, errorMessage: 'Email inválido' })
      : setEmail({ value: e.target.value, error: false, errorMessage: '' });
    !e.target.value.includes('@') &&
      setEmail({
        value: e.target.value,
        error: true,
        errorMessage: 'Email inválido',
      });
  }, []);
  const onPasswordChange = useCallback((e: any) => {
    setPassword({ value: e.target.value, error: false, errorMessage: '' });
  }, []);

  const onNameBlur = useCallback(
    (e: any) => {
      if (e.target.value.length === 0) {
        setName({
          value: e.target.value,
          error: true,
          errorMessage: 'Campo obrigatório',
        });
      } else if (e.target.value.split(' ').length > 1) {
        setName({
          value: e.target.value,
          error: true,
          errorMessage: 'Digite apenas o primeiro nome ou apelido',
        });
      } else {
        setName({ value: e.target.value, error: false, errorMessage: '' });
      }
    },
    [name]
  );

  const onPasswordBlur = useCallback(
    (e: any) => {
      if (e.target.value.length === 0 || e.target.value.length < 6) {
        setPassword({
          value: e.target.value,
          error: true,
          errorMessage: 'Campo obrigatório',
        });
      } else {
        setPassword({ value: e.target.value, error: false, errorMessage: '' });
      }
    },
    [password]
  );

  const onRegister = useCallback(async () => {
    const registerData: any = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    await trigger(registerData)
      .then(() => {
        router.push('/');
        console.log('cadastrado com sucesso');
      })
      .catch((error) => {
        setErrorMessage(error.message || 'Erro ao cadastrar');
      });
  }, [name, email, password, trigger]);

  const disabled = useMemo(() => {
    return (
      !name.value ||
      !email.value ||
      !password.value ||
      name.error ||
      email.error ||
      password.error ||
      isMutating
    );
  }, [name, email, password]);

  return (
    <>
      <S.RegisterFormBackground>
        <S.FlechaLogo src="/flecha_logo.svg" alt="" />
        <S.RegisterForm>
          <S.RegisterFormContainer>
            <S.RegisterFormTitle>Bem vindo!</S.RegisterFormTitle>
            <S.RegisterFormSubtitle>
              Por favor, cadastre sua conta abaixo.
            </S.RegisterFormSubtitle>
            <S.RegisterFormContent>
              <S.RegisterFormLabel>Nome</S.RegisterFormLabel>
              <S.RegisterFormInput
                placeholder="Nome"
                label="Nome"
                type="text"
                onChange={onNameChange}
                onBlur={onNameBlur}
                {...name}
              />
              <S.RegisterFormLabel>Email</S.RegisterFormLabel>
              <S.RegisterFormInput
                placeholder="Email"
                label="E-mail"
                type="email"
                onChange={onEmailChange}
                {...email}
              />
              <S.RegisterFormLabel>Senha</S.RegisterFormLabel>
              <S.RegisterFormInput
                placeholder="Senha"
                label="Senha"
                type="password"
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                {...password}
              />
              <S.RegisterFormButton disabled={disabled} onClick={onRegister}>
                Register
              </S.RegisterFormButton>
              <S.Links>
                <S.LinksText>
                  Já é cadastrado?{' '}
                  <Link href="/login">Então entre por aqui!</Link>
                </S.LinksText>
              </S.Links>
            </S.RegisterFormContent>
          </S.RegisterFormContainer>
        </S.RegisterForm>
      </S.RegisterFormBackground>
    </>
  );
};
