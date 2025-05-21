import { Paragraph } from 'libs/safira/src/lib/Paragraph/Paragraph.styles';
import * as S from './ParentLoginForm.styles';


export const ParentLoginForm = () => {

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
                autoComplete="email"
                name="email"
                />
              <S.ParentLoginInputLabel>Senha</S.ParentLoginInputLabel>
              <S.ParentLoginInput
                placeholder="Senha"
                label="Senha"
                type="password"
                autoComplete="current-password"
                name="password"
                />
            </S.ParentLoginInputsWrapper>
          </S.ParentLoginInputsContainer>
          <S.ParentLoginButton>Efetuar Login</S.ParentLoginButton>
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