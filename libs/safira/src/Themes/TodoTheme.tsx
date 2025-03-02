import React from "react";
import { useTheme } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import { Title } from "../lib/Title/Title";


const application = process.env.REACT_APP_APPLICATION || 'TodoList';   


const brandColors = {
  primary: '#4FBA74',
  secondary: '#242424'
};



const logo = ({color, ...props }: any) => {
  const theme: any = useTheme();
  return <Title {...props} $textAlign="center" $fontColor={color || theme.colors.brand}>{application}</Title>
}

const borderRadius = '8px';

export const TodoTheme = defaultTheme({brandColors, isDarkMode: false, backgroundImage: '', logo, favicon: '', borderRadius});