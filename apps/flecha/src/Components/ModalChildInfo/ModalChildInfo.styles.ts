import { Button, Paragraph, Title } from "@meu-workspace/safira";
import styled from "styled-components";

export const ModalChildInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
`

export const ChildPhotoContainer = styled.div`
  display: flex;
`

export const ChildPhoto = styled.img`
  width: 128px;
  height: 128px;
`

export const ChildInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
`

export const ClassAndAgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 20px;
  align-items: start;
` 

export const ChildInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const ChildName = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 36px;
  color: ${({ theme }) => theme.brandColors.backgroundBlack};
  font-weight: bold;
`

export const ChildAge = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  color: #333D54;
  font-weight: 400;
`

export const ChildClass = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 18px;
  color: #333D54;
  font-weight: 400;
`


export const CallButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
`

export const CallButton = styled(Button)`
  background-color: ${({ theme }) => theme.brandColors.primary950};
  color: ${({ theme }) => theme.brandColors.primary400};
  font-family: ${({ theme }) => theme.fonts.poppins};
  display: flex;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.brandColors.primary975};

  }

`

export const CallButtonEmergency = styled(Button)`
  background-color: #CE0000 ;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  display: flex;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color:rgb(167, 17, 17);
  }

`

export const OtherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 15px;
  padding-left: 20px;
  gap: 30px;
`

export const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & p {
      font-size: 18px;
    }
  }
`