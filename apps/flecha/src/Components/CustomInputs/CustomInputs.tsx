import { DateIcon, PlusIcon, ResetFieldIcon } from 'apps/flecha/public/icons/icon';
import * as S from './CustomInputs.styles';
import { format, parse, isValid } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import 'react-day-picker/dist/style.css';

interface CustomInputsProps {
  type: 'date' | 'add';
  selectedDate?: Date | undefined;
  onSelectDate?: (date: Date | undefined) => void;
}

export const CustomInputs = ({ type, selectedDate, onSelectDate }: CustomInputsProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''
  );

  const handleCalendarSelect = (date: Date | undefined) => {
    if (date) {
      onSelectDate?.(date);
      setInputValue(format(date, 'dd/MM/yyyy'));
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
      const parsed = parse(formatted, 'dd/MM/yyyy', new Date());

      if (isValid(parsed)) {
        onSelectDate?.(parsed);
        setInputValue(formatted);
      } else {
        onSelectDate?.(undefined);
      }
    }
  };

  const clearDateInput = () => {
    setInputValue('');
    onSelectDate?.(undefined);
  };

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
                selected={selectedDate}
                onSelect={handleCalendarSelect}
                weekStartsOn={1}
              />
            </S.CalendarPopup>
          )}
        </S.CustomInputsWrapper>
      );

    case 'add':
      return (
        <S.CustomInputsWrapper>
          <input type="text" placeholder="Nenhuma" />
          <S.IconsContainer>
            <PlusIcon />
          </S.IconsContainer>
        </S.CustomInputsWrapper>
      );
  }
};
