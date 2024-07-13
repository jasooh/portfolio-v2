"use client";

// Components
import FixedName from "./hero/FixedName";
import SummarySection from "./summary/SummarySection";
import ExperienceSection from "./experience/ExperienceSection";
import ProjectSection from "./projects/ProjectSection";
import ContactSection from "./contact/ContactSection";

// Context
import ContextProvider from "../ContextProvider";

export default function PortfolioContent() {
  return (
    <ContextProvider>
      {/* Name Container */}
      <FixedName />

      {/* Content container */}
      <div className="w-full h-max flex xl:justify-end justify-center">
        <div className="xl:w-1/2 w-full h-auto flex flex-col gap-40 text-theme-gray items-center">
          {/* Summary */}
          <SummarySection />

          {/* Experience */}
          <section className="w-full">
            <p id="experience" className="mb-20 tracking-widest">
              <span className="text-theme-main">//</span> work experience
            </p>
            <ExperienceSection />
          </section>

          {/* Projects */}
          <section className="w-full">
            <p id="projects" className="mb-20 tracking-widest">
              <span className="text-theme-main">//</span> personal work
            </p>
            <div className="flex justify-center">
              <ProjectSection />
            </div>
          </section>

          {/* Contact */}
          <section className="w-full">
            <p id="contact" className="mb-20 tracking-widest">
              <span className="text-theme-main">//</span> contact info
            </p>
            <ContactSection />
          </section>
        </div>
      </div>
    </ContextProvider>
  );
}
