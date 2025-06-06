// libs
import * as S from './ChildFormRegister.styles';
import debounce from 'lodash.debounce';
import useSWRMutation from 'swr/mutation';

// Components
import { CustomInputs } from '../../CustomInputs/CustomInputs';

// Hooks
import { useEffect, useMemo, useState } from 'react';
import { useToast } from 'apps/flecha/src/hooks/useToast';
import { useLoadingStore } from 'apps/flecha/src/store/store';
import { useSearchParentResult } from 'apps/flecha/src/graphql/hooks/useSearchParentResult';
import { generateQRCodeBase64 } from 'apps/flecha/src/utils/generateQRCode';
import { sendWhatsappMessageToApi } from 'apps/flecha/src/utils/sendWhatsappMessageToApi';

  type ChildRegisterPayload = {
    childName: string;
    childAge: number;
    birthDate?: string;
    medicalConditions?: string[];
    selectedClass?: string;
    selectedParent?: CustomInputSearchResult;
    isPcd: boolean;
  };

 const childRegister = async (url: any, { arg }: {arg: ChildRegisterPayload}) => {
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
      const error = new Error(data?.error || 'Erro ao cadastrar criança') as any;
      error.response = response;
      error.data = data;
      throw error;
    }
    // console.log('Criança cadastrada com sucesso:', data);
    return data;
  };

  const previewQRCode = (base64: string) => {
  const win = window.open();
  if (win) {
    const img = win.document.createElement('img');
    img.src = base64;
    img.style.maxWidth = '100%';
    win.document.body.appendChild(img);
  }
};


export const ChildFormRegister = () => {
  const [childName, setChildName] = useState<string>('');
  const [childAge, setChildAge] = useState<number>(0);
  const [birthDate, setBirthDate] = useState<string | undefined>(undefined);
  const [medicalConditions, setAdditions] = useState<string[] | undefined>(undefined);
  const [selectedClass, setSelectedClass] = useState<string| undefined>(undefined);
  const [selectedParent, setSelectedParent] = useState<CustomInputSearchResult | undefined>(undefined);
  const [isPcd, setIsPcd] = useState<boolean>(false);
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  const { showError, showSuccess } = useToast();
  
  const activateLoadAnimation = useLoadingStore((state) => state.activateLoadAnimation);
  const deactivateLoadAnimation = useLoadingStore((state) => state.deactivateLoadAnimation);
  const { trigger, isMutating } = useSWRMutation('../api/dashboard/childregister', childRegister);
  const { getParentResult, parentResult, loading } = useSearchParentResult();

  const stringIntoIntergerConverter = (value: string) => {
    const age = Number.parseInt(value);
    if(isNaN(age)) {
      setChildAge(0);
    } else {
      setChildAge(age);
    }
  }

  const debouncedParentSearch = useMemo(() => 
    debounce(async (query: string) => {
      await getParentResult({ variables: { query } });
    }, 300), [getParentResult]
  );

  useEffect(() => {
    return () => {
      debouncedParentSearch.cancel();
    };
  }, []);

  const onChildRegister = async () => {
    activateLoadAnimation();

    let conditions = medicalConditions === undefined ? ['Nenhuma'] : medicalConditions;
    
    const data: ChildRegisterPayload =  {
      childName,
      childAge,
      birthDate,
      medicalConditions: conditions,
      selectedClass,
      selectedParent,
      isPcd
    }

    if(!termsAndConditions){
      deactivateLoadAnimation();
      showError("Por favor, aceite os termos e condições!");
      return;
    }

    try {
      const childRegister = await trigger(data);
      showSuccess('Criança cadastrada com sucesso!');

      const childCardUrl = `${window.location.origin}/dashboard/qrcode/crianca/${childRegister?.child.id}`;
      const childQRcode = await generateQRCodeBase64(childCardUrl);
      previewQRCode(childQRcode);
      if (selectedParent?.phone) {
        await sendWhatsappMessageToApi({ 
          message: `Criança cadastrada com sucesso! Nome: ${childName}, Idade: ${childAge}, Turma: ${selectedClass}, Responsável: ${selectedParent?.parentName}`, 
          number: selectedParent.phone, 
          image: childQRcode
        });
      } else {
        showError('Número de telefone do responsável não encontrado.');
      }
    } catch (error: any) {
      showError(error.data?.error || error.message || 'Erro ao cadastrar criança');
    }
    deactivateLoadAnimation();
  }

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
              <S.ChildFormInput type="text" placeholder="Digite o nome da criança" value={childName} onChange={(e: any) => setChildName(e.target.value)} />
              <S.ChildFormSubtitle>Escolher Turma</S.ChildFormSubtitle>
              <CustomInputs type='select-class' selectClassItem={selectedClass} onAddClass={setSelectedClass} />
              <S.ChildFormSubtitle>Data de Nascimento</S.ChildFormSubtitle>
              <CustomInputs type="date" selectedDate={birthDate} onSelectDate={setBirthDate} />
            </S.Wrapper>
            <S.Wrapper>
              <S.ChildFormSubtitle>Idade da Criança</S.ChildFormSubtitle>
              <S.ChildFormInput type="text" placeholder="Digite a idade da criança" value={childAge} onChange={(e: any) => stringIntoIntergerConverter(e.target.value) } />
              <S.ChildFormSubtitle>Selecionar Responsável</S.ChildFormSubtitle>
              <CustomInputs type='select-parent' selectParent={selectedParent} onSelectParent={setSelectedParent} parentResult={parentResult} searchParent={debouncedParentSearch} isLoading={loading} />
              <S.ChildFormSubtitle>Adicionar Condição Médica</S.ChildFormSubtitle>
              <CustomInputs type='add' medicalConditions={medicalConditions} onAddItem={setAdditions} />
            </S.Wrapper>
          </S.ChildFormContainer>
          <S.TermsAndConditionsContainer>
            <S.CheckboxContainer>
              <S.HiddenCheckbox checked={isPcd} onChange={() => setIsPcd(!isPcd)} id='isPcd' />
              <S.StyledCheckbox checked={isPcd} />
              <S.CheckboxLabel htmlFor="isPcd">A criança é PCD?</S.CheckboxLabel>
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <S.HiddenCheckbox checked={termsAndConditions} onChange={() => setTermsAndConditions(!termsAndConditions)} type='checkbox' id='termsAndConditions' required />
              <S.StyledCheckbox checked={termsAndConditions} />
              <S.CheckboxLabel htmlFor="termsAndConditions">Aceita os termos e condições?</S.CheckboxLabel>
            </S.CheckboxContainer>
          </S.TermsAndConditionsContainer>
          <S.ChildFormButttonContainer>
            <S.ChildFormButton onClick={onChildRegister}>Cadastrar <S.ArrowButtonIconContainer /></S.ChildFormButton>
          </S.ChildFormButttonContainer>
        </S.ChildFormRegisterContainer>
      </S.ChildFormRegister>
    </>
  )
}