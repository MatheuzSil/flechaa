import { useEffect, useState } from 'react';
import * as S from './Header.styles';
import { ArrowIcon, ProfileIcon } from 'apps/flecha/public/icons/icon';

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

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
        <S.HeaderFlechaIcon src="/flecha_logo3.svg" alt="Flecha" />
        <S.HeaderProfileContainer>
          <ProfileIcon />
          <S.HeaderProfileName>Nome do Usuário</S.HeaderProfileName>
          <ArrowIcon />
        </S.HeaderProfileContainer>
      </S.HeaderContents>
    </S.HeaderContainer>
  );
};
