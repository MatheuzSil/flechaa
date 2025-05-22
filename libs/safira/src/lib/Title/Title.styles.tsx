import { themes } from "@meu-workspace/safira";
import React from "react";
import styled, {css} from "styled-components";


const variantFontSize: any = { 
  h1: ["28px","34px", "38px"],
  h2: ["24px","30px", "34px"],
  h3: ["20px","26px", "30px"], 
  h4: ["16px","22px", "26px"], 
  h5: ["15px","18px", "22px"],
  h6: ["14px","16px", "18px"] 
};

export const Title = styled(({ variant, ...props }:any) => { const Comp = variant || 'h1';  return <Comp {...props} />})<any>`
  ${({ $fontSize, $textAlign, $fontColor, variant, $clamp }) => css`
    font-size: ${$fontSize || variantFontSize[variant][0]};
    color: ${$fontColor || themes?.flecha.brandColors?.primary800};
    text-align: ${$textAlign || "start"};
    line-height: 1.2;

    @media screen and (min-width: 425px) {
      font-size: ${$fontSize || variantFontSize[variant][1]};
    }

    @media screen and (min-width: 768px) {
      font-size: ${$fontSize || variantFontSize[variant][2]};
    }

    ${$clamp && css`
      display: -webkit-box;
      -webkit-line-clamp: ${$clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
  `}
`