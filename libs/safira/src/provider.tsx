"use client"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { GlobalStyles } from "@meu-workspace/safira"

export const ThemeProvider = ({ theme, children }: any) => {
  return (
    <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </StyledThemeProvider>
  )
}