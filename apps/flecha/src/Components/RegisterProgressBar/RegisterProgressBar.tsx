import * as S from './RegisterProgressBar.styles'

export const RegisterProgressBar = () => {

  return(
    <>
      <S.FormProgressBarContainer>
        <S.FormProgressBarWrapper>
          <S.FormProgressBarLabel>1. Informações de cadastro</S.FormProgressBarLabel>
          <S.FormProgressBar />
        </S.FormProgressBarWrapper>
        <S.FormProgressBarWrapper>
          <S.FormProgressBarLabel>1. Informações de contato</S.FormProgressBarLabel>
          <S.FormProgressBar />
        </S.FormProgressBarWrapper>
        <S.FormProgressBarWrapper>
          <S.FormProgressBarLabel>1. Informações para verificação</S.FormProgressBarLabel>
          <S.FormProgressBar />
        </S.FormProgressBarWrapper>
      </S.FormProgressBarContainer>
    </>
  )

}