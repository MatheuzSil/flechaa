import { useEffect, useState } from 'react';
import * as S from './Pagination.styles';
import { ArrowLeftIcon, ArrowRightIcon } from 'apps/flecha/public/icons/icon';

interface PaginationProps {
  paginationTotal: number;
}

export default function Pagination(props: PaginationProps) {
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const [isDisabledLeft, setIsDisabledLeft] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { paginationTotal } = props;

  useEffect(() => {
    if (paginationTotal === 0) {
      setIsDisabledRight(true);
      setIsDisabledLeft(true);
      setCurrentPage(0);
    } else if (paginationTotal === 1) {
      setIsDisabledRight(true);
      setIsDisabledLeft(true);
    } else if (currentPage === paginationTotal) {
      setIsDisabledRight(true);
      setIsDisabledLeft(false);
    } else if (currentPage === 1) {
      setIsDisabledRight(false);
      setIsDisabledLeft(true);
    } else if (currentPage < paginationTotal) {
      setIsDisabledRight(false);
      setIsDisabledLeft(false);
    }
  }, [paginationTotal, currentPage]);
  return (
    <S.Pagination>
      <S.PaginationChevron aria-disabled={isDisabledLeft} onClick={() => setCurrentPage(currentPage - 1)} ><ArrowLeftIcon /></S.PaginationChevron>
      <S.PaginationText>{currentPage} de {paginationTotal}</S.PaginationText>
      <S.PaginationChevron aria-disabled={isDisabledRight} onClick={() => setCurrentPage(currentPage + 1)}><ArrowRightIcon /></S.PaginationChevron>
    </S.Pagination>
  );
}
