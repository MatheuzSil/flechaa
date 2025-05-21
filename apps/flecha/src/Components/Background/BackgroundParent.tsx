import React from 'react';
import * as S from './BackgroundParent.styles';

export const ParentLoginBackground = ({ children }: any) => {
  return (
    <>
      <S.ParentLoginBackgroundContainer />
      {children}
    </>
  );
};
