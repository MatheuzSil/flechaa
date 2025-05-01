import SearchListResult from '../SearchListResult/SearchListResult';
import * as S from './SearchList.styles';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSearch } from '../../graphql/hooks/useSearch';
import debounce from 'lodash.debounce';

export default function SearchList() {
  const [query, setQuery] = useState('');
  const { results, search } = useSearch();

  const debouncedSearch = debounce((value: string) => {
    if (value.length >= 2) {
      search({ variables: { query: value } });
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(query);
    console.log(results);
    return debouncedSearch.cancel;
  }, [query]);

  const paginationTotal = results.length / 1;

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
