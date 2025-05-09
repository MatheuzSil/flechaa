"use client"
import { BuildingIcon, HeartIcon, PersonIcon, PersonsIcon, SmileIcon } from 'apps/flecha/public/icons/icon';
import * as S from './StatsContainer.styles';
import { useDashboardStore } from '../../store/store';


export default function StatsContainer() {
  

  const {totalChildren, totalClasses, totalParents, totalChildrenWithMedicalConditions, totalSpecialChildren} = useDashboardStore((state) => state.statistics);

  const stats = [
    {
      title: 'Total de crianças cadastradas',
      value: totalChildren,
      icon: <PersonIcon />
    },
    {
      title: 'Total de turmas/salas:',
      value: totalClasses,
      icon: <BuildingIcon />
    },
    {
      title: 'Total de responsáveis cadastrados',
      value: totalParents,
      icon: <PersonsIcon />
    },
    {
      title: 'Total de crianças com condições de saude',
      value: totalChildrenWithMedicalConditions,
      icon: <HeartIcon />
    },
    {
      title: 'Total de crianças especiais',
      value: totalSpecialChildren,
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
      <S.Disclaimer>* Estatísticas atualizadas a cada 1 semana.</S.Disclaimer>
    </S.StatsContainer>
  );
}
