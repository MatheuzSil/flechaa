import { CloseIcon, DateIcon, PlusIcon, ResetFieldIcon, SendFillIcon } from 'apps/flecha/public/icons/icon';
import { format, parse, isValid } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import * as S from './CustomInputs.styles';

interface CustomInputsProps {
  type: 'date' | 'add' | 'select-class' | 'select-parent';
  selectedDate?: string | undefined;
  onSelectDate?: (date: string | undefined) => void;

  medicalConditions?: string[];
  onAddItem?: (items: string[] | undefined) => void;

  selectClassItem?: string | undefined;
  onAddClass?: (selectedClass: string | undefined) => void;

  selectParent?: CustomInputSearchResult | undefined;
  onSelectParent?: (selectedParent: CustomInputSearchResult | undefined) => void;
  parentResult?: CustomInputSearchResult[] | [];
  searchParent?: (query: string) => void;
}

export const CustomInputs = ({ type, selectedDate, onSelectDate, medicalConditions, onAddItem, onAddClass, onSelectParent, parentResult, searchParent }: CustomInputsProps) => {

  // Date Input
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedDate ?? '');

 const handleCalendarSelect = (date: Date | undefined) => {
    if (date) {
      const formatted = format(date, 'dd/MM/yyyy');
      onSelectDate?.(formatted);
      setInputValue(formatted);
      setOpen(false);
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);
  };

  const handleDateInputBlur = () => {
    const numeric = inputValue.replace(/\D/g, '');

    if (numeric.length === 8) {
      const day = numeric.slice(0, 2);
      const month = numeric.slice(2, 4);
      const year = numeric.slice(4);

      const formatted = `${day}/${month}/${year}`;
      const parsed: Date | string = parse(formatted, 'dd/MM/yyyy', new Date());

      if (isValid(parsed)) {
        onSelectDate?.(formatted);
        setInputValue(formatted);
      } else {
        clearDateInput();
      }
    } else {
      clearDateInput();
    }
  };

  const clearDateInput = () => {
    setInputValue('');
    onSelectDate?.(undefined);
  };

  // Add Input
  const [showDropdown, setShowDropdown] = useState(false);
  const [additionInput, setAdditionInput] = useState('');

  const handleAddition = () => {
    const trimmed = additionInput.trim();
    if (!trimmed || !onAddItem) return;

    const updated = [...(medicalConditions ?? []), trimmed];
    setShowDropdown(false);
    onAddItem(updated);
    setAdditionInput('');
  };

  const clearAddInput = () => {
    onAddItem?.(undefined)
  }

  // Select Class
  const classesList = ['Juniores', 'Jardim 1', 'Jardim 2', 'Pré Primário', 'Adolescentes', 'Primários'];
  const [showClassesList, setShowClassesList] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');

  const showClasses = () => {
    return (
      <S.SelectClassListWrapper>
        <S.SelectClassList>
          {classesList.map((c) => (
            <S.ClassListItem key={c} onClick={() => {handleSelectClass(c)}}>
              {c}
            </S.ClassListItem>
          ))}
        </S.SelectClassList>
      </S.SelectClassListWrapper>
    );
  };

  const handleSelectClass = (c: string) => {
    setShowClassesList(false);
    setSelectedClass(c);
    onAddClass?.(c);
  }

  // Select Parent
  const [showParentList, setShowParentList] = useState(false)
  const [selectedParent, setSelectedParent] = useState<CustomInputSearchResult | undefined>();
  const [query, setQuery] = useState('');

  const handleSelectParent = (parent: CustomInputSearchResult) => {
    setShowParentList(false);
    setSelectedParent(parent);
    onSelectParent?.(parent);
  }

  useEffect(() => {
    if (searchParent && query.trim() !== '') {
      searchParent(query);
    }
  }, [query]);


  //Parent Input

  const onParentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setShowParentList(true);
    setQuery(raw);
    if (searchParent) {
      searchParent(raw);
    }
  };

  const showParentResults = () => {
    return (
      <S.SelectClassListWrapper>
        <S.SelectClassList>
          {parentResult!.length > 0 ? parentResult?.map((p) => (
            <S.ClassListItem key={p.parentName} onClick={() => {handleSelectParent(p)}}>
              <img src={p.imgUrl} alt="" />
              <span>{p.parentName}</span>
            </S.ClassListItem>
          )) : (
            <S.ClassListItem>
              <span>Nenhum Responsável Pesquisado</span>
            </S.ClassListItem>
          )}
        </S.SelectClassList>
      </S.SelectClassListWrapper>
    );
  };

  const clearSelectedParent = () => {
    setShowParentList(false);
    setSelectedParent(undefined);
    onSelectParent?.(undefined)
  }

  switch (type) {
    case 'date':
      return (
        <S.CustomInputsWrapper>
          <input
            type="text"
            value={inputValue}
            onChange={handleDateInputChange}
            onBlur={handleDateInputBlur}
            placeholder="dd/mm/yyyy"
          />
          <S.IconsContainer>
            <ResetFieldIcon onClick={clearDateInput} />
            <DateIcon onClick={() => setOpen(!open)} />
          </S.IconsContainer>
          {open && (
            <S.CalendarPopup>
              <DayPicker
                mode="single"
                selected={selectedDate ? parse(selectedDate, 'dd/MM/yyyy', new Date()) : undefined}
                onSelect={handleCalendarSelect}
                weekStartsOn={1}
              />
            </S.CalendarPopup>
          )}
        </S.CustomInputsWrapper>
      );
    
    case 'select-class':
      return (
        <>
          <S.CustomInputsWrapper>
            <input type="text" readOnly placeholder="Nenhuma" value={selectedClass}  />
            <S.IconsContainer>
              <S.RotatableSelectIcon onClick={() => setShowClassesList(!showClassesList)} rotated={showClassesList} />
            </S.IconsContainer>
          </S.CustomInputsWrapper>
          {showClassesList && showClasses()}
        </>
      );

    case 'select-parent':
      return (
        <>
          <S.CustomInputsWrapper>
            {selectedParent ? (
              <S.SelectedParentContainer>
                <img src={selectedParent.imgUrl} alt="" />
                <span>{selectedParent.parentName}</span>
              </S.SelectedParentContainer>
            ) : (
              <input type="text" placeholder="Nenhuma" value={query} onChange={onParentInputChange}  />
            )}
            <S.IconsContainer>
              <ResetFieldIcon onClick={clearSelectedParent} />
              <S.RotatableSelectIcon onClick={() => setShowParentList(!showParentList)} rotated={showParentList} />
            </S.IconsContainer>
          </S.CustomInputsWrapper>
          {showParentList && showParentResults()}
        </>
      );

    case 'add':
      return (
        <>
          <S.CustomInputsWrapper>
            <input
              type="text"
              readOnly
              placeholder="Nenhuma"
              value={medicalConditions?.join(', ') ?? ''}
            />
            <S.IconsContainer>
              <ResetFieldIcon onClick={clearAddInput} />
              {showDropdown ? <CloseIcon onClick={() => setShowDropdown(false)} /> : <PlusIcon onClick={() => setShowDropdown(true)} /> }
            </S.IconsContainer>
          </S.CustomInputsWrapper>

          {showDropdown && (
            <S.CustomInputsWrapper>
              <input
                type="text"
                placeholder="Ex.: Asma"
                value={additionInput}
                onChange={(e) => setAdditionInput(e.target.value)}
              />
              <SendFillIcon onClick={handleAddition} />
            </S.CustomInputsWrapper>
          )}
        </>
      );
  }
};
