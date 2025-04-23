import { Button, Field, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const LoginFormBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  padding: 20px;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  height: 100%;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 750px;
  height: 100%;
  max-height: 618px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginFormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const LoginTitleContainer = styled.div``;

export const LoginFormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.brandColors.brandSecondary};
`;

export const LoginFormTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.craftyGirls};
  font-size: 48px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.brandColors.primary400};
  margin-top: 48px;
  padding: 0 10px;

  @media screen and (max-width: 535px) {
    font-size: 34px;
  }

  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const LoginFormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 24px;
  font-weight: 400;
  margin-top: 12px;
  color: #222222;
  text-align: center;
  padding: 0 10px ;

  @media screen and (max-width: 580px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const LoginFormLabel = styled.label`
  width: 100%;
  max-width: 600px;
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  font-weight: 400;
  color: #222222;

  @media screen and (max-width: 425px) {
    margin-top: 12px;
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    margin-top: 0px;
    font-size: 12px;
  }
`;

export const LoginFormInput = styled<any>(Field)`
  width: 100%;
  height: 64px;
  max-width: 600px;
  padding: 10px 0;
  border-radius: 5px;

  & input {
    border: 1px solid #888888;
    height: 64px;
  }

  @media screen and (max-width: 425px) {
    & input {
      height: 48px;
    }
  }

  @media screen and (max-width: 320px) {
    & input {
      font-size: 12px;
      height: 24px;
    }
  }
`;

export const LoginFormButton = styled(Button)`
  margin-top: 20px;
  margin: 40px;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-weight: 600;
  width: 100%;
  background-color: ${({ theme }) => theme.brandColors.primary400};
  max-width: 600px;
  padding: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  &:hover {
    background-color: ${({ theme }) => theme.brandColors.primary600};
  }

  @media screen and (max-width: 425px) {
    margin: 12px 0px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    margin: 6px 0px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const LinksText = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  font-weight: 400;
  color: #222222;

  a {
    color: ${({ theme }) => theme.brandColors.primary400};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 400;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const FlechaIconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 1000;
  margin-top: 50px;
`;

export const FlechaIcon = styled.img`
  z-index: 1000;
  width: 300px;
  height: auto;
`;
