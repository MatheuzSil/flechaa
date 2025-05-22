import { themes } from "@meu-workspace/safira";
import styled, { css } from "styled-components";

export const Paragraph = styled.p<any>`
  ${({  $fontSize, $textAlign, $lineHeight, $fontWeight, $fontColor, $clamp, $fontStyle, $fontFamily }) => css`
    font-size: ${$fontSize || '12px'};
    text-align: ${$textAlign || 'left'};
    font-weight: ${$fontWeight || 'normal'};
    font-family: ${$fontFamily || themes?.flecha.fonts?.poppins};
    color: ${$fontColor || themes?.flecha.brandColors?.primary800};
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