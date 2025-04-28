import * as S from './DashboardFooter.styles'

export default function DashboardFooter() {
  return (
    <S.FooterContainer>
      <S.FooterContents>
        <S.FooterFlechaIcon src="/flecha_icon3.svg" alt="Flecha" />
        <S.FooterContactContainer>
          <S.FooterContactTitle>Contato</S.FooterContactTitle>
          <S.FooterContactText>+55 (11) 4002-8922</S.FooterContactText>
          <S.FooterContactText>email_matheus@dominio.tld</S.FooterContactText>
          <S.FooterContactText>email_richard@dominio.tld</S.FooterContactText>
        </S.FooterContactContainer>
      </S.FooterContents>
      <S.FooterPoweredBy>powered by Richard & Matheus</S.FooterPoweredBy>
    </S.FooterContainer>
  );
}