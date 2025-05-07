'use client';
import styled from 'styled-components';
import { useUserInfo } from '../../hooks/useUserInfo';

const DashboardBackground = styled.div`
  width: 100%;
  
  background-color: ${({ theme }) => theme.brandColors.backgroundBlack};
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  useUserInfo();

  return (
    <>
      <DashboardBackground>{children}</DashboardBackground>
    </>
  );
}
