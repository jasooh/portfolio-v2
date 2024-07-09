// Components
import ExperienceCard from "./ExperienceCard";

// Hooks
import { useEffect, useRef } from "react";

// Context
import { useSectionContext } from "../context/SectionContext";

// React-intersection-observer
import { useInView } from "react-intersection-observer";

export default function ExperienceSection() {
  const rootRef = useRef(null);

  // On scroll text change
  const SectionContext = useSectionContext();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      SectionContext.setCurrentSection(1);
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full h-fit flex flex-col gap-2">
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </section>
  );
}
