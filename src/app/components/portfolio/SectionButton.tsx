import { ReactNode } from "react";

// Components
import { VscChevronRight } from "react-icons/vsc";

interface SectionButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function SectionButton({
  children,
  onClick,
}: SectionButtonProps) {
  return (
    <button className="group w-[10rem] flex items-center" onClick={onClick}>
      <VscChevronRight className="group-hover:translate-x-3 duration-300" />
      <div className="h-full text-lg group-hover:font-bold group-hover:translate-x-5 group-hover:text-theme-main duration-300">
        {children}
      </div>
    </button>
  );
}
