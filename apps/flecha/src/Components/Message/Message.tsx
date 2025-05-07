import * as S from './Message.styles';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});
import animationData from '../../../public/animations/flecha_message.json';

interface MessageProps {
  isSending: boolean;
}

export default function Message(messageProps: MessageProps) {
  const { isSending } = messageProps;

  return (
    <>
      {isSending && (
        <S.LoadingContainer>
          <Lottie animationData={animationData} autoplay loop style={{ width: 300, height: 300 }} />
        </S.LoadingContainer>
      )}
    </>
  );
}
