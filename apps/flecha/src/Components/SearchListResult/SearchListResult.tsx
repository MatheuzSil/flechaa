import { useEffect, useState } from 'react';
import * as S from './SearchListResult.styles';
import { ModalCard } from '../../Containers/ModalCard/ModalCard';

interface SearchListResultProps {
  results: searchResultObject[];
  preloadedresult?: preloadedSearchResult | null;
}

export default function SearchListResult(props: SearchListResultProps) {
  const { preloadedresult, results } = props;
  const [selectedChild, setSelectedChild] = useState<searchResultObject | null | boolean>(null);

  useEffect(() => {
    if(preloadedresult !== null) {
      setSelectedChild(true);
    }
  }, [preloadedresult])

  return (
    <>
      {!preloadedresult ? results.map((result) => (
        <S.CardContainer key={result.id}>
          <S.CardInfo>
            <S.CardImage src="/icons/profile_placeholder.svg" />
            <S.CardName>{result.name}</S.CardName>
            <S.CardAgeAndClass>
              {result.age} ANOS - {result.class}
            </S.CardAgeAndClass>
          </S.CardInfo>
          <S.CardButton onClick={() => setSelectedChild(result)}>Ver Mais</S.CardButton>
        </S.CardContainer>
      )) : (
        <S.CardContainer key={preloadedresult.id}>
          <S.CardInfo>
            <S.CardImage src="/icons/profile_placeholder.svg" />
            <S.CardName>{preloadedresult.name}</S.CardName>
            <S.CardAgeAndClass>
              {preloadedresult.age} ANOS - {preloadedresult.class}
            </S.CardAgeAndClass>
          </S.CardInfo>
          <S.CardButton onClick={() => setSelectedChild(true)}>Ver Mais</S.CardButton>
        </S.CardContainer>
      )}
      {selectedChild && !preloadedresult && <ModalCard childInfo={selectedChild} onClose={() => setSelectedChild(null)} />}   
      {preloadedresult && selectedChild === true && <ModalCard childInfo={preloadedresult} onClose={() => setSelectedChild(false)} />} 
    </>
  );
}
