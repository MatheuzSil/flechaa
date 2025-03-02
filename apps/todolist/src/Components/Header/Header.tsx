import { useTheme } from "styled-components";
import *as S from './Header.styles';



export const Header = () => {
const theme:any = useTheme();

return(
  <S.HeaderContainer>
    <theme.logo>TodoList</theme.logo>
  </S.HeaderContainer>
)

}