import { Paragraph, Title } from '@meu-workspace/safira';
import styled from 'styled-components';

export const StatsListTitle = styled.h1`
  color: ${({ theme }) => theme.brandColors.primary50};
  font-size: 36px;
  font-weight: semibold;
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


export const StatsListBoxsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
`;

export const StatsListBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  height: 72px;
  background-color: ${({ theme }) => theme.brandColors.primary950};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export const StatsTitleAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const StatsListBoxIcon = styled.div``

export const StatsListBoxTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 16px;
  color: ${({ theme }) => theme.brandColors.primary50};
  font-weight: 300;
`

export const StatsListBoxValue = styled(Paragraph)`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 16px;
  color: ${({ theme }) => theme.brandColors.primary400};
  font-weight: bold;
`