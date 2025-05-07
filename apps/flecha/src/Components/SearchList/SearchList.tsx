// Styles
import * as S from './SearchList.styles';

// Libs
import debounce from 'lodash.debounce';

// Hooks
import { useEffect, useState, useMemo, use } from 'react';
import { useSearch } from '../../graphql/hooks/useSearch';

// Components
import Search from '../Animations/Search/Search';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import Pagination from '../Pagination/Pagination';
import SearchListResult from '../SearchListResult/SearchListResult';

export default function SearchList() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const limit = 5;
  const { results, totalCount, search, loading } = useSearch();
  const [paginationTotal, setPaginationTotal] = useState(0);
  const [searchType, setSearchType] = useState('name');

  const debouncedSearch = useMemo(() => debounce((query, page, searchType) => {
    search({ variables: { query, page, limit, searchType } });
  }, 400), []);

  useEffect(() => {
    setPage(1);
  },[query]);

  useEffect(() => {
    debouncedSearch(query, page, searchType);
    return debouncedSearch.cancel;
  }, [query, page, searchType]);

  useEffect(() => {
    setPaginationTotal(Math.ceil(totalCount / limit));
  }, [totalCount]);

  return (
      <S.SearchContainer>
        <S.SearchListTitle>Crianças Cadastradas</S.SearchListTitle>
        <S.FiltrosContainer>
          <S.FiltroInput placeholder="Buscar..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <S.FiltroSelectContainer>
            <S.FiltroSelectTitle>Modo:</S.FiltroSelectTitle>
            <S.FiltroList onChange={(e) => setSearchType((e.target as HTMLSelectElement).value)} value={searchType}>
              <option value="name">Nome</option>
              <option value="age">Idade</option>
              <option value="class">Turma</option>
            </S.FiltroList>
          </S.FiltroSelectContainer>
        </S.FiltrosContainer>
        <S.SearchResultContainer>
          <Search isSearching={loading} />
          {results.length === 0 && !loading && <SearchNotFound searchType={searchType} />}
          <SearchListResult results={results} />
          <Pagination paginationTotal={paginationTotal} currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
        </S.SearchResultContainer>
      </S.SearchContainer>
  );
}
