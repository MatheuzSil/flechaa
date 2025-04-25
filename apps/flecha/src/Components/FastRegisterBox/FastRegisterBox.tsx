import { PersonIcon, PersonsIcon } from 'apps/flecha/public/icons/icon'
import * as S from './FastRegisterBox.styles'



export const FastRegisterBox = () => {

  return(
  <>
    <S.FastRegisterBox>
      <S.FastRegisterBoxContainer>
        <S.FastRegisterBoxTitle>Área do Cadastro Rápido</S.FastRegisterBoxTitle>
        <S.TextAndButtonsContainer>
          <S.FastRegisterBoxText>Quer cadastrar alguém rápidamente? Escolha uma das opções <br/> abaixo e preencha o formulário de forma rápida e fácil! </S.FastRegisterBoxText>
          <S.ButtonsContainer>
            <S.FastRegisterButton><PersonIcon />Cadastrar Criança</S.FastRegisterButton>
            <S.FastRegisterButtonParents><PersonsIcon />Cadastrar Responsável</S.FastRegisterButtonParents>
          </S.ButtonsContainer>
        </S.TextAndButtonsContainer>
      </S.FastRegisterBoxContainer>
    </S.FastRegisterBox>
  </>
  )

}