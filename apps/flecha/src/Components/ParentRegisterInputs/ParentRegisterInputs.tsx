import { useState } from "react"
import * as S from './ParentRegisterInputs.styles'

export const ParentRegisterInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  return(
    <>
      <S.ParentRegisterInputsContainer>
        <S.ParentRegisterInputsWrapper>
          <S.ParentRegisterInputLabel>Nome & Sobrenome</S.ParentRegisterInputLabel>
          <S.ParentRegisterInput placeholder="Digite seu nome completo" value={name}  />

          <S.ParentRegisterInputLabel>Data de nascimento</S.ParentRegisterInputLabel>
          <S.ParentRegisterInput placeholder="Digite seu email" value={email}  />
        </S.ParentRegisterInputsWrapper>

        <S.ParentRegisterInputsWrapper>
          <S.ParentRegisterInputLabel>CPF</S.ParentRegisterInputLabel>
          <S.ParentRegisterInput placeholder="Digite sua senha" value={password} />

          <S.ParentRegisterInputLabel>Telefone</S.ParentRegisterInputLabel>
          <S.ParentRegisterInput placeholder="Confirme a sua senha" value={confirmPassword}  />
        </S.ParentRegisterInputsWrapper>
      </S.ParentRegisterInputsContainer>
    </>

  )

}