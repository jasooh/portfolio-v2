'use client'

// Components
import SectionButton from "./SectionButton";

export default function FixedName() {
    // Button logic
    const onClickSummary = () => {document.getElementById('summary')?.scrollIntoView({behavior: "smooth"})};
    const onClickExperience = () => {document.getElementById('experience')?.scrollIntoView({behavior: "smooth"})};
    const onClickProjects = () => {document.getElementById('projects')?.scrollIntoView({behavior: "smooth"})};
    const onClickContact = () => {document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})};

    return (
        <div className="w-fit h-fit text-theme-gray fixed">
            {/* Title tags */}
            <p className="mb-1 text-xl">Hey, I'm</p>
            <h1 className="text-theme-bg font-black italic text-7xl theme-white-outline mb-2">JUSTIN <br /> ABUYUAN</h1>
            <h2 className=" text-lg mb-10">Engineering Student @ the <span className="text-theme-main font-semibold">University of Waterloo</span>.</h2>

            {/* Changing text */}
            <p className="text-theme-main max-w-96 mb-20">i like to code stuff and build things for the internet.</p>

            {/* Navigation buttons */}
            <div className="flex flex-col items-start">
                <SectionButton onClick={onClickSummary}>SUMMARY</SectionButton>
                <SectionButton onClick={onClickExperience}>EXPERIENCE</SectionButton>
                <SectionButton onClick={onClickProjects}>PROJECTS</SectionButton>
                <SectionButton onClick={onClickContact}>CONTACT</SectionButton>
            </div>
        </div>
    );
};