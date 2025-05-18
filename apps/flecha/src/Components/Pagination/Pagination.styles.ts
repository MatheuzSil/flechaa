import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1.25rem;
`;

export const PaginationText = styled.p`
  font-size: 1rem;
  font-weight: regular;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const PaginationChevron = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: .625rem;
  margin-left: .625rem;
  cursor: pointer;

  &[aria-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
    &:hover {
      cursor: not-allowed;
    }
  }
`;
