import { Paragraph } from 'libs/safira/src/lib/Paragraph/Paragraph.styles';
import * as S from './ParentLoginForm.styles';
import { useCallback, useState } from 'react';
import { useLoadingStore } from '../../store/store';
import { useToast } from '../../hooks/useToast';
import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/navigation';

const parentLogin = async (url: any, { arg }: any) => {
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
    const error = new Error(data?.error || 'Erro ao realizar login') as any;
    error.response = response;
    error.data = data;
    throw error;
  }

  return data;
}
   

export const ParentLoginForm = () => {
  // State for email and password
  const [email, setEmail] = useState({value: '', error: false, errorMessage: ''});
  const [password, setPassword] = useState({value: '', error: false, errorMessage: ''});

  // Function to handle login
  const { trigger, isMutating } = useSWRMutation('api/parent-login', parentLogin);

    // Router
    const router = useRouter();
    
    //Activate and deactivate loading animation
    const activateLoadAnimation = useLoadingStore(
      (state) => state.activateLoadAnimation
    );
    const deactivateLoadAnimation = useLoadingStore(
      (state) => state.deactivateLoadAnimation
    );

    // Toast
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
        router.push('/dashboard');
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
  
    const isDisabled = !email.value || !password.value || email.error || password.error || isMutating;

  return(
    <>
      <S.ParentLoginForm>
        <S.ParentLoginFormContainer>
          <S.TextureContainer />
          <S.FlechaIcon src="/flecha_logo_60op.svg"/>
          <S.ParentLoginFormTitle>A paz do Senhor, Membro!</S.ParentLoginFormTitle>
          <S.ParentLoginFormSubtitle>Por favor, faça o login para acessar sua conta.</S.ParentLoginFormSubtitle>
          <S.ParentLoginInputsContainer>
            <S.ParentLoginInputsWrapper>
              <S.ParentLoginInputLabel>E-mail</S.ParentLoginInputLabel>
              <S.ParentLoginInput
                placeholder="Email"
                label="E-mail"
                type="email"
                onChange={onEmailChange}

                autoComplete="email"
                name="email"
                />
              <S.ParentLoginInputLabel>Senha</S.ParentLoginInputLabel>
              <S.ParentLoginInput
                placeholder="Senha"
                label="Senha"
                type="password"
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                autoComplete="current-password"
                name="password"
                />
            </S.ParentLoginInputsWrapper>
          </S.ParentLoginInputsContainer>
          <S.ParentLoginButton onClick={onLogin} disabled={isDisabled}>Efetuar Login</S.ParentLoginButton>
          <S.Links>
            <S.LinksText>
              Não possui uma conta?{' '}
              <S.Link href="/cadastrar-pais">Faça seu cadastro aqui!</S.Link>
            </S.LinksText>
          </S.Links>
        </S.ParentLoginFormContainer>
      </S.ParentLoginForm>
    </>
  )

}