// Components
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import ProjectCard from "./ProjectCard";

// Hooks
import { useState, useEffect } from "react";

// Context
import { useSectionContext } from "../context/SectionContext";

// React-intersection-observer
import { useInView } from "react-intersection-observer";

export default function ProjectSection() {
  // On scroll text change
  const SectionContext = useSectionContext();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    SectionContext.setCurrentSection(2);
  }, [inView]);

  // Data values
  const [index, setIndex] = useState(0);
  const totalCards = 2;

  const next = () => {
    setIndex((prevIndex) => {
      return prevIndex + 1 > totalCards ? 0 : prevIndex + 1;
    });
    console.log(index);
  };
  const prev = () => {
    setIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? totalCards : prevIndex - 1;
    });
  };

  return (
    <section
      ref={ref}
      className="w-screen h-[30rem] flex flex-row justify-between"
    >
      <button className="group p-3" onClick={prev}>
        <VscChevronLeft
          color="#DCB53F"
          className="size-5 group-hover:-translate-x-2 duration-300"
        />
      </button>

      <div className="w-full max-w-[30rem] h-fit flex flex-row mx-5 overflow-hidden">
        <ProjectCard index={index} />
        <ProjectCard index={index} />
        <ProjectCard index={index} />
      </div>

      <button className="group p-3" onClick={next}>
        <VscChevronRight
          color="#DCB53F"
          className="size-5 group-hover:translate-x-2 duration-300"
        />
      </button>
    </section>
  );
}
