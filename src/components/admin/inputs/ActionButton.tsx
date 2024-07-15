// Data types
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ActionButton({
  children,
  onClick,
  className,
}: ButtonProps) {
  const style = className;

  return (
    <button
      className={
        "group p-2 bg-theme-main flex items-center gap-2 text-white font-semibold rounded hover:bg-white hover:scale-105 hover:text-theme-main duration-200 " +
        style
      }
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
