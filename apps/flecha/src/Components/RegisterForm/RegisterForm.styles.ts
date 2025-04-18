import { Button, Field, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const RegisterFormBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
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
  color: ${({ theme }) => theme.brandColors.primary400};
  margin-top: 48px;
`;

export const RegisterFormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 24px;
  font-weight: 400;
  margin-top: 12px;
  color: #222222;
`;

export const RegisterFormInput = styled<any>(Field)`
  width: 100%;
  height: 64px;
  max-width: 600px;
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 5px;

  & input {
    border: 1px solid #888888;
    height: 64px;
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
`;

export const RegisterFormButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  background-color: ${({ theme }) => theme.brandColors.primary400};
  font-size: 18px;
  font-weight: 400;
  border-radius: 10px;
  padding: 12px 48px;
  margin: 48px 0px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-bottom: 48px;
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
  }
`;

export const FlechaLogo = styled.img`
  display: flex;
  width: 1000px;
  height: auto;
  align-self: center;
`;
