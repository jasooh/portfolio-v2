// Data types
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export default function ActionButton({ children, onClick }: ButtonProps) {
  return (
    <button
      className="group p-2 bg-theme-main flex items-center gap-2 font-semibold rounded hover:bg-white hover:scale-105 hover:text-theme-main duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
