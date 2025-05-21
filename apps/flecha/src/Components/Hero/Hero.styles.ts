import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12em;
`;

export const HeroListContainer = styled.section`
  display: flex;
  max-width: 89.375rem;
  min-height: 41.375rem;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: 90rem) {
    flex-direction: column;
    align-items: center;
  }
`;
