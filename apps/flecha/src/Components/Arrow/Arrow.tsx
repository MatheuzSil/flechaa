'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
        options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  );
}
