// Components
import FixedName from "./components/portfolio/FixedName";
import SummarySection from "./components/portfolio/summary/SummarySection";
import ExperienceSection from "./components/portfolio/experience/ExperienceSection";
import ProjectSection from "./components/portfolio/projects/ProjectSection";

export default function Home() {

  return (
    <div className="w-full min-h-screen h-fit bg-theme-bg flex justify-center">
      <div className="w-2/3 h-auto px-[6rem] pt-[8rem] flex">
        {/* Name Container */}
        <FixedName />

        {/* Content container */}
        <div className="w-max h-max flex justify-end">
          <div className="w-1/2 h-auto text-theme-gray flex flex-col gap-40">

            {/* Summary */}
            <SummarySection>
              <span className="text-theme-main">In 2015, I wrote my first ever program in Lua using ROBLOX Studio's game engine. </span>
              It was a simple script that teleported the player to another location on the map. <br /> <br />
              After programming in Lua for over 5 years, I learned about full-stack development and software development. I used these skills to develop websites for organizations, technical projects, and hackathons. <br /> <br />
              Now, as an aspiring Management Engineering student at the University of Waterloo, I hope to be at the forefront of this rapidly evolving software industry.
            </SummarySection>

            {/* Experience */}
            <section>
              <p id="experience" className="mb-5 tracking-widest">
                <span className="text-theme-main">//</span> work experience
              </p>
              <ExperienceSection />
            </section>

            {/* Projects */}
            <section>
              <p id="projects" className="mb-5 tracking-widest">
                <span className="text-theme-main">//</span> personal work
              </p>
              <ProjectSection />
            </section>

            {/* Contact */}
            <section>
              <p id="contact" className="mb-5 tracking-widest">
                <span className="text-theme-main">//</span> contact info
              </p>

            </section>
          </div>
        </div>  
      </div>
    </div>
  );
}
