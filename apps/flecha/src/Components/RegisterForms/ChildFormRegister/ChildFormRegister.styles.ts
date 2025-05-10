import { Field } from '@meu-workspace/safira';
import { BlurBallIconSecond, BlurballIcon, ArrowButtonIcon } from 'apps/flecha/public/icons/icon';
import styled from 'styled-components';

export const ChildFormRegister = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 16em 0 12em 0;
  z-index: 1;
`;

export const TextureContainer = styled.div`
  position: absolute;
  z-index: -1;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('/textures/form_texture.png');
  background-size: cover;
  background-position: center;
`;

export const BlurBall = styled(BlurballIcon)`
  position: absolute;
  z-index: -1;
  pointer-events: none;
  transform: translateY(-30%) translateX(-110%);
`;

export const BlurBallSecond = styled(BlurBallIconSecond)`
  position: absolute;
  z-index: -2;
  pointer-events: none;
  transform: translateY(110%) translateX(110%);
`;

export const ChildFormRegisterContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  max-height: fit-content;
  border: 2px solid ${({ theme }) => theme.brandColors.primary200};
  padding: 0px 3rem;
  z-index: 10;
  border-radius: 20px;
  background-color: rgba(119, 204, 255, 15%); /* Cor de fundo com opacidade */

  /* Borda e sombra suave */
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);

  /* Efeito de desfoque interno suave (opcional) */
  backdrop-filter: blur(8px);
`;

export const ChildFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 84px;
  z-index: 1;
  padding: 0 20px;
`;

export const ChildFormRegisterTitle = styled.h1`
  font-size: 78px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin-top: 84px;
  line-height: 101px;
  letter-spacing: -0.032rem;
  text-align: center;
  background: linear-gradient(90deg, #38acff 0%, #8833ff 50%, #ff7033 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;
  padding: 0 20px;
`;

export const ChildFormSubtitle = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const ChildFormInput = styled(Field)`
  width: 100%;
  max-width: 560px;
  height: 52px;
  padding: 0.5rem;
  outline: none;

  font-size: 1rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.backgroundBlack};

  // border
  border-radius: 20px;
  border-bottom: 4px solid transparent;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-sizing: border-box;
  z-index: 1;
`;

export const ChildFormButttonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 84px 0;
`;

export const ChildFormButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 24px;
  border-radius: 5px;
  font-weight: 500;
  padding: 16px 36px;
  background: linear-gradient(
    90deg,
    rgba(56, 172, 255, 1),
    rgba(160, 51, 255, 1),
    rgba(255, 112, 51, 1)
  );
  background-size: 200%;
  background-position: left center;
  transition: background-position 0.5s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-position: right center;
    transform: scale(1.03);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.brandColors.primary200};
  }
`

export const ArrowButtonIconContainer = styled(ArrowButtonIcon)`
  width: 28px;
  height: 28px;
  margin-left: 8px;
  transition: transform 0.3s ease;

  ${ChildFormButton}:hover & {
    transform: translateX(5px);
  }
`;