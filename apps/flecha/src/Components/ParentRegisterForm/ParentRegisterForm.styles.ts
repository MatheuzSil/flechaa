import styled from "styled-components";


export const ParentRegisterForm = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1;
`

export const ParentRegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 90em;
  border-radius: 0.5em;
  height: 90%;
  background-color: rgba(74, 125, 255, 0.6);
  border: 2px solid rgba(74, 125, 255, 1);
  z-index: 1;
`


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

`