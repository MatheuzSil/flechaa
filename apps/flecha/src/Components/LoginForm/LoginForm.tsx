import React, { useCallback, useState } from 'react';
import * as S from './LoginForm.styles';
import { Paragraph } from '@meu-workspace/safira';
import Link from 'next/link';
import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/navigation';
import { useLoadingStore } from '../../store/store';
import { useToast } from '../../hooks/useToast';

const login = async (url: any, { arg }: any) => {
  const response = await fetch(url, {
    method: 'PATCH',
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

export const LoginForm = () => {
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
  const { trigger, isMutating } = useSWRMutation('api/login', login);
  const router = useRouter();

  const activateLoadAnimation = useLoadingStore(
    (state) => state.activateLoadAnimation
  );
  const deactivateLoadAnimation = useLoadingStore(
    (state) => state.deactivateLoadAnimation
  );
  const { showError, showSuccess } = useToast();

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

  const onLogin = useCallback(async () => {
    const loginData: any = { email: email.value, password: password.value };
    activateLoadAnimation();
    try {
      const res = await trigger(loginData);
      showSuccess('Login realizado com sucesso!');
      router.push('/');
    } catch (error: any) {
      console.log('Erro ao realizar login:', error);
      showError(error.data?.error || error.message || 'Erro ao realizar login');
      setEmail({
        ...email,
        error: true,
        errorMessage: 'Email ou senha inválidos',
      });
      setPassword({
        ...password,
        error: true,
        errorMessage: 'Email ou senha inválidos',
      });
    } finally {
      deactivateLoadAnimation();
    }
  }, [email, password]);

  return (
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
            <S.LoginFormInput
              placeholder="Email"
              label="E-mail"
              type="email"
              onChange={onEmailChange}
              {...email}
              autoComplete="email"
              name="email"
            />
            <S.LoginFormLabel>Senha</S.LoginFormLabel>
            <S.LoginFormInput
              placeholder="Senha"
              label="Senha"
              type="password"
              onChange={onPasswordChange}
              {...password}
              onBlur={onPasswordBlur}
              name="password"
              autoComplete="current-password"
            />
            <S.LoginFormButton onClick={onLogin}>Login</S.LoginFormButton>
            <S.Links>
              <S.LinksText>
                Não tem uma conta?{' '}
                <Link href="/cadastrar">Cadastre-se aqui!</Link>
              </S.LinksText>
            </S.Links>
          </S.LoginFormContent>
        </S.LoginFormContainer>
      </S.LoginFormBackground>
    </>
  );
};
