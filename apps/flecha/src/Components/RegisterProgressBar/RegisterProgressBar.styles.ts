import styled from "styled-components"

export const FormProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  z-index: 1;
`


export const FormProgressBar = styled.div<{ value: number }>`
  width: 100%;
  min-width: 20rem;
  max-width: 20rem;
  height: 0.5rem;
  /* background-color: ${props => props.value > 0 ? props.theme.brandColors.gradientBlue : '#F0F8FF'}; */
  background: ${props => props.value > 0 ? props.theme.brandColors.gradientBlue : props.theme.brandColors.primary50};
  border-radius: 0.5rem;

  @media (max-width: 1200px) {
    min-width: 0;
    
  }
`


export const FormProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FormProgressBarLabel = styled.label`
  font-size: 0.5;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 400;
`