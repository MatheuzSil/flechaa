import * as S from './SearchNotFound.styles';

export default function SearchNotFound() {
  return (
    <S.NotFoundContainer>
      <img src='/flecha_not_found.svg' />
      <S.NotFoundParagraph>Não há nenhuma criança com esse nome</S.NotFoundParagraph>
    </S.NotFoundContainer>
  );
}