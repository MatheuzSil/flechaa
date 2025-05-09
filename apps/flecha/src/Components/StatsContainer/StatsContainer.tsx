"use client"
import { BuildingIcon, HeartIcon, PersonIcon, PersonsIcon, SmileIcon } from 'apps/flecha/public/icons/icon';
import * as S from './StatsContainer.styles';
import { useStatsStore } from '../../store/store';
import { usePlatformStats } from '../../hooks/usePlatformStats';
import { use, useEffect } from 'react';

export default function StatsContainer() {
  usePlatformStats(); // Chama o hook para buscar as estatísticas da plataforma
  const { totalCriancas, totalSalas, totalResponsaveis, totalComSaude, totalEspeciais } = useStatsStore(); // Pegamos um valor para comparar
  

  const stats = [
    {
      title: 'Total de crianças cadastradas',
      value: totalCriancas,
      icon: <PersonIcon />
    },
    {
      title: 'Total de turmas/salas:',
      value: totalSalas,
      icon: <BuildingIcon />
    },
    {
      title: 'Total de responsáveis cadastrados',
      value: totalResponsaveis,
      icon: <PersonsIcon />
    },
    {
      title: 'Total de crianças com condições de saude',
      value: totalComSaude,
      icon: <HeartIcon />
    },
    {
      title: 'Total de crianças especiais',
      value: totalEspeciais,
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
