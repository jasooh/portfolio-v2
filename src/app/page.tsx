// Components
import FixedName from "./components/portfolio/FixedName";
import SummarySection from "./components/portfolio/summary/SummarySection";
import ExperienceCard from "./components/portfolio/experience/ExperienceCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-fit bg-theme-bg flex justify-center">
      <div className="w-2/3 h-auto px-[6rem] pt-[8rem] flex">
        {/* Name Hero */}
        <FixedName />
        {/* Content holder */}
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
            <div>
              <h2 id="experience" className="mb-5 tracking-widest">experience</h2>
              {/* Experience content holder */}
              <div className="w-full h-fit flex flex-col gap-2">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
              </div>
            </div>

            {/* Projects */}
            <h2 id="projects" className="mb-5 tracking-widest">projects</h2>

            {/* Contact */}
            <h2 id="contact" className="mb-5 tracking-widest">contact</h2>

          </div>
        </div>  
      </div>
    </div>
  );
}
