import * as S from './ModalCard.styles';
import { HiOutlineX } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { ModalChildInfo } from '../../Components/ModalChildInfo/ModalChildInfo';


export const ModalCard = ({onClose, childInfo}:any) => {
  console.log(childInfo)

  return(
    <>
      <S.ModalOverlay onClick={onClose}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ButtonContainer>
              <HiOutlineX size={30} color="#222222" onClick={onClose} />
            </S.ButtonContainer>
            <IoIosSettings size={30} color="#222222" />
          </S.ModalHeader>
          <ModalChildInfo childInfo={childInfo} />
        </S.ModalContainer>
      </S.ModalOverlay>
    </>
  )

}