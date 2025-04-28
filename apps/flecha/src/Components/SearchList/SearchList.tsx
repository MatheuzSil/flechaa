import SearchListResult from '../SearchListResult/SearchListResult';
import * as S from './SearchList.styles';
import Pagination from '../Pagination/Pagination';

export default function SearchList() {
  const results = [
    {
      id: '1',
      imageUrl: '/icons/profile_placeholder.svg',
      name: 'Henrique Augusto',
      age: 5,
      class: 'Turma A',
    },
    {
      id: '2',
      imageUrl: '/icons/profile_placeholder_woman.svg',
      name: 'Arlequina da Silva',
      age: 6,
      class: 'Turma B',
    },
    {
      id: '3',
      imageUrl: '/icons/profile_placeholder.svg',
      name: 'Henrique Augusto',
      age: 7,
      class: 'Turma C',
    },
    {
      id: '4',
      imageUrl: '/icons/profile_placeholder_woman.svg',
      name: 'Arlequina da Silva',
      age: 8,
      class: 'Turma D',
    },
    {
      id: '5',
      imageUrl: '/icons/profile_placeholder.svg',
      name: 'Henrique Augusto',
      age: 9,
      class: 'Turma E',
    },
  ];

  const paginationTotal = results.length / 1;

  return (
    <S.SearchContainer>
      <S.SearchListTitle>Crianças Cadastradas</S.SearchListTitle>
      <S.FiltrosContainer>
        <S.FiltroInput />
        <S.FiltroSelectContainer>
          <S.FiltroSelectTitle>Modo:</S.FiltroSelectTitle>
          <S.FiltroList>
            <option value="1">Nome</option>
            <option value="2">Idade</option>
            <option value="3">Turma</option>
          </S.FiltroList>
        </S.FiltroSelectContainer>
      </S.FiltrosContainer>
      <S.SearchResultContainer>
        <SearchListResult results={results} />
        <Pagination paginationTotal={paginationTotal} />
      </S.SearchResultContainer>
    </S.SearchContainer>
  );
}
