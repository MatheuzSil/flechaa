import * as S from './SearchListResult.styles';

interface SearchListResultProps {
  results: searchResultObject[];
}

export default function SearchListResult(props: SearchListResultProps) {
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
          <S.CardButton>Ver Mais</S.CardButton>
        </S.CardContainer>
      ))}
    </>
  );
}
