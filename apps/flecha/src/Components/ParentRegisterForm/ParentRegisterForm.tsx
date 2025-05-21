import * as S from './ParentRegisterForm.styles';

// Components
import { RegisterProgressBar } from '../RegisterProgressBar/RegisterProgressBar';
import { ParentRegisterInputs } from '../ParentRegisterInputs/ParentRegisterInputs';
import { GoArrowRight } from "react-icons/go";
import { TiArrowLeft } from "react-icons/ti";

// Types
import ValidationObject from '../../types/validationObject';

// Hooks
import { useLoadingStore, useParentRegisterPhase } from '../../store/store';
import useSWRMutation from 'swr/mutation';
import { useCallback, useMemo, useState } from 'react';
import { useToast } from '../../hooks/useToast';
import { useRouter } from 'next/navigation';

const parentRegister = async (url: any, { arg }: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.warn('Failed to parse JSON:', error);
    data = null;
  }

  if (!response.ok) {
    const error = new Error(data?.error || 'Erro ao cadastrar') as any;
    error.response = response;
    error.data = data;
    throw error;
  }
  return data;
}

export const ParentRegisterForm = () => {
  // Parent Data
  const [userName, setUserName] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [email, setEmail] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [password, setPassword] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [confirmPassword, setConfirmPassword] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [phone, setPhone] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [emergencyContact, setEmergencyContact] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [cpf, setCpf] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })
  const [confirmCpf, setConfirmCpf] = useState<ValidationObject>({ value: '', error: false, errorMessage: '' })

  // Register Function 
  const { trigger, isMutating } = useSWRMutation('api/parent-register', parentRegister);

  // Toast
  const { showError, showSuccess } = useToast();

  // Router
  const router = useRouter();
  
  // Zustand
  const activateLoadAnimation = useLoadingStore((state) => state.activateLoadAnimation);
  const deactivateLoadAnimation = useLoadingStore((state) => state.deactivateLoadAnimation);

  const phase = useParentRegisterPhase((state) => state.phase);
  const setPhase = useParentRegisterPhase((state) => state.setPhase);

  const nextRegisterPhase = () => {
    if (phase < 3) {
      setPhase(phase + 1);
    }
  }

  const previousRegisterPhase = () => {
    if (phase > 1) {
      setPhase(phase - 1);
    }
  }

  const onParentRegister = useCallback(async () => {
    const parentData : any = {
      name: userName.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      emergencyContact: emergencyContact.value,
      cpf: cpf.value,
    }

    activateLoadAnimation();

    try{
      await trigger(parentData);
      showSuccess('Cadastro realizado com sucesso!');
      router.push('/dashboard-pais');
    }catch (error: any) {
      showError(error.data?.error || error.message || 'Erro ao cadastrar' );
    }finally{
      deactivateLoadAnimation();
    }
    console.log('Parent Data:', parentData);
  }, [userName, email, password, phone, emergencyContact, cpf])

  const disabled = useMemo(() => {
      return (
        !userName.value ||
        !email.value ||
        !password.value ||
        !confirmPassword.value ||
        userName.error ||
        email.error ||
        password.error ||
        confirmPassword.error
      );
  }, [userName, email, password, confirmPassword]);

  const loadSubtitle = () => {
    switch(phase) {
      case 1:
        return "Por favor, preencha com as informações necessárias para a criação da conta."

      case 2:
        return "Preencha com as informações para contato em caso de emergência e de contato."
      
      case 3:
        return "Precisamos dessas informações para verificarmos a sua conta em nossos totens."
    }
  }

  return( 
    <S.ParentRegisterForm>
      <S.ParentRegisterFormContainer>
        <S.BackButton onClick={previousRegisterPhase}><TiArrowLeft size={40}/></S.BackButton>
        <S.TextureContainer />
        <S.FlechaIcon src="/flecha_logo_60op.svg"/>
        <S.ParentRegisterFormTitle>Bem-vindo Membro!</S.ParentRegisterFormTitle>
        <S.ParentRegisterFormSubtitle>
          {loadSubtitle()}
        </S.ParentRegisterFormSubtitle>
        <RegisterProgressBar />
        <ParentRegisterInputs 
          name={{...userName}} setName={setUserName}
          email={{...email}} setEmail={setEmail}
          password={{...password}} setPassword={setPassword}
          confirmPassword={{...confirmPassword}} setConfirmPassword={setConfirmPassword}
          phone={{...phone}} setPhone={setPhone}
          emergencyContact={{...emergencyContact}} setEmergencyContact={setEmergencyContact}
          cpf={{...cpf}} setCpf={setCpf}
          confirmCpf={{...confirmCpf}} setConfirmCpf={setConfirmCpf}
        />
        {phase < 3 && <S.ContinueButton onClick={nextRegisterPhase}><GoArrowRight size={30}/></S.ContinueButton>}
        {phase === 3 && <S.RegisterButton onClick={onParentRegister} disabled={disabled}>Finalizar Cadastro</S.RegisterButton>}
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