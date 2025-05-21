import styled from "styled-components"

export const FormProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 48px;
  z-index: 1;
`

export const FormProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  max-width: 75%;
`

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

export const ProgressCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FormProgressBarLabel = styled.label`
  font-size: 0.5;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 0.75rem;
`

export const ProgressBar = styled.div<{
  index: number;
  total: number;
  phase: number;
}>`
  position: relative;
  height: .5rem;
  width: 100%;
  border-radius: 1.25rem;
  background: #ffffff33;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ phase, index }) => (phase === index ? '100%' : '0%')};
    background: linear-gradient(
      90deg,
      rgba(56, 172, 255, 1) 0%,
      rgba(136, 51, 255, 1) 50%,
      rgba(255, 112, 51, 1) 100%
    );
    background-size: ${({ total }) => `${total * 100}% 100%`};
    background-position: ${({ index, total }) =>
      `${(index / total) * 100}% 0%`};
    border-radius: 1.25rem;
    transition: width 0.6s ease-in-out;
  }
`;

