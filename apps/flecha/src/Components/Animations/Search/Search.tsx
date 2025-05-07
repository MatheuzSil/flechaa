import * as S from './Search.styles';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animationData from '../../../../public/animations/flecha_search.json';
interface LoadingProps {
  isSearching: boolean;
}

export default function Search(loadingProps: LoadingProps) {
  const { isSearching } = loadingProps;

  return (
    <>
      {isSearching && (
        <S.SearchContainer>
          <Lottie animationData={animationData} loop autoplay />
        </S.SearchContainer>
      )}
    </>
  );
}
