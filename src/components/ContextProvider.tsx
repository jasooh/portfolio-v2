// Context providers
import { AuthProvider } from "@/context/AuthContext";
import { SectionProvider } from "@/context/SectionContext";
import { ReactNode } from "react";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <SectionProvider>{children}</SectionProvider>
    </AuthProvider>
  );
}
