import { useEffect, useState } from 'react';
import * as S from './Pagination.styles';
import { ArrowLeftIcon, ArrowRightIcon } from 'apps/flecha/public/icons/icon';

interface PaginationProps {
  paginationTotal: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ paginationTotal, currentPage, onPageChange }: PaginationProps) {
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);

  useEffect(() => {
    setIsDisabledLeft(currentPage === 1);
    setIsDisabledRight(currentPage === paginationTotal || paginationTotal === 0);
  }, [currentPage, paginationTotal]);

  const goToPage = (newPage: number) => {
    if(newPage >= 1 && newPage <= paginationTotal){
      onPageChange(newPage);
    }
  };

  return (
    <S.Pagination>
      <S.PaginationChevron aria-disabled={isDisabledLeft} onClick={() => goToPage(currentPage - 1)} ><ArrowLeftIcon /></S.PaginationChevron>
      <S.PaginationText>{currentPage} de {paginationTotal}</S.PaginationText>
      <S.PaginationChevron aria-disabled={isDisabledRight} onClick={() => goToPage(currentPage + 1)}><ArrowRightIcon /></S.PaginationChevron>
    </S.Pagination>
  );

}
