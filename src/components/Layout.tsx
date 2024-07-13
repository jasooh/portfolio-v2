// Data types
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="overflow-hidden w-full min-h-screen h-fit flex justify-center bg-gradient-to-b from-theme-bg to-black">
      {children}
    </div>
  );
}
