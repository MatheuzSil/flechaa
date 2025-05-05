import { useState } from 'react';
import * as S from './SearchListResult.styles';
import { ModalCard } from '../../Containers/ModalCard/ModalCard';

interface SearchListResultProps {
  results: searchResultObject[];
}

export default function SearchListResult(props: SearchListResultProps) {
  const [ modalCardOpen, setModalCardOpen ] = useState(false);
  const [selectedChild, setSelectedChild] = useState<searchResultObject | null>(null);



  return (
    <>
      {props.results.map((result) => (
        <S.CardContainer key={result.id}>
          <S.CardInfo>
            <S.CardImage src="/icons/profile_placeholder.svg" />
            <S.CardName>{result.name}</S.CardName>
            <S.CardAgeAndClass>
              0{result.age} ANOS - Turma A
            </S.CardAgeAndClass>
          </S.CardInfo>
          <S.CardButton onClick={() => setSelectedChild(result)}>Ver Mais</S.CardButton>
        </S.CardContainer>
      ))}
      {selectedChild && <ModalCard childInfo={selectedChild} onClose={() => setSelectedChild(null)} />}   
    </>
  );
}
