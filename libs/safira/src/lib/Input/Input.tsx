import React from 'react';
import * as S from './Input.styles'

export const Input = ((props:any, ref:any) => {

  switch(props.type){

    default:
      return <S.Input {...props} />
  }

})