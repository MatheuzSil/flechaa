import { useState } from 'react';
import * as S from './SearchListResult.styles';
import { ModalCard } from '../../Containers/ModalCard/ModalCard';

interface SearchListResultProps {
  results: searchResultObject[];
}

export default function SearchListResult(props: SearchListResultProps) {
  const [ modalCardOpen, setModalCardOpen ] = useState(false);


  return (
    <>
      {props.results.map((result) => (
        <S.CardContainer key={result.id}>
          <S.CardInfo>
            <S.CardImage src="/icons/profile_placehoolder.svg" />
            <S.CardName>{result.name}</S.CardName>
            <S.CardAgeAndClass>
              0{result.age} ANOS - Turma A
            </S.CardAgeAndClass>
          </S.CardInfo>
          <S.CardButton onClick={(() => setModalCardOpen(true))}>Ver Mais</S.CardButton>
          {modalCardOpen && <ModalCard onClose={() => setModalCardOpen(false)} />}   
        </S.CardContainer>
      ))}
    </>
  );
}
