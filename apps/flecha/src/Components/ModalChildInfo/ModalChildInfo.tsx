import { EmergencyButtonIcon, WhastappIcon } from 'apps/flecha/public/icons/icon';
import * as S from './ModalChildInfo.styles';
import { Paragraph } from '@meu-workspace/safira';
import { useChildModal } from '../../graphql/hooks/useChildModal';
import { ModalChildInfoSkeleton } from './ModalChildInfoSkeleton';
import { formatMedicalConditions } from '../../utils/general';

interface ChildInfoProps {
  childInfo: {
    name: string;
    age: number;
    id: string;
    class: string;
  };
}

export const ModalChildInfo = (props: ChildInfoProps) => {
  const {name, age, id, class: childclass} = props.childInfo;
  const { data, loading, error } = useChildModal(id);
  
  if (error || !data || !data.getChildModal || loading) return <ModalChildInfoSkeleton />;
  const { birthDate, medicalConditions, parent } = data.getChildModal;

  return(
    <>
      <S.ModalChildInfoContainer>
        <S.ChildPhotoContainer>
          <S.ChildPhoto src='/icons/profile_placeholder.svg' />
        </S.ChildPhotoContainer>
        <S.ChildInfoContainer>
          <S.ChildInfoContent>
              <S.ChildName>{name}</S.ChildName>
            <S.ClassAndAgeContainer>
              <S.ChildAge>Idade: {age} anos</S.ChildAge>
              <S.ChildClass>Turma: {childclass}</S.ChildClass>
            </S.ClassAndAgeContainer>
            <S.CallButtonsContainer>
              <S.CallButton><WhastappIcon /> Contatar Pais</S.CallButton>
              <S.CallButtonEmergency><EmergencyButtonIcon/> Acionar Emergência</S.CallButtonEmergency>
            </S.CallButtonsContainer>
          </S.ChildInfoContent>
          
          <S.OtherInfoContainer>
            <Paragraph $fontSize="12px" $fontColor="#333D54">ID: {id}</Paragraph>
            <Paragraph $fontSize="18px" $fontColor="#333D54"><strong>Condição Principal:</strong> {medicalConditions.length < 1 ? "Nenhuma Condição Médica" : medicalConditions[0]}</Paragraph>
          </S.OtherInfoContainer>

        </S.ChildInfoContainer>
      </S.ModalChildInfoContainer>
      <div style={{borderTop: "1px solid #8F95A6", opacity: "20%"}}></div>
      <S.ModalChildInfoContainer>
        <S.MoreInfoContainer>
          <div>
            <Paragraph $fontSize="18px" $fontColor="#333D54"><strong>Nome do Responsável:</strong></Paragraph>
            <Paragraph $fontSize="18px" $fontColor="#333D54">{parent.name}</Paragraph>
          </div>
          <div>
            <Paragraph $fontSize="18px" $fontColor="#333D54"><strong>Data de Nascimento:</strong></Paragraph>
            <Paragraph $fontSize="18px" $fontColor="#333D54">{birthDate}</Paragraph>
          </div>
          <div>
            <Paragraph $fontSize="18px" $fontColor="#333D54"><strong>Outras Condições:</strong></Paragraph>
            <Paragraph $fontSize="18px" $fontColor="#333D54">{formatMedicalConditions(medicalConditions)}</Paragraph>
          </div>
        </S.MoreInfoContainer>
      </S.ModalChildInfoContainer>
      <div style={{borderTop: "1px solid #8F95A6", opacity: "20%"}}></div>
    </>
  )
}