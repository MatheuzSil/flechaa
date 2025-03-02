


export const defaultTheme = ({brandColors, isDarkMode, backgroundImage, logo, favicon, borderRadius }: any) => {

return {
  colors: {
    primary: brandColors.primary,
    secondary: brandColors.secondary,
    background: isDarkMode ? '#000000' : '#FFFFFF',
  },
  backgroundImage: backgroundImage,
  logo: logo,
  favicon: favicon,
  borderRadius: borderRadius,
};
 
}