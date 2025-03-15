import React from 'react';
import { forwardRef, useMemo } from 'react';
import styled, { css } from "styled-components";

const StyledInputContainer = styled.div<any>`
  ${({ $iconOnLeft }) => css`
  width: auto;
  position: relative;
  width: 100%;

  input {
    padding-right: ${$iconOnLeft ? '16px' : '40px'};
    padding-left: ${$iconOnLeft ? '40px' : '16px'};
  }
  `}
`

const StyledIconContainer = styled.div<any>`
  ${({ onClick, $iconOnLeft }) => css`
    position: absolute;
    top: 8px;
    right: ${$iconOnLeft ? 'auto' : '8px'};
    left: ${$iconOnLeft ? '8px' : 'auto'};
    cursor: ${onClick ? 'pointer' : 'default'};
  `} 
`

const InputWithRef: any = forwardRef((props: any, ref: any) => {
  const { icon, onIconClick, iconOnLeft, style, ...inputProps } = props;

  return(
    <StyledInputContainer $iconOnLeft={iconOnLeft}>
      <input {...inputProps} ref={ref} />
        { icon && <StyledIconContainer $iconOnLeft={iconOnLeft} onClick={onIconClick}><props.icon /></StyledIconContainer> }
    </StyledInputContainer>
  )
});

export const Input = styled(InputWithRef)`
  ${({ theme }) => css`
    font-size: 12px;
    padding: 4px 16px;
    border-radius: 8px;
    line-height: 1.4;
    font-size: 16px;
    width: 100%;
    min-height: 38px;
    color: ${theme?.colors?.blackDark};
    background: ${theme?.colors?.whiteLight};

    &::placeholder {
      color: ${theme?.colors?.blackLight};
    }

    &:disabled {
      background: transparent;
    }

    &[type="checkbox"] {
      display: none;
    }
    &[type="color"] {
      padding: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  `}
`