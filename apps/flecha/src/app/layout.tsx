'use client';
import { useMemo } from 'react';
import { StyledComponentsRegistry } from './registry';
import { themes } from '@meu-workspace/safira';
import { Providers } from '../Components/Providers/Providers';
import { Bounce, ToastContainer } from 'react-toastify';
import { useLoadingStore } from '../store/store';
import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('../Components/Loading/Loading'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const applicationTitle = process.env.APPLICATION || 'Flecha';
  const theme = useMemo(
    () => themes[process.env.THEME as keyof typeof themes],
    []
  );

  const isLoading = useLoadingStore((state) => state.isActive);
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <title>{applicationTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Crafty+Girls&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Loading isLoading={isLoading} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
