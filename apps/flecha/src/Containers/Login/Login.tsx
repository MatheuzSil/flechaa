


export const Login = () => {

  return(
    <>
      <S.LoginContainer>
        <S.LoginWrapper>
          <S.LoginTitle>Login</S.LoginTitle>
          <S.LoginForm>
            <S.LoginInput type="text" placeholder="Usuário" />
            <S.LoginInput type="password" placeholder="Senha" />
            <S.LoginButton>Entrar</S.LoginButton>
          </S.LoginForm>
        </S.LoginWrapper>
      </S.LoginContainer>
    </>

  )

}