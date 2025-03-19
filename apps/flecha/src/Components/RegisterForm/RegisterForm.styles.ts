import { Button, Field, Title } from "@meu-workspace/safira";
import styled from "styled-components";


export const RegisterFormBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #E6EBE9;
  height: 70vh;
  padding: 20px;

`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 700px;
  height: 100%;
`

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const RegisterFormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`


export const RegisterFormTitle = styled(Title)`  
  display: flex;
  align-items: center;
  color: #fff;
`

export const RegisterFormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.brandColors.brandSecondary};
`

export const RegisterFormInput = styled<any>(Field)`
  width: 100%;
  height: 30px;
  max-width: 600px ;
  margin-bottom: 10px;
  padding: 10px 0;
  border-radius: 5px;

  & input {
    background-color: #E6EBE9;

  }

`;

export const RegisterFormLabel = styled.label`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 600px;
  color:rgb(162, 165, 164);
  margin-top: 20px;
`

export const RegisterFormButton = styled(Button)`
  margin-top: 20px;
  color: ${({ theme }) => theme.brandColors.brandSecondary};
  font-weight: 600;
  width: 100%;
  max-width: 600px;
  padding: 12px;
  margin: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`



export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  a {
    color: ${({ theme }) => theme.brandColors.brand};
    text-decoration: none;
    font-weight: 600;
  }
`;