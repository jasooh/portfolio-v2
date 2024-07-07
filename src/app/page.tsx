// Components
import FixedName from "./components/portfolio/FixedName";
import SummarySection from "./components/portfolio/summary/SummarySection";
import ExperienceSection from "./components/portfolio/experience/ExperienceSection";
import ProjectSection from "./components/portfolio/projects/ProjectSection";
import ContactSection from "./components/portfolio/contact/ContactSection";

export default function Home() {
  return (
    <div className="overflow-hidden w-full min-h-screen h-fit flex justify-center bg-theme-bg">
      <div className="w-2/3 h-auto xl:px-[6rem] pt-[8rem] flex xl:flex-row xl:items-start flex-col items-center">
        {/* Name Container */}
        <FixedName />

        {/* Content container */}
        <div className="w-full h-max flex xl:justify-end justify-center">
          <div className="xl:w-1/2 w-full h-auto flex flex-col gap-40 text-theme-gray items-center">
            {/* Summary */}
            <SummarySection>
              <span className="text-theme-main">
                In 2015, I wrote my first ever program in Lua using ROBLOX
                Studio's game engine.{" "}
              </span>
              It was a simple script that teleported the player to another
              location on the map. <br /> <br />
              After programming in Lua for over 5 years, I learned about
              full-stack development and software development. I used these
              skills to develop websites for organizations, technical projects,
              and hackathons. <br /> <br />
              Now, as an aspiring Management Engineering student at the
              University of Waterloo, I hope to be at the forefront of this
              rapidly evolving software industry.
            </SummarySection>

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
      </div>
    </div>
  );
}
