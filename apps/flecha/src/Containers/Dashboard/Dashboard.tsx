import { Header } from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';
import { FastRegisterBox } from '../../Components/FastRegisterBox/FastRegisterBox';

import dynamic from 'next/dynamic';
const Arrow = dynamic(() => import('../../Components/Animations/Arrow/Arrow'), {
  ssr: false,
});

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Hero />
      <Arrow />
      <FastRegisterBox />
      <DashboardFooter />
    </>
  );
};
