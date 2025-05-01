import SearchListResult from '../SearchListResult/SearchListResult';
import * as S from './SearchList.styles';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSearch } from '../../graphql/hooks/useSearch';

export default function SearchList() {
  const [query, setQuery] = useState('');
  const { results, search } = useSearch();
  let paginationTotal = 0;

  useEffect(() => {
    search({ variables: { query: query } });
  }, [query]);

  if(results.length > 0) {
    paginationTotal = results.length / 5;
  }


  return (
      <S.SearchContainer>
        <S.SearchListTitle>Crianças Cadastradas</S.SearchListTitle>
        <S.FiltrosContainer>
          <S.FiltroInput placeholder="Buscar..." value={query} onChange={(e) => setQuery(e.target.value)} />
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
