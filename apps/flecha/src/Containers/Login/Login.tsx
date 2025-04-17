import { LoginForm } from "../../Components/LoginForm/LoginForm"
import * as S from './Login.styles'


export const Login = () => {
  return (
    <>
      <S.FlechaIconContainer>
        <S.FlechaIcon src="/flecha_logo.svg" />
      </S.FlechaIconContainer>
      <LoginForm />
    </>
  );
};
