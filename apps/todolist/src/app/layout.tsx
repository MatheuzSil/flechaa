"use client"

import { Title } from '@meu-workspace/safira';
import { StyledComponentsRegistry } from './registry';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
