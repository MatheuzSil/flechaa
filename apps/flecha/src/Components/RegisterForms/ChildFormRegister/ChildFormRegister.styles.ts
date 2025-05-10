import { BlurballIcon } from 'apps/flecha/public/icons/icon';
import styled from 'styled-components';

export const ChildFormRegister = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-top: 12em;
`;

export const BlurBall = styled(BlurballIcon)`
  position: absolute;
  top: 15%;
  left: -250px;
  z-index: 0;
  pointer-events: none;
  transform: translateY(-50%);
`;



export const ChildFormRegisterContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  max-height: 918px;
  padding: 3rem;
  z-index: 1;
  border-radius: 20px;
  background-color: rgba(119, 204, 255, 15%); /* Cor de fundo com opacidade */


  /* Borda e sombra suave */
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.05);

  /* Efeito de desfoque interno suave (opcional) */
  backdrop-filter: blur(8px);
`;

export const ChildFormRegisterTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  background: linear-gradient(90deg, #38acff 0%, #8833ff 50%, #ff7033 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 70px;
  padding: 0 110px;
`;

export const ChildFormRegisterSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #ccc;
`;
