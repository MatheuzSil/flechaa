"use client"
import React from "react";
import { useTheme } from "styled-components";
import { Title } from "../lib/Title/Title";


const application = process.env.REACT_APP_APPLICATION || 'Flecha';

const brandColors = {
  brand: '#F0CC3B',
  brandSecondary: '#FA6845'
};


const logo = ({color, ...props }: any) => {
  const theme: any = useTheme();
  return <Title {...props} $textAlign="center" $fontColor={color || theme.colors.brand}>{application}</Title>
}


const borderRadius = '8px';

export const FlechaTheme = ({brandColors, isDarkMode: '', backgroundImage: '', logo, favicon: '', borderRadius })