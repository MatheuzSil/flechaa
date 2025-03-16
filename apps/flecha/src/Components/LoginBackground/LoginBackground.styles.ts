import { Title } from "@meu-workspace/safira";
import styled from "styled-components";


export const LoginBackgroundContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-color: ${({ theme }) => theme.brandColors.brand};
`;

export const LoginBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


export const LoginBackgroundTitle = styled(Title)`
  color: ${({ theme }) => theme.secondary};
  font-size: 60px;
  margin-bottom: 20px;

`