'use client';
import styled from 'styled-components';

const DashboardBackground = styled.div`
  width: 100%;
  
  background-color: ${({ theme }) => theme.brandColors.backgroundBlack};
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardBackground>{children}</DashboardBackground>
    </>
  );
}
