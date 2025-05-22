import { Field, themes } from "@meu-workspace/safira";
import styled, { keyframes } from "styled-components";

// Keyframes for scale + fade
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ParentRegisterInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  padding: 1em 4em;
  justify-content: center;

  animation: ${fadeInScale} 0.4s ease-out;
`

export const ParentRegisterInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const ParentRegisterInputLabel = styled.label`
  font-size: 1.2em;
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-family: ${({  }) => themes.flecha.fonts.poppins};
`



export const ParentRegisterInput = styled(Field)`
  width: 100%;
  max-width: 35rem;
  height: 3.25rem;
  padding: 8px;
  outline: none;
  max-width: none;

  input {
    font-size: 16px;
    font-weight: 400;
    font-family: ${({  }) => themes.flecha.fonts.poppins};
    color: ${({  }) => themes.flecha.brandColors.backgroundBlack};
    max-width: none;
  }

  // border
  border-radius: 1.25rem;
  border-bottom: .25rem solid transparent;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-sizing: border-box;
  z-index: 1;
`