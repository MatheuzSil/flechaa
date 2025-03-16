import styled, { css } from "styled-components";

export const Paragraph = styled.p<any>`
  ${({ theme , $fontSize, $textAlign, $lineHeight, $fontWeight, $fontColor, $clamp, $fontStyle  }) => css`
    font-size: ${$fontSize || '12px'};
    text-align: ${$textAlign || 'left'};
    font-weight: ${$fontWeight || 'normal'};
    color: ${$fontColor || theme?.colors?.blackDark};
    font-style: ${$fontStyle || 'normal'};
    line-height: ${$lineHeight || '1.2'};
    ${$clamp && css`
      display: -webkit-box;
      -webkit-line-clamp: ${$clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

    @media screen and (min-width: 425px) {
      font-size: 14px;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  `}
`