import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 75px;
    height: 75px;
    margin-right: 10px;
  }
`

export const NotFoundParagraph = styled.p`
  color: ${({ theme }) => theme.brandColors.primary50};
  font-size: 18px;
  font-weight: semibold;
  font-family: ${({ theme }) => theme.fonts.poppins};
`;