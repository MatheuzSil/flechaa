import SearchList from '../SearchList/SearchList';
import StatsContainer from '../StatsContainer/StatsContainer';
import * as S from './Hero.styles';

export default function Hero() {
  
  return (
    <S.HeroContainer>
      <S.HeroListContainer>
        <SearchList />
        <StatsContainer />
      </S.HeroListContainer>
    </S.HeroContainer>
  );
}
