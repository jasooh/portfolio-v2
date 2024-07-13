// Data types
import { ReactNode } from "react";

interface InputProps {
  children?: ReactNode;
  id?: string;
  type: string;
  placeholder: string;
}

export default function InputValue({
  children,
  id,
  type,
  placeholder,
}: InputProps) {
  return (
    <input
      id={id || ""}
      type={type}
      placeholder={placeholder}
      className="rounded min-w-64 py-1 px-2 mb-5 shadow text-black"
    >
      {children}
    </input>
  );
}
