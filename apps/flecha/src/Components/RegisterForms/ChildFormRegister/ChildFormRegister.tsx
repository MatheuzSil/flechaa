import * as S from './ChildFormRegister.styles'
import { CustomInputs } from '../../CustomInputs/CustomInputs'
import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

export const ChildFormRegister = () => {
  const [childName, setChildName] = useState<string>('');
  const [childAge, setChildAge] = useState<Number>(0);
  const [birthDate, setBirthDate] = useState<string | undefined>(undefined);
  const [additions, setAdditions] = useState<string[] | undefined>(undefined);
  const [selectedClass, setSelectedClass] = useState<string| undefined>(undefined);
  const [selectedParent, setSelectedParent] = useState<CustomInputSearchResult | undefined>(undefined);
  const [parentResult, setParentResult] = useState<CustomInputSearchResult[] | []>([]);
  const [isPcd, setIsPcd] = useState<boolean>(false);
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  
  useEffect(() => {
    console.log(isPcd, termsAndConditions);
  }, [isPcd, termsAndConditions])

  const stringIntoIntergerConverter = (value: string) => {
    const age = Number.parseInt(value);
    if(isNaN(age)) {
      setChildAge(0);
    } else {
      setChildAge(age);
    }
  }
  
  // example function and array just to see if stuff works
  const parents = [
    {
      imgUrl: "/icons/profile_placeholder.svg",
      parentName: "Julio Augusto"
    },
    {
      imgUrl: "/icons/profile_placeholder.svg",
      parentName: "Juliana Prado"
    }
  ]
  const searchParent = (query: string) => {
    if (query.trim() === '') {
      setParentResult([]); // clear if query is empty
      return;
    }

    // perform your actual search logic
    const filtered = parents.filter(p =>
      p.parentName.toLowerCase().includes(query.toLowerCase())
    );
    setParentResult(filtered);
  };
  
  // keep this
  const debouncedParentSearch = useMemo(() => 
    debounce((query: string) => {
      searchParent(query);
    }, 300), []
  );

  useEffect(() => {
    return () => {
      debouncedParentSearch.cancel();
    };
  }, []);

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
              <CustomInputs type='select-parent' selectParent={selectedParent} onSelectParent={setSelectedParent} parentResult={parentResult} searchParent={debouncedParentSearch}  />
              <S.ChildFormSubtitle>Adicionar Condição Médica</S.ChildFormSubtitle>
              <CustomInputs type='add' additions={additions} onAddItem={setAdditions} />
            </S.Wrapper>
          </S.ChildFormContainer>
          <S.TermsAndConditionsContainer>
            <S.CheckboxContainer>
              <S.HiddenCheckbox checked={isPcd} onChange={() => setIsPcd(!isPcd)} id='isPcd' />
              <S.StyledCheckbox checked={isPcd} />
              <S.CheckboxLabel htmlFor="isPcd">A criança é PCD?</S.CheckboxLabel>
            </S.CheckboxContainer>

            <S.CheckboxContainer>
              <S.HiddenCheckbox checked={termsAndConditions} onClick={() => setTermsAndConditions(!termsAndConditions)} type='checkbox' id='termsAndConditions' required />
              <S.StyledCheckbox checked={termsAndConditions} />
              <S.CheckboxLabel htmlFor="termsAndConditions">Aceita os termos e condições?</S.CheckboxLabel>
            </S.CheckboxContainer>
          </S.TermsAndConditionsContainer>
          <S.ChildFormButttonContainer>
            <S.ChildFormButton>Cadastrar <S.ArrowButtonIconContainer /></S.ChildFormButton>
          </S.ChildFormButttonContainer>
        </S.ChildFormRegisterContainer>
      </S.ChildFormRegister>
    </>
  )
}