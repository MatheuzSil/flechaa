import { useState } from 'react';
import * as S from './SearchListResult.styles';
import { ModalCard } from '../ModalCard/ModalCard';

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
            <S.CardImage src={result.imageUrl} />
            <S.CardName>{result.name}</S.CardName>
            <S.CardAgeAndClass>
              0{result.age} ANOS - {result.class}
            </S.CardAgeAndClass>
          </S.CardInfo>
          <S.CardButton onClick={(() => setModalCardOpen(true))}>Ver Mais</S.CardButton>
          {modalCardOpen && <ModalCard onClose={() => setModalCardOpen(false)} />}   
        </S.CardContainer>
      ))}
    </>
  );
}
