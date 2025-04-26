import styled, { keyframes } from 'styled-components';
import { FastRegisterBox } from '../../Components/FastRegisterBox/FastRegisterBox';
import { Header } from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import { FaArrowDown } from "react-icons/fa";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const ArrowAnimatedIcon = styled.span`
  display: inline-block;
  font-size: 2rem;
  color: ${({ theme }) => theme.brandColors.primary700};

  svg {
    animation: ${bounce} 5s infinite;
    display: block;
  }
`;

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <ArrowAnimatedIcon>
          <FaArrowDown />
        </ArrowAnimatedIcon>
      </div>
      <FastRegisterBox />
    </>
  );
};
