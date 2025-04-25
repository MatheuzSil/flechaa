import styled from 'styled-components';

export const SearchListTitle = styled.h1`
  color: ${({ theme }) => theme.brandColors.primary50};
  font-size: 36px;
  font-weight: semibold;
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 20px;
`;
