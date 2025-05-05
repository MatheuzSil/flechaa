'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animationData from '../../../public/animations/flecha_arrow.json';

export default function Arrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const distanceFromBottom = totalHeight - (scrollTop + viewportHeight);

      setIsVisible(distanceFromBottom > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        bottom: '0',
        transform: 'translateX(-50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: 'none', // Optional: lets clicks pass through
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: 100, height: 100 }}
        autoplay
        loop
      />
    </div>
  );
}
