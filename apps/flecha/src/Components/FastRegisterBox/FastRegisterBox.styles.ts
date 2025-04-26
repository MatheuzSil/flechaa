import { Button, Paragraph } from '@meu-workspace/safira';
import { PersonIcon, PersonsIcon } from 'apps/flecha/public/icons/icon';
import styled from 'styled-components';

export const FastRegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 86px 0px;
`;

export const FastRegisterBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 50px 80px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.brandColors.primary950};
`;

export const FastRegisterBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.brandColors.primary50};
`;

export const TextAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const FastRegisterBoxText = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.brandColors.primary50};
`;

export const FastRegisterButton = styled(Button)`
  display: flex;
  gap: 5px;
  width: 190px;
  height: 42px;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  background-color: ${({ theme }) => theme.brandColors.primary400};
  color: ${({ theme }) => theme.brandColors.primary950};
  font-size: 12px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.brandColors.primary500};
  }
`;

export const FastRegisterButtonParents = styled(Button)`
  display: flex;
  gap: 5px;
  width: 190px;
  height: 42px;
  background-color: ${({ theme }) => theme.brandColors.primary50};
  color: ${({ theme }) => theme.brandColors.primary950};
  font-size: 12px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.poppins};

  &:hover {
    background-color: ${({ theme }) => theme.brandColors.primary100};
  }
`;
