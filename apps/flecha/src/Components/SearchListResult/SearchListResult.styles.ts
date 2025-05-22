import { themes } from '@meu-workspace/safira';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  background-color: ${({  }) => themes.flecha.brandColors.primary50};
  margin-bottom: 1.25rem;
  padding: 0rem 1.5rem;
  border-radius: .5rem;

  @media screen and (max-width: 26.5625rem) {
    max-width: 25rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const CardImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: .3125rem;
  margin-right: 1.625rem;
  box-sizing: border-box;
  
  @media screen and (max-width: 26.5625rem) {
    margin-right: 0.4rem;
  }
`;

export const CardName = styled.h2`
  font-size: 1.625rem;
  margin-right: 1.625rem;
  max-width: 14.375rem;
  font-weight: 500;
  color: ${({  }) => themes.flecha.brandColors.backgroundBlack};
  font-family: ${({  }) => themes.flecha.fonts.poppins};

  @media screen and (max-width: 26.5625rem) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

export const CardAgeAndClass = styled.h2`
  font-size: .875rem;
  color: ${({  }) => themes.flecha.brandColors.primary950};
  font-family: ${({  }) => themes.flecha.fonts.poppins};

  @media screen and (max-width: 26.5625rem) {
    font-size: 0.5rem;
  }
`;

export const CardButton = styled.button`
  font-size: .75rem;
  font-weight: medium;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  color: ${({  }) => themes.flecha.brandColors.primary50};
  background-color: ${({  }) => themes.flecha.brandColors.primary950};
  padding: .375rem 1rem;
  border-radius: .3125rem;

  @media screen and (max-width: 26.5625rem) {
    font-size: 0.6rem;
    padding: .375rem 0.5rem;
  }
`;
