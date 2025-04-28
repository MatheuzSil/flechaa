import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 4px solid ${({ theme }) => theme.brandColors.primary700};
  margin-bottom: 86px;
`;

export const FooterContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin-top: 36px;
`

export const FooterFlechaIcon = styled.img`
  width: 240px;
  height: 270px;
`

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const FooterContactTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  font-size: 36px;
  font-weight: semibold;
  margin-bottom: 10px;
`

export const FooterContactText = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  font-size: 18px;
  font-weight: 300;
`

export const FooterPoweredBy = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: #666666;
  font-size: 18px;
  font-weight: 400;
  margin-top: 36px;
`