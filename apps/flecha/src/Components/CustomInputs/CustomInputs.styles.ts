import styled from 'styled-components';

export const CalendarPopup = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 10;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 0 2px #9747ff33;
  width: 320px;

  .rdp {
    --rdp-accent-color: #9747ff;
    --rdp-background-color: transparent;
    font-family: inherit;
  }

  .rdp-day_selected:not([disabled]),
  .rdp-day_today {
    border: 2px solid #9747ff;
    color: #000;
    background: none;
    border-radius: 50%;
  }

  .rdp-day_outside {
    color: #d0d0d0;
  }

  .rdp-caption {
    font-weight: bold;
    color: #9747ff;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .rdp-nav_button {
    color: #9747ff;
  }
`;

export const CustomInputsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;  
  width: 100%;
  max-width: 560px;
  height: 52px;
  padding: 0.5rem;


  // border
  border-radius: 20px;
  border-bottom: 4px solid transparent;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-sizing: border-box;

  input {
    width: 100%;
    padding-left: 16px;
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.brandColors.backgroundBlack};
  }

  svg {
    cursor: pointer
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`