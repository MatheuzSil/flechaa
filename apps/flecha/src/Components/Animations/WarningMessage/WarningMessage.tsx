import * as S from './WarningMessage.styles';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animationData from '../../../../public/animations/flecha_warning_message.json';

interface WarningMessageProps {
  isSending: boolean;
}

export default function WarningMessage(warningMessageProps: WarningMessageProps) {
  const { isSending } = warningMessageProps;

  return (
    <>
      {isSending && (
        <S.LoadingContainer>
          <Lottie animationData={animationData} autoplay loop style={{ width: 600, height: 600 }} />
        </S.LoadingContainer>
      )}
    </>
  );
}
