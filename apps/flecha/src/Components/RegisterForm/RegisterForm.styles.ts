import { Field, Paragraph, themes, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const RegisterFormBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  position: absolute;

  @media screen and (max-width: 73.75rem) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 43.75rem;
  height: 100%;
`;

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: .625rem;
  width: 100%;
`;

export const RegisterFormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: .625rem;
`;

export const RegisterFormTitle = styled(Title)`
  font-family: ${({  }) => themes.flecha.fonts.craftyGirls};
  font-size: 3rem;
  font-weight: 400;
  background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  color: transparent;
  background-clip: text;
  margin-top: 3rem;

  @media screen and (max-width: 26.5625rem) {
    margin-top: .75rem;
    font-size: 2.25rem;
  }
`;

export const RegisterFormSubtitle = styled(Paragraph)`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .75rem;
  color: #222222;

  @media screen and (max-width: 26.5625rem) {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 23.4375rem) {
    font-size: .875rem;
  }
`;

export const RegisterFormLabel = styled.label`
  width: 100%;
  max-width: 37.5rem;
  margin-top: 1.5rem;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-size: 1.125rem;
  font-weight: 400;
  color: #222222;

  @media screen and (max-width: 26.5625rem) {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 23.4375rem) {
    margin-top: .75rem;
    font-size: .875rem;
  }
`;

export const RegisterFormInput = styled<any>(Field)`
  width: 100%;
  height: 4rem;
  max-width: 37.5rem;
  margin-bottom: .625rem;
  padding: .625rem 0;
  border-radius: .3125rem;

  & input {
    border: .125rem solid transparent;
    border-radius: .3125rem;
    padding: .5rem .75rem;
    background-image: 
      linear-gradient(white, white),
      linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-sizing: border-box;
    height: 4rem;
  }

  @media screen and (max-width: 23.4375rem) {
    font-size: .875rem;
    & input {
      height: 3rem;
    }
  }
`;

export const RegisterFormButton = styled.button<{ disabled: boolean }>`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-size: 1.125rem;
  font-weight: 400;
  border-radius: .625rem;
  padding: .75rem 3rem;
  margin: 3rem 0rem;
  padding: .875rem 3rem;
  background: linear-gradient(
    90deg,
    rgba(56, 172, 255, 1),
    rgba(160, 51, 255, 1),
    rgba(255, 112, 51, 1)
  );
  background-size: 200%;
  background-position: left center;
  transition: background-position 0.5s ease, transform 0.2s ease;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.2s ease, opacity 0.2s ease;
  transition: background-position 0.5s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled && themes.flecha.brandColors.primary200};
    background-position: right center;
    transform: scale(1.03);
  }

  @media screen and (max-width: 64rem) {
    margin: .75rem 0rem;
  }

  @media screen and (max-width: 23.4375rem) {
    font-size: .875rem;
    padding: .75rem 2.25rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 64rem) {
    margin: .75rem 0rem;
  }
`;

export const LinksText = styled.p`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-size: 1.125rem;
  font-weight: 400;
  color: #222222;

  a {
    background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
    color: transparent;
    background-clip: text;
    text-decoration: none;
    font-family: ${({  }) => themes.flecha.fonts.poppins};
  }

  @media screen and (max-width: 23.4375rem) {
    font-size: .875rem;
  }
`;

export const FlechaLogo = styled.img`
  display: flex;
  width: 56.25rem;
  max-width: 100%;
  height: auto;
  align-self: center;

  @media screen and (max-width: 104.375rem) {
    width: 37.5rem;
  }

  @media screen and (max-width: 84.375rem) {
    width: 25rem;
  }
`;
