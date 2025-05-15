import { Paragraph } from "@meu-workspace/safira";
import styled from "styled-components";



export const HeaderContainer = styled.div<{ isFixed: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%) left bottom no-repeat;
  background-size: 100% 4px;
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 1000;
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
  cursor: pointer
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