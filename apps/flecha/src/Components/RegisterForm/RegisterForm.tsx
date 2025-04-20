'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './RegisterForm.styles';
import useSWRMutation from 'swr/mutation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '../../hooks/useToast';
import { useLoadingStore } from '../../store/store';

const register = async (url: any, { arg }: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.warn('Failed to parse JSON:', error);
    data = null;
  }

  if (!response.ok) {
    const error = new Error(data?.error || 'Erro ao cadastrar') as any;
    error.response = response;
    error.data = data;
    throw error;
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

  const { showError, showSuccess} = useToast();
  const { trigger, isMutating } = useSWRMutation('api/register', register);
  const router = useRouter();

  const activateLoadAnimation = useLoadingStore(
    (state) => state.activateLoadAnimation
  );
  const deactivateLoadAnimation = useLoadingStore(
    (state) => state.deactivateLoadAnimation
  );

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

    activateLoadAnimation();

    try {
      await trigger(registerData);
      showSuccess('Cadastro realizado com sucesso!');
      router.push('/');
    } catch (error: any) {
      showError(error.data?.error || error.message || 'Erro ao cadastrar');
    } finally {
      deactivateLoadAnimation();
    }
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
  }, [name, email, password, isMutating]);

  return (
    <>
      <S.RegisterFormBackground>
        <S.FlechaLogo src="/flecha_logo.svg" alt="" unselectable="on" />
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
                autoComplete="name"
                name="name"
              />
              <S.RegisterFormLabel>Email</S.RegisterFormLabel>
              <S.RegisterFormInput
                placeholder="Email"
                label="E-mail"
                type="email"
                onChange={onEmailChange}
                {...email}
                autoComplete="email"
                name="email"
              />
              <S.RegisterFormLabel>Senha</S.RegisterFormLabel>
              <S.RegisterFormInput
                placeholder="Senha"
                label="Senha"
                type="password"
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                {...password}
                autoComplete="password"
                name="password"
              />
              <S.RegisterFormButton disabled={disabled} onClick={onRegister}>
                Cadastrar
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
