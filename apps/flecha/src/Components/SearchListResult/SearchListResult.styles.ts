import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.brandColors.primary50};
  margin-bottom: 1.25rem;
  padding: 0rem 1.5rem;
  border-radius: .5rem;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const CardImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: .3125rem;
  margin-right: 1.625rem;
  box-sizing: border-box;
`;

export const CardName = styled.h2`
  font-size: 1.625rem;
  margin-right: 1.625rem;
  max-width: 14.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.brandColors.backgroundBlack};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const CardAgeAndClass = styled.h2`
  font-size: .875rem;
  color: ${({ theme }) => theme.brandColors.primary950};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const CardButton = styled.button`
  font-size: .75rem;
  font-weight: medium;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  background-color: ${({ theme }) => theme.brandColors.primary950};
  padding: .375rem 1rem;
  border-radius: .3125rem;
`;
