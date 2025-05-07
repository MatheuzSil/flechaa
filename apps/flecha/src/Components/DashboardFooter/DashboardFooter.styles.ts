import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%) left top ${({ theme }) => theme.brandColors.backgroundBlack} no-repeat;
  background-size: 100% 4px;
  margin-bottom: 36px;
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
  background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  color: transparent;
  background-clip: text;
  font-size: 18px;
  font-weight: 500;
  margin-top: 36px;
`