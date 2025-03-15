'use client'

import { ThemeProvider, themes } from "@meu-workspace/safira";

const theme: keyof typeof themes = process.env.THEME as keyof typeof themes || 'flecha';

export const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );

}