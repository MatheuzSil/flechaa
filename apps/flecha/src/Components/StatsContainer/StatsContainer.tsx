import { BuildingIcon, HeartIcon, PersonIcon, PersonsIcon, SmileIcon } from 'apps/flecha/public/icons/icon';
import * as S from './StatsContainer.styles';


export default function StatsContainer() {

  const stats = [
    {
      title: 'Total de crianças cadastradas',
      value: 1000,
      icon: <PersonIcon />
    },
    {
      title: 'Total de turmas/salas:',
      value: 10,
      icon: <BuildingIcon />
    },
    {
      title: 'Total de responsáveis cadastrados',
      value: 500,
      icon: <PersonsIcon />
    },
    {
      title: 'Total de crianças com condições de saude',
      value: 120,
      icon: <HeartIcon />
    },
    {
      title: 'Total de crianças especiais',
      value: 20,
      icon: <SmileIcon />
    },
    

  ]

  return (
    <S.StatsContainer>
      <S.StatsListTitle>Plataforma Estatísticas:</S.StatsListTitle>
      <S.StatsListBoxsContainer>
        {stats.map((stat, index) => (
          <S.StatsListBox key={index}>
            <S.StatsTitleAndIconContainer>
              <S.StatsListBoxIcon>{stat.icon}</S.StatsListBoxIcon>
              <S.StatsListBoxTitle>{stat.title}</S.StatsListBoxTitle>
            </S.StatsTitleAndIconContainer>
            <S.StatsListBoxValue>{stat.value} (#)</S.StatsListBoxValue>
          </S.StatsListBox>
        ))}
      </S.StatsListBoxsContainer>
    </S.StatsContainer>
  );
}
