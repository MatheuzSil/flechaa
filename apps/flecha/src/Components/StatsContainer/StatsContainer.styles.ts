import { Paragraph, themes, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const StatsListTitle = styled.h1`
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-size: 2.25rem;
  font-weight: semibold;
  font-family: ${({  }) => themes.flecha.fonts.poppins};

  @media screen and (max-width: 26.5625rem) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 1.4rem;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 26.5625rem) {
    max-width: 25rem;
  }
`;

export const StatsListBoxsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  margin-top: 1.25rem;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    gap: .625rem;
    margin-top: .625rem;
  }
`;

export const StatsListBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 43.75rem;
  height: 4.5rem;
  background-color: ${({  }) => themes.flecha.brandColors.primary950};
  border-radius: ${({  }) => themes.flecha.borderRadius};
  padding: 1.25rem;
  box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
`

export const StatsTitleAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  @media screen and (max-width: 26.5625rem) {
    max-width: 18.75rem;
  }

  @media screen and (max-width: 20rem) {
    max-width: 12.5rem;
  }
`

export const StatsListBoxIcon = styled.div``

export const StatsListBoxTitle = styled(Title)`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-size: 1rem;
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-weight: 300;
`

export const StatsListBoxValue = styled(Paragraph)`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-size: 1rem;
  color: ${({  }) => themes.flecha.brandColors.primary400};
  font-weight: bold;
`

export const Disclaimer = styled(Paragraph)`
  font-family: ${({  }) => themes.flecha.fonts.poppins};
  font-size: 1rem;
  color: #888888;
  font-weight: 700;
  margin-top: 1.25rem;
  text-align: center;
`