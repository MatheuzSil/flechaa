import { Button, Paragraph } from "@meu-workspace/safira";
import styled from "styled-components";


export const FastRegisterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
`

export const FastRegisterBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 50px 150px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.brandColors.primary950};
`


export const FastRegisterBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.brandColors.primary50};
`

export const TextAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`


export const FastRegisterBoxText = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.brandColors.primary50};
`


export const FastRegisterButton = styled(Button)`
  width: 190px;
  height: 42px;
  background-color: ${({ theme }) => theme.brandColors.primary400};
  color: ${({ theme }) => theme.brandColors.primary950};
`

export const FastRegisterButtonParents = styled(Button)`
  width: 190px;
  height: 42px;
  background-color: ${({ theme }) => theme.brandColors.primary50};
  color: ${({ theme }) => theme.brandColors.primary950};
`