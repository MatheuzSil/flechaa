import { useState } from "react"
import * as S from './ParentRegisterInputs.styles'

interface ParentRegisterInputsProps {
  registerPhase: number
}

export const ParentRegisterInputs = ({ registerPhase }: ParentRegisterInputsProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [confirmCpf, setConfirmCpf] = useState('')

  return(
    <>
      { registerPhase == 1 &&
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
      }

      { registerPhase == 2 &&
        <S.ParentRegisterInputsContainer>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Número de celular</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Ex: (19) 99850-4253" value={phone}  />
          </S.ParentRegisterInputsWrapper>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Contato de Emergência</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Pode ser o mesmo que o número de celular" value={emergencyPhone}  />
          </S.ParentRegisterInputsWrapper>
        </S.ParentRegisterInputsContainer>
      }
      { registerPhase == 3 &&
        <S.ParentRegisterInputsContainer>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>CPF</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Digite seu CPF" value={cpf}  />
          </S.ParentRegisterInputsWrapper>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Confirme seu CPF</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Confirme seu CPF" value={confirmCpf}  />
          </S.ParentRegisterInputsWrapper>
        </S.ParentRegisterInputsContainer>
      }
    </>

  )

}