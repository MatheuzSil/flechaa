import *as S from './ChildFormRegister.styles'
import { CustomInputs } from '../../CustomInputs/CustomInputs'
import { useState } from 'react';

export const ChildFormRegister = () => {
  const [birthDate, setBirthDate] = useState<Date | undefined>();

  return(
    <>
      <S.ChildFormRegister>
        <S.BlurBall />
        <S.BlurBallSecond />
        <S.ChildFormRegisterContainer>
          <S.TextureContainer />
          <S.ChildFormRegisterTitle>Formulário para Cadastro <br/> de Crianças</S.ChildFormRegisterTitle>
          <S.ChildFormContainer>
            <S.Wrapper>
              <S.ChildFormSubtitle>Nome da Criança</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite o nome da criança" />
              <S.ChildFormSubtitle>Escolher Turma</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Selecionar Turma" />
              <S.ChildFormSubtitle>Data de Nascimento</S.ChildFormSubtitle>
              <CustomInputs type="date" selectedDate={birthDate} onSelectDate={setBirthDate} />
            </S.Wrapper>
            <S.Wrapper>
              <S.ChildFormSubtitle>Idade da Criança</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite a idade da criança" />
              <S.ChildFormSubtitle>Selecionar Responsável</S.ChildFormSubtitle>
              <S.ChildFormInput type="tel" placeholder="Selecione o Responsável" />
              <S.ChildFormSubtitle>Adicionar Condição Médica</S.ChildFormSubtitle>
              <CustomInputs type='add' />
            </S.Wrapper>
          </S.ChildFormContainer>
          <S.ChildFormButttonContainer>
            <S.ChildFormButton>Cadastrar <S.ArrowButtonIconContainer /></S.ChildFormButton>
          </S.ChildFormButttonContainer>
        </S.ChildFormRegisterContainer>
      </S.ChildFormRegister>
    </>
  )
  
}