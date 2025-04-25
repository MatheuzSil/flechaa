import styled from "styled-components";


const DashboardBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brandColors.backgroundBlack}; 
`


export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <DashboardBackground>
        {children}
      </DashboardBackground>
    </>
  );
}