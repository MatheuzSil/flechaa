import { Button, Paragraph } from "@meu-workspace/safira";
import exp from "constants";
import styled from "styled-components";


export const ParentRegisterForm = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1;
`

export const ParentRegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2em ;
  max-width: 90em;
  border-radius: 0.5em;
  height: 90%;
  background-color: rgba(74, 125, 255, 0.3);
  backdrop-filter: blur(8px);

  border: 2px solid rgba(74, 125, 255, 1);
  z-index: 1;
`


export const TextureContainer = styled.div`
  position: absolute;
  z-index: -1;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('/textures/form_texture.png');
  background-size: cover;
  background-position: center;

`


export const FlechaIcon = styled.img`
  z-index: 1;
  width: 14rem;
  height: auto;
  bottom: 2rem;
  right: 2rem;
`

export const ParentRegisterFormTitle = styled.h1`
  font-size: 4.2rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin-top: 1.6rem;
  font-weight: 600;
  line-height: 101px;
  letter-spacing: -0.032rem;
  text-align: center;
  background: linear-gradient(90deg, #38acff 0%, #8833ff 40%, #ff7033 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export const ParentRegisterFormSubtitle = styled(Paragraph)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  text-align: center;
  font-weight: 300;
  margin-top: 0.2rem;

`


export const ContinueButton = styled.button`
  width: 100%;
  max-width: 8rem;
  height: 4rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  margin-top: 2rem;
  border-radius: .5rem;
  margin-top: 2rem;
  opacity: 0.5;
  background: ${({ theme }) => theme.brandColors.gradientBlue};
  background-size: 200%;
  background-position: left center;
  transition: background-position 0.5s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-position: right center;
    transform: scale(1.03);
  }
  
`



export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  z-index: 1;
`

export const LinksText = styled(Paragraph)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  text-align: center;
  font-weight: 300;
`

export const Link = styled.a`
  background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  color: transparent;
  font-weight: 400;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`


export const BackButton = styled(Button)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  color: ${({ theme }) => theme.brandColors.primary50};

  &:hover {
    transform: scale(1.1);
    background-color: transparent;
  }

`


export const RegisterButton = styled(Button)`
  width: 100%;
  max-width: 20rem;
  height: 4rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins}; 
  margin-top: 2rem;
  border-radius: .5rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.brandColors.gradientBlue};
  background-size: 200%;
  background-position: left center;
  transition: background-position 0.5s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-position: right center;
    transform: scale(1.03);
    background: ${({ theme }) => theme.brandColors.gradientBlue};
  }

`
