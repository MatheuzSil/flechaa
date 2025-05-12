import { Button } from "@meu-workspace/safira";
import styled from "styled-components";



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
`


export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.brandColors.backgroundWhite};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 1060px;
  height: 100%;
  max-height: 700px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {opacity: 0; transform: scale(0.95);}
    to {opacity: 1; transform: scale(1);}
  }
`


export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 0 20px;
  width: 100%;
`


export const ButtonContainer = styled(Button)`
  padding: 0;
  min-height: 0;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
  }

  

`