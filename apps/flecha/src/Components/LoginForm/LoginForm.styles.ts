import { Button, Field, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const LoginFormBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  padding: 1.25rem;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 43.75rem;
  height: 100%;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: .625rem;
  width: 100%;
  max-width: 46.875rem;
  height: 100%;
  max-height: 38.625rem;
  box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
`;

export const LoginFormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: .625rem;
`;

export const LoginTitleContainer = styled.div``;

export const LoginFormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 6.25rem;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  background-color: ${({ theme }) => theme.brandColors.brandSecondary};
`;

export const LoginFormTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.craftyGirls};
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
  background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  color: transparent;
  background-clip: text;
  margin-top: 3rem;
  padding: 0 .625rem;

  @media screen and (max-width: 33.4375rem) {
    font-size: 2.125rem;
  }

  @media screen and (max-width: 23.4375rem) {
    font-size: 1.5rem;
  }
`;

export const LoginFormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .75rem;
  color: #222222;
  text-align: center;
  padding: 0 .625rem ;

  @media screen and (max-width: 36.25rem) {
    font-size: 1rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: .75rem;
  }
`;

export const LoginFormLabel = styled.label`
  width: 100%;
  max-width: 37.5rem;
  margin-top: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.125rem;
  font-weight: 400;
  color: #222222;

  @media screen and (max-width: 26.5625rem) {
    margin-top: .75rem;
    font-size: .875rem;
  }

  @media screen and (max-width: 20rem) {
    margin-top: 0rem;
    font-size: .75rem;
  }
`;

export const LoginFormInput = styled<any>(Field)`
  width: 100%;
  height: 4rem;
  max-width: 37.5rem;
  padding: .625rem 0;
  border-radius: .3125rem;

  & input {
    padding: .5rem .75rem;
    border-radius: .3125rem;
    border: .125rem solid transparent;
    background-image: 
      linear-gradient(white, white),
      linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-sizing: border-box;
    height: 4rem;
  }

  @media screen and (max-width: 26.5625rem) {
    & input {
      height: 3rem;
    }
  }

  @media screen and (max-width: 20rem) {
    & input {
      font-size: .75rem;
      height: 1.5rem;
    }
  }
`;

export const LoginFormButton = styled.button`
  margin-top: 1.25rem;
  margin: 2.5rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1rem;
  border-radius: .3125rem;
  font-weight: 600;
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
  cursor: pointer;

  &:hover {
    background-position: right center;
    transform: scale(1.03);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.brandColors.primary200};
  }

  @media screen and (max-width: 26.5625rem) {
    margin: .75rem 0rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: .75rem;
    margin: .375rem 0rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
`;

export const LinksText = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.125rem;
  font-weight: 400;
  color: #222222;

  a {
    background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
    color: transparent;
    background-clip: text;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 400;
  }

  @media screen and (max-width: 26.5625rem) {
    font-size: .875rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: .75rem;
  }
`;

export const FlechaIconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 1000;
  margin-top: 3.125rem;
`;

export const FlechaIcon = styled.img`
  z-index: 1000;
  width: 18.75rem;
  height: auto;
`;
