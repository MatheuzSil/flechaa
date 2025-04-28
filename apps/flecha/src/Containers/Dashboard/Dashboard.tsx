import styled from 'styled-components';
import { FastRegisterBox } from '../../Components/FastRegisterBox/FastRegisterBox';
import { Header } from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';

import dynamic from 'next/dynamic';
const Arrow = dynamic(() => import('../../Components/Arrow/Arrow'), {
  ssr: false,
});

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Hero />
      <Arrow />
      <FastRegisterBox />
    </>
  );
};
