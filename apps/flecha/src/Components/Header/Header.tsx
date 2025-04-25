import * as S from './Header.styles'
import { ArrowIcon, ProfileIcon } from 'apps/flecha/public/icons/icon'

export const Header = () => {

  return(
    <>
      <S.HeaderContainer>
        <S.HeaderContents>
          <S.HeaderFlechaIcon src="/flecha_logo.svg" alt="Flecha" />
          <S.HeaderProfileContainer>
            <ProfileIcon />
            <S.HeaderProfileName>Nome do Usuário</S.HeaderProfileName>
            <ArrowIcon />
          </S.HeaderProfileContainer>
        </S.HeaderContents>
      </S.HeaderContainer>
    </>
  )

}