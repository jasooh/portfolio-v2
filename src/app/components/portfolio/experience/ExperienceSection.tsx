// Components
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
    return (
        <div className="w-full h-fit flex flex-col gap-2">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    );
};