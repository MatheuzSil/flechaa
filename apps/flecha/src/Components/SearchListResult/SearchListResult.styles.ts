import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.brandColors.primary50};
  margin-bottom: 20px;
  padding: 0px 24px;
  border-radius: 8px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const CardImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 26px;
  box-sizing: border-box;
`;

export const CardName = styled.h2`
  font-size: 26px;
  margin-right: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.brandColors.backgroundBlack};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const CardAgeAndClass = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.brandColors.primary950};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const CardButton = styled.button`
  font-size: 12px;
  font-weight: medium;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  background-color: ${({ theme }) => theme.brandColors.primary950};
  padding: 6px 16px;
  border-radius: 5px;
`;
