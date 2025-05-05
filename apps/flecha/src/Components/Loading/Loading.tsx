import * as S from './Loading.styles';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animationData from '../../../public/animations/flecha_loading.json';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading(loadingProps: LoadingProps) {
  const { isLoading } = loadingProps;

  return (
    <>
      {isLoading && (
        <S.LoadingContainer>
          <Lottie animationData={animationData} autoplay loop style={{ width: 600, height: 600 }} />
        </S.LoadingContainer>
      )}
    </>
  );
}
