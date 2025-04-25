'use client';
import React from 'react';
import { useTheme } from 'styled-components';
import { Title } from '../lib/Title/Title';

const application = process.env.REACT_APP_APPLICATION || 'Flecha';

const brandColors = {
  primary50: '#F0F8FF',
  primary100: '#DDEEFF',
  primary200: '#BBEEFF',
  primary300: '#77CCFF',
  primary400: '#33AAFF',
  primary500: '#0099EE',
  primary600: '#0077CC',
  primary700: '#005599',
  primary800: '#004488',
  primary900: '#004477',
  primary950: '#002244',
  backgroundBlack: '#222222',
  backgroundWhite: '#F0F8FF'
};

const fonts = {
  poppins: 'Poppins, sans-serif',
  craftyGirls: 'Crafty Girls',
};

const logo = ({ color, ...props }: any) => {
  const theme: any = useTheme();
  return (
    <Title
      {...props}
      $textAlign="center"
      $fontColor={color || theme.colors.brand}
    >
      {application}
    </Title>
  );
};

const borderRadius = '8px';

export const FlechaTheme = {
  brandColors,
  fonts,
  isDarkMode: '',
  backgroundImage: '',
  logo,
  favicon: '',
  borderRadius,
};
