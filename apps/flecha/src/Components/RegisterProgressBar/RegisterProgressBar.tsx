import * as S from './RegisterProgressBar.styles'

interface RegisterProgressBarProps {
  firstBarValue: number
  secondBarValue: number
  thirdBarValue: number
}

export const RegisterProgressBar = ({ firstBarValue, secondBarValue, thirdBarValue }: RegisterProgressBarProps) => {


  return(
    <>
      <S.FormProgressBarContainer>
        <S.FormProgressBarWrapper>
          <S.FormProgressBarLabel>1. Informações de cadastro</S.FormProgressBarLabel>
          <S.FormProgressBar value={firstBarValue} />
        </S.FormProgressBarWrapper>
        <S.FormProgressBarWrapper>
          <S.FormProgressBarLabel>1. Informações de contato</S.FormProgressBarLabel>
          <S.FormProgressBar value={secondBarValue} />
        </S.FormProgressBarWrapper>
        <S.FormProgressBarWrapper>
          <S.FormProgressBarLabel>1. Informações para verificação</S.FormProgressBarLabel>
          <S.FormProgressBar value={thirdBarValue} />
        </S.FormProgressBarWrapper>
      </S.FormProgressBarContainer>
    </>
  )

}