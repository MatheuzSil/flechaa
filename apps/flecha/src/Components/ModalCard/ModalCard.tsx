import * as S from './ModalCard.styles';
import { HiOutlineX } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";


export const ModalCard = ({onClose}:any) => {

  return(
    <>
      <S.ModalOverlay>
        <S.ModalContainer >
          <S.ModalHeader>
            <HiOutlineX size={30} color="#222222" onClick={onClose} />
            <IoIosSettings size={30} color="#222222" />
          </S.ModalHeader>
        </S.ModalContainer>
      </S.ModalOverlay>
    </>
  )

}