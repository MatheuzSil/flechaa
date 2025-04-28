import * as S from './ModalCard.styles';
import { HiOutlineX } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { ModalChildInfo } from '../../Components/ModalChildInfo/ModalChildInfo';


export const ModalCard = ({onClose}:any) => {

  return(
    <>
      <S.ModalOverlay>
        <S.ModalContainer >
          <S.ModalHeader>
            <S.ButtonContainer>
              <HiOutlineX size={30} color="#222222" onClick={onClose} />
            </S.ButtonContainer>
            <IoIosSettings size={30} color="#222222" />
          </S.ModalHeader>
          <ModalChildInfo />
          <div style={{borderTop: "1px solid #8F95A6", opacity: "20%"}}></div>
        </S.ModalContainer>
      </S.ModalOverlay>
    </>
  )

}