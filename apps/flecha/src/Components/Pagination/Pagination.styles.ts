import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const PaginationText = styled.p`
  font-size: 16px;
  font-weight: regular;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const PaginationChevron = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;

  &[aria-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
    &:hover {
      cursor: not-allowed;
    }
  }
`;
