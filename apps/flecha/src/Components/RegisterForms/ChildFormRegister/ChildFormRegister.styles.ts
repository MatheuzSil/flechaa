import { Field } from '@meu-workspace/safira';
import { BlurBallIconSecond, BlurballIcon, ArrowButtonIcon } from 'apps/flecha/public/icons/icon';
import styled from 'styled-components';

export const ChildFormRegister = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 32px;
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
  max-width: 87.5rem;
  height: 100%;
  max-height: fit-content;
  border: .125rem solid ${({ theme }) => theme.brandColors.primary200};
  padding: 0rem 48px;
  z-index: 10;
  border-radius: 1.25rem;
  background-color: rgba(119, 204, 255, 15%); /* Cor de fundo com opacidade */

  /* Borda e sombra suave */
  box-shadow: 0 0 1.875rem rgba(255, 255, 255, 0.05);

  /* Efeito de desfoque interno suave (opcional) */
  backdrop-filter: blur(.5rem);
`;

export const ChildFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 5.25rem;
  z-index: 1;
  padding: 0 1.25rem;
`;

export const ChildFormRegisterTitle = styled.h1`
  font-size: 4.875rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin-top: 5.25rem;
  line-height: 6.3125rem;
  letter-spacing: -0.512px;
  text-align: center;
  background: linear-gradient(90deg, #38acff 0%, #8833ff 50%, #ff7033 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
  padding: 0 1.25rem;
`;

export const ChildFormSubtitle = styled.label`
  font-size: 19.2px;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const ChildFormInput = styled(Field)`
  width: 100%;
  max-width: 35rem;
  height: 3.25rem;
  padding: 8px;
  outline: none;

  input {
    font-size: 16px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.brandColors.backgroundBlack};
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
`;

export const TermsAndConditionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2.25rem;
`

export const CheckboxLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.brandColors.primary50};
  margin-right: 1rem;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: .0625rem;
  width: .0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1.5625rem;
  height: 1.5625rem;
  margin-right: 1rem;
  border-radius: .3125rem;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: .25rem solid transparent;
  box-sizing: border-box;
  transition: all 150ms;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: ${({ checked }) => (checked ? '#222222' : 'transparent')};
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const ChildFormButttonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5.25rem 0;
`;

export const ChildFormButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.125rem;
  border-radius: .3125rem;
  font-weight: 500;
  padding: 1rem 2.25rem;
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
  width: 1.75rem;
  height: 1.75rem;
  margin-left: .5rem;
  transition: transform 0.3s ease;

  ${ChildFormButton}:hover & {
    transform: translateX(.3125rem);
  }
`;