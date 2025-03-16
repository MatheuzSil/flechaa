import React from 'react';
import * as S from './Paragraph.styles';

export const Paragraph = ({ text, children, ...props }: any) => {
    return (
        <S.Paragraph {...props}>{text}{children}</S.Paragraph>
    )
}