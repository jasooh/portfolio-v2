import { ReactNode } from "react";

// Components
import { VscChevronRight } from "react-icons/vsc";

// Context
import { useSectionContext } from "../../../context/SectionContext";

interface SectionButtonProps {
  children: ReactNode;
  sectionIndex: number;
  onClick: () => void;
}

export default function SectionButton({
  children,
  sectionIndex,
  onClick,
}: SectionButtonProps) {
  const SectionContext = useSectionContext();
  const current = SectionContext.currentSection;

  return (
    <button className="group w-[10rem] flex items-center" onClick={onClick}>
      <VscChevronRight
        className={`group-hover:translate-x-3 duration-300  ${
          current === sectionIndex ? "translate-x-3" : ""
        }`}
      />
      <div
        className={`h-full text-lg group-hover:font-bold group-hover:translate-x-5 group-hover:text-theme-main duration-300 ${
          current === sectionIndex
            ? "translate-x-5 text-theme-main font-bold"
            : ""
        }`}
      >
        {children}
      </div>
    </button>
  );
}
