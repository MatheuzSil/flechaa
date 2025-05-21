import { useCallback } from "react"
import * as S from './ParentRegisterInputs.styles'
import { validateEmail, validatePassword } from "../../utils/auth"
import { ParentRegisterInputsProps } from "../../types/parentRegisterInputsProps";
import { useParentRegisterPhase } from "../../store/store";

export const ParentRegisterInputs = ({ name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, phone, setPhone, emergencyContact, setEmergencyContact, cpf, setCpf, confirmCpf, setConfirmCpf }: ParentRegisterInputsProps) => {
  const phase = useParentRegisterPhase((state) => state.phase);

  const onNameChange = useCallback((e: any) => {
      setName({ value: e.target.value, error: false, errorMessage: '' });
    }, []);

  const onEmailChange = useCallback((e: any) => {
    let regexpResult = validateEmail(e.target.value);
    setEmail(regexpResult);
  }, []);

  const onPasswordChange = useCallback((e: any) => {
    let regexpResult = validatePassword(e.target.value);
    setPassword(regexpResult);
  }, []);
  
  const onNameBlur = useCallback(
    (e: any) => {
      if (e.target.value.length === 0) {
        setName({
          value: e.target.value,
          error: true,
          errorMessage: 'Campo obrigatório',
        });
      } else if (e.target.value.split(' ').length > 1) {
        setName({
          value: e.target.value,
          error: true,
          errorMessage: 'Digite apenas o primeiro nome ou apelido',
        });
      } else {
        setName({ value: e.target.value, error: false, errorMessage: '' });
      }
    },
    [name]
  );

  const onPasswordBlur = useCallback(
    (e: any) => {
      let regexpResult = validatePassword(e.target.value);
      setPassword(regexpResult);
    },
    [password]
  );

  const onConfirmPasswordChange = useCallback((e: any) => {
    if (e.target.value.length !== password.value) {
      setConfirmPassword({ value: e.target.value, error: true, errorMessage: 'Senha não confere' });
    } else {
      setConfirmPassword({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, []);

  const onConfirmPasswordBlur = useCallback((e: any) => {
    let regexpResult = validatePassword(e.target.value);
    setConfirmPassword(regexpResult);
  }, [confirmPassword]);

  const onPhoneChange = useCallback((e: any) => {
    if (e.target.value.length < 11) {
      setPhone({ value: e.target.value, error: true, errorMessage: 'Número inválido' });
    } else {
      setPhone({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, []);

  const onEmergencyContactChange = useCallback((e: any) => {
    if (e.target.value.length < 11) {
      setEmergencyContact({ value: e.target.value, error: true, errorMessage: 'Número inválido' });
    } else {
      setEmergencyContact({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, []);

  const onCpfChange = useCallback((e: any) => {
    if (e.target.value.length < 11) {
      setCpf({ value: e.target.value, error: true, errorMessage: 'CPF inválido' });
    } else {
      setCpf({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, []);

  const onConfirmCpfChange = useCallback((e: any) => {
    if (e.target.value.length < 11) {
      setConfirmCpf({ value: e.target.value, error: true, errorMessage: 'CPF inválido' });
    } else {
      setConfirmCpf({ value: e.target.value, error: false, errorMessage: '' });
    }
  }, []);

  switch(phase) {
    case 1:
      return (
        <S.ParentRegisterInputsContainer key={phase}>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Nome & Sobrenome</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Digite seu nome" label="Nome" type="text" {...name} onChange={onNameChange} onBlur={onNameBlur} autoComplete="name" name="name" />

            <S.ParentRegisterInputLabel>Email</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Digite seu email" label="Email" {...email} onChange={onEmailChange} autoComplete="email" name="email" />
          </S.ParentRegisterInputsWrapper>

          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Senha</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Digite sua senha" label="Senha" type="password" {...password}  onChange={onPasswordChange} onBlur={onPasswordBlur} autoComplete="new-password" name="password" />

            <S.ParentRegisterInputLabel>Confirmar Senha</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Confirme a sua senha" label="Confirme a Senha" type="password" {...confirmPassword} onChange={onConfirmPasswordChange} onBlur={onConfirmPasswordBlur} autoComplete="new-password" name="confirmPassword" />
          </S.ParentRegisterInputsWrapper>
        </S.ParentRegisterInputsContainer>
      )

    case 2:
      return (
        <S.ParentRegisterInputsContainer key={phase}>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Número de celular</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Ex: (19) 99850-4253" label="Número de Celular" type="text" {...phone} onChange={onPhoneChange} autoComplete="tel" name="phone" />
          </S.ParentRegisterInputsWrapper>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Contato de Emergência</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Aviso: Pode ser o mesmo que o celular." label="Contato de Emergência" type="text" {...emergencyContact} onChange={onEmergencyContactChange} autoComplete="tel" name="phone" />
          </S.ParentRegisterInputsWrapper>
        </S.ParentRegisterInputsContainer>
      )
    
    case 3:
      return (
        <S.ParentRegisterInputsContainer key={phase}>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>CPF</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Digite seu CPF" label="CPF" type="text" {...cpf} onChange={onCpfChange} autoComplete="cpf" name="cpf" />
          </S.ParentRegisterInputsWrapper>
          <S.ParentRegisterInputsWrapper>
            <S.ParentRegisterInputLabel>Confirme seu CPF</S.ParentRegisterInputLabel>
            <S.ParentRegisterInput placeholder="Confirme seu CPF" label="Confirme seu CPF" type="text" {...confirmCpf} onChange={onConfirmCpfChange} autoComplete="cpf" name="cpf" />
          </S.ParentRegisterInputsWrapper>
        </S.ParentRegisterInputsContainer>
      )
  }
}