import * as S from './Scanning.styles';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animationData from '../../../../public/animations/flecha_scanning.json';
interface LoadingProps {
  isScanning: boolean;
}

export default function Scanning(loadingProps: LoadingProps) {
  const { isScanning } = loadingProps;

  return (
    <>
      {isScanning && (
        <S.ScanningContainer>
          <Lottie animationData={animationData} loop autoplay style={{ width: 100, height: 100 }} />
        </S.ScanningContainer>
      )}
    </>
  );
}
