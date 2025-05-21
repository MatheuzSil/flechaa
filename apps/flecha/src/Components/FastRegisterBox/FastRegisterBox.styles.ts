import { Button, Paragraph } from '@meu-workspace/safira';
import styled from 'styled-components';

export const FastRegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5.375rem 0px;
`;

export const FastRegisterBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 90rem;
  height: 100%;
  padding: 3.125rem 5rem;
  border-radius: .625rem;
  background: #38ACFF;
  background: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);

  @media screen and (max-width: 90rem) {
    max-width: 80rem;
  }

  @media screen and (max-width: 64rem) {
    max-width: 60rem;
  }

  @media screen and (max-width: 48rem) {
    max-width: 40rem;
    flex-direction: column;
  }

  @media screen and (max-width: 26.5625rem) {
    padding: 3rem 2rem;
  }
`;

export const FastRegisterBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.brandColors.primary50};

  @media screen and (max-width: 26.5625rem) {
    font-size: 1.75rem;
  }
`;

export const TextAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .625rem;

  @media screen and (max-width: 26.5625rem) {
    flex-direction: column;
  }
`;

export const FastRegisterBoxText = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.brandColors.primary50};

  @media screen and (max-width: 26.5625rem) {
    text-align: center;
  }
`;

export const FastRegisterButton = styled(Button)`
  display: flex;
  gap: .3125rem;
  height: 2.625rem;
  padding: .75rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  background-color: ${({ theme }) => theme.brandColors.primary400};
  color: ${({ theme }) => theme.brandColors.primary950};
  font-size: .875rem;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.brandColors.primary500};
  }
`;

export const FastRegisterButtonParents = styled(Button)`
  display: flex;
  gap: .3125rem;
  height: 2.625rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  background-color: ${({ theme }) => theme.brandColors.primary50};
  font-weight: 700;
  font-size: .875rem;
  color: ${({ theme }) => theme.brandColors.primary950};

  &:hover {
    background-color: ${({ theme }) => theme.brandColors.primary100};
  }
`;
