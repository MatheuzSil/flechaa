import animationData from '../../../public/animations/flecha_search.json';
import * as S from './Search.styles';
import Lottie from 'react-lottie';

interface LoadingProps {
  isSearching: boolean;
}

export default function Search(loadingProps: LoadingProps) {
  const { isSearching } = loadingProps;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {isSearching && (
        <S.SearchContainer>
          <Lottie options={defaultOptions} />
        </S.SearchContainer>
      )}
    </>
  );
}
