'use client';
import styled from 'styled-components';
import { useUserInfo } from '../../hooks/useUserInfo';
import { useStatsInfo } from '../../hooks/useStatsInfo';

const DashboardBackground = styled.div`
  width: 100%;
  background: #2B2B2B;
  background: radial-gradient(circle, rgba(43, 43, 43, 1) 0%, rgba(11, 11, 11, 1) 100%);
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  useUserInfo();
  useStatsInfo();

  return (
    <>
      <DashboardBackground>{children}</DashboardBackground>
    </>
  );
}
