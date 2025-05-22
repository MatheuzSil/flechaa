import { themes } from '@meu-workspace/safira';
import styled from 'styled-components';

export const SearchListTitle = styled.h1`
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-size: 2.25rem;
  font-weight: semibold;
  font-family: ${({  }) => themes.flecha.fonts.poppins};

  @media screen and (max-width: 26.5625rem) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 1.4rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 1.25rem;

  @media screen and (max-width: 90rem) {
    max-width: 43.75rem;
    margin: 0 0 1.25rem 0;
  }
`;

export const FiltrosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.25rem;
  
  @media screen and (max-width: 26.5625rem) {
    max-width: 25rem;
  }
`;

export const FiltroInput = styled.input`
  width: 60%;
  height: 2.25rem;
  background-color: ${({  }) => themes.flecha.brandColors.primary50};
  border-radius: .5rem;
  border: none;
  font-size: 1rem;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-weight: 300;
  color: ${({  }) => themes.flecha.brandColors.primary800};
  margin-right: 1.25rem;
  padding-left: 1.5rem;
`;

export const FiltroSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 40%;
`;

export const FiltroSelectTitle = styled.h2`
  color: ${({  }) => themes.flecha.brandColors.primary400};
  font-size: 1rem;
  font-weight: semibold;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
`;

export const FiltroList = styled.select`
  width: 100%;
  height: 2.25rem;
  background: none;
  font-size: 1rem;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  color: ${({  }) => themes.flecha.brandColors.primary50};
  border: none;
  cursor: pointer;

  & option {
    background-color: ${({  }) => themes.flecha.brandColors.backgroundBlack};
    border: none;
  }
`;

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1.25rem;
`;
