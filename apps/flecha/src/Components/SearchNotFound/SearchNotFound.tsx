import * as S from './SearchNotFound.styles';

interface SearchNotFoundProps {
  searchType?: string;
}

export default function SearchNotFound(props: SearchNotFoundProps) {
  const { searchType } = props;
  let searchTypeValue = 'com esse nome';

  if(searchType === 'age') {
    searchTypeValue = 'com essa idade';
  } else if(searchType === 'class') {
    searchTypeValue = 'nessa turma';
  }

  return (
    <S.NotFoundContainer>
      <img src='/flecha_not_found.svg' />
      <S.NotFoundParagraph>Não há nenhuma criança {searchTypeValue}</S.NotFoundParagraph>
    </S.NotFoundContainer>
  );
}