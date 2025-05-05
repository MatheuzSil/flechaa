import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './ModalChildInfo.styles';
import { Paragraph } from '@meu-workspace/safira';

export const ModalChildInfoSkeleton = () => {
  return (
    <>
      <S.ModalChildInfoContainer>
        <S.ChildPhotoContainer>
          <Skeleton circle width={128} height={128} />
        </S.ChildPhotoContainer>

        <S.ChildInfoContainer>
          <S.ChildInfoContent>
            <S.ChildName><Skeleton width={200} height={40} /></S.ChildName>
            <S.ClassAndAgeContainer>
              <Skeleton width={100} height={20} />
              <Skeleton width={100} height={20} />
            </S.ClassAndAgeContainer>
            <S.CallButtonsContainer>
              <Skeleton width={150} height={40} />
              <Skeleton width={200} height={40} />
            </S.CallButtonsContainer>
          </S.ChildInfoContent>

          <S.OtherInfoContainer>
            <Paragraph $fontSize="12px" $fontColor="#333D54"><Skeleton width={100} /></Paragraph>
            <Paragraph $fontSize="18px" $fontColor="#333D54"><Skeleton width={200} /></Paragraph>
          </S.OtherInfoContainer>
        </S.ChildInfoContainer>
      </S.ModalChildInfoContainer>

      <div style={{ borderTop: "1px solid #8F95A6", opacity: "20%" }}></div>

      <S.ModalChildInfoContainer>
  <S.MoreInfoContainer>
    <div>
      <Paragraph $fontSize="18px" $fontColor="#333D54">
        <Skeleton width={180} height={20} /> {/* Label */}
      </Paragraph>
      <Paragraph $fontSize="18px" $fontColor="#333D54">
        <Skeleton width={160} height={20} /> {/* Value */}
      </Paragraph>
    </div>
    <div>
      <Paragraph $fontSize="18px" $fontColor="#333D54">
        <Skeleton width={180} height={20} /> {/* Label */}
      </Paragraph>
      <Paragraph $fontSize="18px" $fontColor="#333D54">
        <Skeleton width={140} height={20} /> {/* Value */}
      </Paragraph>
    </div>
    <div>
      <Paragraph $fontSize="18px" $fontColor="#333D54">
        <Skeleton width={180} height={20} /> {/* Label */}
      </Paragraph>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
        <Skeleton width={160} height={16} />
        <Skeleton width={140} height={16} />
        <Skeleton width={120} height={16} />
      </div>
    </div>
  </S.MoreInfoContainer>
      </S.ModalChildInfoContainer>
      <div style={{ borderTop: "1px solid #8F95A6", opacity: "20%" }}></div>
    </>
  );
};
