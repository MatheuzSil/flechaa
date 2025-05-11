import { useEffect, useState } from 'react';
import * as S from './Header.styles';
import { ArrowIcon, ProfileIcon } from 'apps/flecha/public/icons/icon';
import { useUserStore } from '../../store/store';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const name = useUserStore((state) => state.name);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) { // quando scrollar mais de 100px
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <S.HeaderContainer isFixed={isFixed}>
      <S.HeaderContents>
        <S.HeaderFlechaIcon onClick={() => router.push("/dashboard")} src="/flecha_logo.svg" alt="Flecha" />
        <S.HeaderProfileContainer>
          <ProfileIcon />
          <S.HeaderProfileName>{name}</S.HeaderProfileName>
          <ArrowIcon />
        </S.HeaderProfileContainer>
      </S.HeaderContents>
    </S.HeaderContainer>
  );
};
