import *as S from './ChildFormRegister.styles'


export const ChildFormRegister = () => {

  return(
    <>
      <S.ChildFormRegister>
        <S.ChildFormRegisterContainer>
        <S.BlurBall />
          <S.ChildFormRegisterTitle>Formulário para Cadastro <br/> de Crianças</S.ChildFormRegisterTitle>
          <S.ChildFormRegisterSubtitle>Preencha os dados abaixo para cadastrar uma nova criança</S.ChildFormRegisterSubtitle>
          <S.ChildFormContainer>
            <S.Wrapper>

              <S.ChildFormSubtitle>Nome da Criança</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite o nome da criança" />
              <S.ChildFormSubtitle>Data de Nascimento</S.ChildFormSubtitle>
              <S.ChildFormInput type="date" />
              <S.ChildFormSubtitle>Nome do Responsável</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite o nome do responsável" />
            </S.Wrapper>
            <S.Wrapper>
              <S.ChildFormSubtitle>Telefone do Responsável</S.ChildFormSubtitle>
              <S.ChildFormInput type="tel" placeholder="Digite o telefone do responsável" />
              <S.ChildFormSubtitle>Endereço</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite o endereço" />
              <S.ChildFormSubtitle>Nome da Escola</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite o nome da escola" />
            </S.Wrapper>
          </S.ChildFormContainer>

        </S.ChildFormRegisterContainer>
      </S.ChildFormRegister>
    </>
  )
  
}