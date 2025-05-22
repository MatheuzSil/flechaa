import styled, { css } from "styled-components";
import { themes } from "../../Themes/themes";

const Ghost = css`
  ${({  }) => css`
    background: transparent;
    color: ${themes.flecha.brandColors.primary100};
    border: none;

    &:hover {
    }

    &:disabled {
      background: transparent;

      &:hover {
        background: transparent;
      }
    }
  `}
`

const Outline = css`
  ${({  }) => css`
    border: 1px solid ${themes.flecha.brandColors.primary50};
    color: ${themes.flecha.brandColors.primary50};
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }

    &:disabled {

      &:hover {
      }
    }
  `}
`

// const Secondary = css`
//   ${({  }) => css`
//     background: ${themes.brandColors.brandSecondary};
    
//     &:hover {
//     }
//   `}
// `
const Delete = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  &:hover{
    background-color: red;
  }
`


const DeleteOutline = css`
  ${({  }) => css`
    color: red;

    &:hover {
    }

    &:disabled {

      &:hover {
      }
    }
  `}
`

// const Cancel = css`
//   ${({  }) => css`
//     background: ${themes.brandColors.brandSecondary};
//     color: ${themes.brandColors.brand};

//     &:hover {
      
//     }
//   `}
// `

// const White = css`
//   ${({  }) => css`
//     background: ${themes.brandColors.brandSecondary};
//     color: ${themes.brandColors.brand};
    
//     &:hover {
//       background: ${themes.brandColors.brandSecondary};
//     }
//   `}
// `

// const Toolbar = css<any>`
//   ${({ , $active,  $hideColor }) => css`
//     width: 38px;  
//     height: 38px;
//     padding: 0; 

//     ${(!!$active && !$hideColor) && css`
//       background-color: ${themes.brandColors.brandSecondary};

//       &:hover{
//         background-color: rgba(0, 0, 0, 0.8);
//       }
//     `}

//     ${(!$active && !$hideColor) && css`
//       background-color: transparent;

//       path{
//         fill: ${themes.brandColors.brand};
//         stroke: ${themes.brandColors.brand};
//       }

//       &:hover{
//         background-color: ${themes.brandbrandColors.brandSecondary};

//         path{
//         fill: #fff;
//         stroke: #fff;
//         }

//         span{
//           color: #fff;
//         }
//       }
//     `}
     
//   `}
// `

export const Button = styled.button<any>`
  ${({  $variant, $textAlign }) => css`
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 16px;
    min-height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    color: #fff;
    text-align: ${$textAlign || 'center'};
    background: ${themes.flecha.brandColors.primary100};
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }

    &:disabled {
      cursor: not-allowed;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;

      &:hover {
        background: rgba(0, 0, 0, 0.1);}
    }

    ${$variant === 'outline' && Outline}
    ${$variant === 'ghost' && Ghost}
    ${$variant === 'delete' && Delete}
    ${$variant === 'deleteOutline' && DeleteOutline}
  `}
`