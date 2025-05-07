import { Field, Paragraph, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const RegisterFormBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;

  @media screen and (max-width: 1180px) {
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
  max-width: 700px;
  height: 100%;
`;

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
`;

export const RegisterFormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const RegisterFormTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.craftyGirls};
  font-size: 48px;
  font-weight: 400;
  background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  color: transparent;
  background-clip: text;
  margin-top: 48px;

  @media screen and (max-width: 425px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

export const RegisterFormSubtitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 24px;
  font-weight: 400;
  margin-top: 12px;
  color: #222222;

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const RegisterFormLabel = styled.label`
  width: 100%;
  max-width: 600px;
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  font-weight: 400;
  color: #222222;

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 12px;
    font-size: 14px;
  }
`;

export const RegisterFormInput = styled<any>(Field)`
  width: 100%;
  height: 64px;
  max-width: 600px;
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 5px;

  & input {
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 8px 12px;
    background-image: 
      linear-gradient(white, white),
      linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-sizing: border-box;
    height: 64px;
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
    & input {
      height: 48px;
    }
  }
`;

export const RegisterFormButton = styled.button<{ disabled: boolean }>`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  font-size: 18px;
  font-weight: 400;
  border-radius: 10px;
  padding: 12px 48px;
  margin: 48px 0px;
  padding: 14px 48px;
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
    background-color: ${({ theme, disabled }) =>
      disabled && theme.brandColors.primary200};
    background-position: right center;
    transform: scale(1.03);
  }

  @media screen and (max-width: 1024px) {
    margin: 12px 0px;
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
    padding: 12px 36px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-bottom: 48px;

  @media screen and (max-width: 1024px) {
    margin: 12px 0px;
  }
`;

export const LinksText = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  font-weight: 400;
  color: #222222;

  a {
    background-image: linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
    color: transparent;
    background-clip: text;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const FlechaLogo = styled.img`
  display: flex;
  width: 900px;
  max-width: 100%;
  height: auto;
  align-self: center;

  @media screen and (max-width: 1670px) {
    width: 600px;
  }

  @media screen and (max-width: 1350px) {
    width: 400px;
  }
`;
