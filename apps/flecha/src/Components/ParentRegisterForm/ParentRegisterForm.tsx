import { Title } from '@meu-workspace/safira'
import *as S from './ParentRegisterForm.styles'
import { RegisterProgressBar } from '../RegisterProgressBar/RegisterProgressBar'


export const ParentRegisterForm = () => {

  return(
    <S.ParentRegisterForm>
      <S.ParentRegisterFormContainer>
        <S.TextureContainer />
        <S.FlechaIcon src="/flecha_logo_60op.svg"/>
        <S.ParentRegisterFormTitle>Bem-vindo Membro!</S.ParentRegisterFormTitle>
        <S.ParentRegisterFormSubtitle>Por favor, preencha com as informações necessárias para a criação da conta.</S.ParentRegisterFormSubtitle>
        <RegisterProgressBar />
      </S.ParentRegisterFormContainer>
    </S.ParentRegisterForm>
  )

}