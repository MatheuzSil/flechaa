import { Title } from '@meu-workspace/safira'
import *as S from './ParentRegisterForm.styles'
import { RegisterProgressBar } from '../RegisterProgressBar/RegisterProgressBar'
import { ParentRegisterInputs } from '../ParentRegisterInputs/ParentRegisterInputs'
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from 'react';
import { TiArrowLeft } from "react-icons/ti";



export const ParentRegisterForm = () => {
  const [registerPhase, setRegisterPhase] = useState(1)
  const [firstBarValue, setFirstBarValue] = useState(0)
  const [secondBarValue, setSecondBarValue] = useState(0)
  const [thirdBarValue, setThirdBarValue] = useState(0)
  console.log(registerPhase)

  const nextRegisterPhase = () => {
    if (registerPhase < 3) {
      setRegisterPhase(registerPhase + 1)
    }
    
  }

  const previousRegisterPhase = () => {
    if (registerPhase > 1) {
      setRegisterPhase(registerPhase - 1)
    }
  }

  useEffect(() => {
    if (registerPhase === 1) {
      setFirstBarValue(100)
      setSecondBarValue(0)
      setThirdBarValue(0)
    } else if (registerPhase === 2) {
      setFirstBarValue(0)
      setSecondBarValue(100)
      setThirdBarValue(0)
    } else if (registerPhase === 3) {
      setFirstBarValue(0)
      setSecondBarValue(0)
      setThirdBarValue(100)
    }
  }, [registerPhase])


  return( 
    <S.ParentRegisterForm>
      <S.ParentRegisterFormContainer>
        <S.BackButton onClick={previousRegisterPhase}><TiArrowLeft size={40}/></S.BackButton>
        <S.TextureContainer />
        <S.FlechaIcon src="/flecha_logo_60op.svg"/>
        <S.ParentRegisterFormTitle>Bem-vindo Membro!</S.ParentRegisterFormTitle>
        <S.ParentRegisterFormSubtitle>Por favor, preencha com as informações necessárias para a criação da conta.</S.ParentRegisterFormSubtitle>
        <RegisterProgressBar firstBarValue={firstBarValue} secondBarValue={secondBarValue} thirdBarValue={thirdBarValue} />
        <ParentRegisterInputs registerPhase={registerPhase} />
        {registerPhase < 3 && <S.ContinueButton onClick={nextRegisterPhase}><GoArrowRight size={40}/></S.ContinueButton>}
        {registerPhase === 3 && <S.RegisterButton onClick={nextRegisterPhase}>Finalizar Cadastro</S.RegisterButton>}
        <S.Links>
          <S.LinksText>
            Já possui uma conta?{' '}
            <S.Link href="/login-pais">Faça o login aqui!</S.Link>
          </S.LinksText>
        </S.Links>
      </S.ParentRegisterFormContainer>
    </S.ParentRegisterForm>
  )

}