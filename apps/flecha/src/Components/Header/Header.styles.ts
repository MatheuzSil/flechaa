import { Paragraph } from "@meu-workspace/safira";
import styled from "styled-components";



export const HeaderContainer = styled.div<{ isFixed: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  border-bottom: 4px solid ${({ theme }) => theme.brandColors.primary700};
  background-color: ${({ theme }) => theme.brandColors.backgroundBlack}; 
  position: fixed;
`;

export const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 100%;
`

export const HeaderFlechaIcon = styled.img`
  width: 200px;
  height: 100px;
`

export const HeaderProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const HeaderProfileName = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-weight: 300;
`