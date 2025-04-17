'use client'

import { LoginBackground } from "../../Components/LoginBackground/LoginBackground";


export default function LoginLayout({children,}: {children: React.ReactNode;}) {
  return (
    <>
    <LoginBackground>
      {children}
    </LoginBackground>
    </>
  );
}