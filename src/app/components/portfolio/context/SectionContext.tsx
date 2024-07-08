import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SectionProps {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
}

const Section = createContext({} as SectionProps);

function SectionProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState(0);
  
  return (
    <Section.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </Section.Provider>
  );
}

function useSectionContext() {
  const SectionContext = useContext(Section);
  return SectionContext;
}

export { SectionProvider, useSectionContext };
