'use client';

import { ParentLoginBackground } from '../../../Components/Background/BackgroundParent';

export default function ParentLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParentLoginBackground>{children}</ParentLoginBackground>
    </>
  );
}
