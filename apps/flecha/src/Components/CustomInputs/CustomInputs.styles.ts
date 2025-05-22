import { SelectIcon } from 'apps/flecha/public/icons/icon';
import styled from 'styled-components';
import { themes } from '@meu-workspace/safira';

export const CalendarPopup = styled.div`
  position: absolute;
  top: 3.75rem;
  left: 0;
  z-index: 10;
  background: white;
  border-radius: .75rem;
  padding: 1rem;
  box-shadow: 0 0 0 2px ${({ }) => themes.flecha.brandColors.primary400};
  width: 20rem;

  .rdp-root {
    --rdp-accent-color: ${({ }) => themes.flecha.brandColors.primary400};
    --rdp-background-color: transparent;
    font-family: inherit;
  }

  .rdp-day_selected:not([disabled]),
  .rdp-day_today {
    border: .125rem solid ${({ }) => themes.flecha.brandColors.primary400};
    color: #000;
    background: none;
    border-radius: 50%;
  }

  .rdp-day_outside {
    color: #d0d0d0;
  }

  .rdp-caption {
    font-weight: bold;
    color: ${({ }) => themes.flecha.brandColors.primary400};
    display: flex;
    justify-content: center;
    gap: .5rem;
  }

  .rdp-nav_button {
    color: ${({ }) => themes.flecha.brandColors.primary400};
  }
`;

export const CustomInputsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;  
  width: 100%;
  max-width: 35rem;
  height: 3.25rem;
  padding: 0.5rem;


  // border
  border-radius: 1.25rem;
  border-bottom: .25rem solid transparent;
  background-image: 
    linear-gradient(white, white),
    linear-gradient(90deg, rgba(56, 172, 255, 1) 0%, rgba(136, 51, 255, 1) 50%, rgba(255, 112, 51, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-sizing: border-box;

  input {
    width: 100%;
    padding-left: 1rem;
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    font-family: ${({  }) => themes.flecha.fonts.poppins};
    color: ${({  }) => themes.flecha.brandColors.backgroundBlack};
  }

  svg {
    cursor: pointer
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`

export const RotatableSelectIcon = styled(SelectIcon)<{ rotated?: boolean }>`
  transform: ${({ rotated }) => (rotated ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const SelectClassListWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const SelectClassList = styled.ul`
  position: absolute;
  width: 100%;
  max-width: 35rem;
  background-color: #fff;
  border-radius: .5rem;
  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 0.25rem 0;
  margin: 0;
`;

export const ClassListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 1rem;
    color: #333;
    margin-left: 1rem;
  }
`;

export const SelectedParentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  background: none;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  color: ${({  }) => themes.flecha.brandColors.backgroundBlack};

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 1rem;
    color: #333;
    margin-left: 1rem;
  }
`
