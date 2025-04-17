'use client';

import { LoginBackground } from '../../Components/Background/Background';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoginBackground>{children}</LoginBackground>
    </>
  );
}
