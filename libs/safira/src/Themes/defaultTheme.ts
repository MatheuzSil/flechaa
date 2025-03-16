


export const defaultTheme = ({brandColors, isDarkMode, backgroundImage, logo, favicon, borderRadius }: any) => {

return {
  colors: {
    brand: brandColors.brand,
    brandSecondary: brandColors.brandSecondary,
    background: isDarkMode ? '#000000' : '#FFFFFF',
  },
  backgroundImage: backgroundImage,
  logo: logo,
  favicon: favicon,
  borderRadius: borderRadius,
};
 
}