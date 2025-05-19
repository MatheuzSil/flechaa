import { Title } from '@meu-workspace/safira'
import *as S from './ParentRegisterForm.styles'
import { RegisterProgressBar } from '../RegisterProgressBar/RegisterProgressBar'
import { ParentRegisterInputs } from '../ParentRegisterInputs/ParentRegisterInputs'
import { GoArrowRight } from "react-icons/go";


export const ParentRegisterForm = () => {

  return(
    <S.ParentRegisterForm>
      <S.ParentRegisterFormContainer>
        <S.TextureContainer />
        <S.FlechaIcon src="/flecha_logo_60op.svg"/>
        <S.ParentRegisterFormTitle>Bem-vindo Membro!</S.ParentRegisterFormTitle>
        <S.ParentRegisterFormSubtitle>Por favor, preencha com as informações necessárias para a criação da conta.</S.ParentRegisterFormSubtitle>
        <RegisterProgressBar />
        <ParentRegisterInputs />
        <S.ContinueButton><GoArrowRight size={40}/></S.ContinueButton>
      </S.ParentRegisterFormContainer>
    </S.ParentRegisterForm>
  )

}