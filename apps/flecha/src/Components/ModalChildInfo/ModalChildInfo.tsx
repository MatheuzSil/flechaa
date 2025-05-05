import { EmergencyButtonIcon, WhastappIcon } from 'apps/flecha/public/icons/icon';
import * as S from './ModalChildInfo.styles';
import { Paragraph } from '@meu-workspace/safira';


export const ModalChildInfo = ({childInfo}: any) => {
  const {name, age, id} = childInfo;

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
              <S.ChildClass>Turma: Jardim 1</S.ChildClass>
            </S.ClassAndAgeContainer>
            <S.CallButtonsContainer>
              <S.CallButton><WhastappIcon /> Contatar Pais</S.CallButton>
              <S.CallButtonEmergency><EmergencyButtonIcon/> Acionar Emergência</S.CallButtonEmergency>
            </S.CallButtonsContainer>
          </S.ChildInfoContent>
          
          <S.OtherInfoContainer>
            <Paragraph $fontSize="12px" $fontColor="#333D54">ID: {id}</Paragraph>
            <Paragraph $fontSize="12px" $fontColor="#333D54"><strong>Condição Principal:</strong> Alérgico a sorvete</Paragraph>
          </S.OtherInfoContainer>

        </S.ChildInfoContainer>


      </S.ModalChildInfoContainer>
    </>
  )
  
}