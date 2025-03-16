import { Button, Field, Title } from "@meu-workspace/safira";
import styled from "styled-components";


export const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #E6EBE9;
  height: 70vh;
  padding: 40px;

`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 50%;
  height: 100%;
`

export const LoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brandColors.brandSecondary};
  padding: 30px;
  border-radius: 10px;
  width: 100%;
`


export const LoginFormTitle = styled(Title)`
  color: #fff;
`

export const LoginFormInput = styled<any>(Field)`
  width: 100%;
  height: 30px;
  max-width: 700px ;
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 5px;
`;

export const LoginFormLabel = styled.label`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 700px;
  color: #fff;
  margin-top: 20px;
`

export const LoginFormButton = styled(Button)`
  margin-top: 20px;
  color: ${({ theme }) => theme.brandColors.brandSecondary};
  font-weight: 600;
  width: 100%;
  max-width: 700px;
  padding: 12px;
  margin-top: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`