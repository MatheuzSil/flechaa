import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Field = styled.label<any>`
  position: relative;
`

export const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: ${props => props.theme.colors.brand}; ;
  border-radius: 10px;
  padding: 8px 12px;
  right: 4px;
  top: -12px;
  color: white;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  `

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${props => props.theme.colors.brand};
  position: absolute;
  top: 100%;
  right: 12px;
  transform: translateX(50%);
  animation: ${fadeIn} 1s forwards;
`

