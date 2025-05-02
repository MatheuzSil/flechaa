import SearchListResult from '../SearchListResult/SearchListResult';
import * as S from './SearchList.styles';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSearch } from '../../graphql/hooks/useSearch';
import { Paragraph } from '@meu-workspace/safira';

export default function SearchList() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const limit = 5;
  const { results, totalCount, search, loading } = useSearch();
  const [paginationTotal, setPaginationTotal] = useState(0);

  useEffect(() => {
    search({ variables: { query: query, page: page, limit: limit } });
    if(results.length < 5) {
      setPaginationTotal(1);
      setPage(1);
    }
  }, [query, page]);

  
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
            <S.FiltroList>
              <option value="1">Nome</option>
              <option value="2">Idade</option>
              <option value="3">Turma</option>
            </S.FiltroList>
          </S.FiltroSelectContainer>
        </S.FiltrosContainer>
        <S.SearchResultContainer>
          {loading && <Paragraph $fontColor="#fff">Carregando...</Paragraph>}
          <SearchListResult results={results} />
          <Pagination paginationTotal={paginationTotal} currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
        </S.SearchResultContainer>
      </S.SearchContainer>
  );
}
