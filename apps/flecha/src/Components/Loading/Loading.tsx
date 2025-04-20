import animationData from '../../../public/animations/flecha_loading.json';
import * as S from './Loading.styles';
import Lottie from 'react-lottie';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading(loadingProps: LoadingProps) {
  const { isLoading } = loadingProps;
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
      {isLoading && (
        <S.LoadingContainer>
          <Lottie options={defaultOptions} height={400} width={400} />
        </S.LoadingContainer>
      )}
    </>
  );
}
