import { Paragraph } from "@meu-workspace/safira";
import styled from "styled-components";

export const HeaderContainer = styled.div<{ isFixed: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8.75rem;
  background: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%) left bottom no-repeat;
  background-size: 100% .25rem;
  backdrop-filter: blur(.125rem);
  position: fixed;
  z-index: 1000;
`;

export const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 90rem;
  height: 100%;

  @media screen and (max-width: 90rem) {
    justify-content: space-around;
  }
`

export const HeaderFlechaIcon = styled.img`
  width: 12.5rem;
  height: 6.25rem;
  cursor: pointer
`

export const HeaderProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .625rem;
`

export const HeaderProfileName = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-weight: 300;
`