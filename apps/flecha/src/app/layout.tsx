'use client'
import { useMemo } from 'react';
import { StyledComponentsRegistry } from './registry';
import { themes } from '@meu-workspace/safira';
import { Providers } from '../Components/Providers/Providers';


export default function RootLayout({children,}: {children: React.ReactNode;}) {
  const applicationTitle = process.env.APPLICATION || 'Flecha';
  const theme = useMemo(() => themes[process.env.THEME as keyof typeof themes], []);
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <title>{applicationTitle}</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
              {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
