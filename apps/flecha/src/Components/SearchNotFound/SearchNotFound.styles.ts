import { themes } from '@meu-workspace/safira';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 4.6875rem;
    height: 4.6875rem;
    margin-right: .625rem;
  }
`

export const NotFoundParagraph = styled.p`
  color: ${({  }) => themes.flecha.brandColors.primary50};
  font-size: 1.125rem;
  font-weight: semibold;
  font-family: ${({  }) => themes.flecha.fonts.poppins};
`;