// Components
import ExperienceCard from "./ExperienceCard";

// Hooks
import { useEffect } from "react";

// Context
import { useSectionContext } from "../context/SectionContext";

// React-intersection-observer
import { useInView } from "react-intersection-observer";

export default function ExperienceSection() {
  // On scroll text change
  const SectionContext = useSectionContext();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    SectionContext.setCurrentSection(1);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full h-fit min-h-[40rem] flex flex-col gap-2"
    >
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </section>
  );
}
