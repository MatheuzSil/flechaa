import { Field, Title } from "@meu-workspace/safira";
import styled from "styled-components";


export const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #E6EBE9;
  height: 70vh;


`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  padding: 30px;
`

export const LoginFormTitle = styled(Title)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.brandColors.brand};
`

export const LoginFormInput = styled<any>(Field)`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 20px 0;
  border-radius: 5px;
`;


export const LoginFormButton = styled.button`
  display: flex;
  margin-top: 20px;
  
`