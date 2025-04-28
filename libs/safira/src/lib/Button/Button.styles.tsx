import styled, { css } from "styled-components";

const Ghost = css`
  ${({ theme }) => css`
    background: transparent;
    color: ${theme.brandColors.brand};
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
  ${({ theme }) => css`
    border: 1px solid ${theme.brandColors.primary50};
    color: ${theme.brandColors.primary50};
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

const Secondary = css`
  ${({ theme }) => css`
    background: ${theme.brandColors.brandSecondary};
    
    &:hover {
    }
  `}
`
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
  ${({ theme }) => css`
    color: red;

    &:hover {
    }

    &:disabled {

      &:hover {
      }
    }
  `}
`

const Cancel = css`
  ${({ theme }) => css`
    background: ${theme.brandColors.brandSecondary};
    color: ${theme.brandColors.brand};

    &:hover {
      
    }
  `}
`

const White = css`
  ${({ theme }) => css`
    background: ${theme.brandColors.brandSecondary};
    color: ${theme.brandColors.brand};
    
    &:hover {
      background: ${theme.brandColors.brandSecondary};
    }
  `}
`

const Toolbar = css<any>`
  ${({ theme, $active,  $hideColor }) => css`
    width: 38px;  
    height: 38px;
    padding: 0; 

    ${(!!$active && !$hideColor) && css`
      background-color: ${theme.brandColors.brandSecondary};

      &:hover{
        background-color: rgba(0, 0, 0, 0.8);
      }
    `}

    ${(!$active && !$hideColor) && css`
      background-color: transparent;

      path{
        fill: ${theme.brandColors.brand};
        stroke: ${theme.brandColors.brand};
      }

      &:hover{
        background-color: ${theme.brandbrandColors.brandSecondary};

        path{
        fill: #fff;
        stroke: #fff;
        }

        span{
          color: #fff;
        }
      }
    `}
     
  `}
`

export const Button = styled.button<any>`
  ${({ theme, $variant, $textAlign }) => css`
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
    background: ${theme.brandColors.brand};
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
    ${$variant === 'secondary' && Secondary}
    ${$variant === 'ghost' && Ghost}
    ${$variant === 'delete' && Delete}
    ${$variant === 'deleteOutline' && DeleteOutline}
    ${$variant === 'cancel' && Cancel}
    ${$variant === 'white' && White}
    ${$variant === 'toolbar' && Toolbar }
  `}
`