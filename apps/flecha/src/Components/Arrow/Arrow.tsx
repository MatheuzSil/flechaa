import Lottie from 'react-lottie';
import animationData from '../../../public/animations/flecha_arrow.json';

export default function Arrow() {
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
      <Lottie options={defaultOptions} height={100} width={100} style={{position: 'fixed', left:"50%", bottom:"0" }} />
    </>
  );
}