import { themes } from "@meu-workspace/safira";
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%) left top no-repeat;
  background-size: 100% .25rem;
  margin-bottom: 2.25rem;
`;

export const FooterContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 90rem;
  height: 100%;
  margin-top: 2.25rem;

  @media screen and (max-width: 26.5625rem) {
    flex-direction: column;
  }
`

export const FooterFlechaIcon = styled.img`
  width: 15rem;
  height: 16.875rem;
`

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const FooterContactTitle = styled.h1`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-size: 2.25rem;
  font-weight: semibold;
  margin-bottom: .625rem;
`

export const FooterContactText = styled.p`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-size: 1.125rem;
  font-weight: 300;
`

export const FooterPoweredBy = styled.p`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  color: transparent;
  background-clip: text;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 2.25rem;
`