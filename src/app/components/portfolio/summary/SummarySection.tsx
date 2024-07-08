// Context
import { useEffect } from "react";
import { useSectionContext } from "../context/SectionContext";

// React-intersection-observer
import { useInView } from "react-intersection-observer";

export default function SummarySection() {
  // On scroll text change
  const SectionContext = useSectionContext();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    SectionContext.setCurrentSection(0);
  }, [inView]);

  return (
    <p ref={ref} id="summary" className="w-full">
      <span className="text-theme-main">
        In 2015, I wrote my first ever program in Lua using ROBLOX Studio's game
        engine.{" "}
      </span>
      It was a simple script that teleported the player to another location on
      the map. <br /> <br />
      After programming in Lua for over 5 years, I learned about full-stack
      development and software development. I used these skills to develop
      websites for organizations, technical projects, and hackathons. <br />{" "}
      <br />
      Now, as an aspiring Management Engineering student at the University of
      Waterloo, I hope to be at the forefront of this rapidly evolving software
      industry.
    </p>
  );
}
