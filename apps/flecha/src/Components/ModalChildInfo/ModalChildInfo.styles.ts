import { Button, Paragraph, Title } from "@meu-workspace/safira";
import styled from "styled-components";

export const ModalChildInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 2.5rem 1.25rem;
`

export const ChildPhotoContainer = styled.div`
  display: flex;
`

export const ChildPhoto = styled.img`
  width: 8rem;
  height: 8rem;
`

export const ChildInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1.875rem;
`

export const ClassAndAgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding-top: 1.25rem;
  align-items: start;
` 

export const ChildInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const ChildName = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 2.25rem;
  color: ${({ theme }) => theme.brandColors.backgroundBlack};
  font-weight: bold;
`

export const ChildAge = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.125rem;
  color: #333D54;
  font-weight: 400;
`

export const ChildClass = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.125rem;
  color: #333D54;
  font-weight: 400;
`


export const CallButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1.25rem;
  gap: 1.25rem;
`

export const CallButton = styled(Button)`
  background-color: ${({ theme }) => theme.brandColors.primary950};
  color: ${({ theme }) => theme.brandColors.primary400};
  font-family: ${({ theme }) => theme.fonts.poppins};
  display: flex;
  gap: .625rem;
  font-size: .75rem;
  font-weight: 400;
  padding: .625rem 1.25rem;
  border-radius: .5rem;
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
  gap: .625rem;
  font-size: .75rem;
  font-weight: 400;
  padding: .625rem 1.25rem;
  border-radius: .5rem;
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
  padding-top: .9375rem;
  padding-left: 1.25rem;
  gap: 1.875rem;
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
      font-size: 1.125rem;
    }
  }
`