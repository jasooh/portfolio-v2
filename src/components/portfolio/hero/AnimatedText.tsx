// Context
import { useEffect } from "react";
import { useSectionContext } from "../context/SectionContext";

// Typewriter
import Typewriter from "typewriter-effect";

const words = [
  "i like to code stuff and build things for the internet.",
  "developing skills to become a software engineer - one co-op at a time.",
  "working towards making my own a.i army.",
  "i check my email often :)",
];

export default function AnimatedText() {
  const SectionContext = useSectionContext();

  useEffect(() => {
    SectionContext.setCurrentSection(SectionContext.currentSection);
  }, [SectionContext.currentSection]);

  return (
    <div className="max-w-96 min-h-[5rem] mb-20 text-theme-main">
      <Typewriter
        options={{
          strings: words[SectionContext.currentSection],
          autoStart: true,
          delay: 10,
        }}
      />
    </div>
  );
}
