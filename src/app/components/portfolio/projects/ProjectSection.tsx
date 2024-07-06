'use client'

// Hooks & Types
import { ReactNode, useState } from "react";

// Components
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    const [index, setIndex] = useState(0);
    const totalCards = 2

    const next = () => {
        setIndex(prevIndex => {
            return (prevIndex + 1) > totalCards ? 0 : prevIndex + 1
        })
        console.log(index);
    };
    const prev = () => {
        setIndex(prevIndex => {
            return (prevIndex - 1) < 0 ? totalCards : prevIndex - 1
        })
    };

    return (
        <div className="w-full h-[30rem] flex justify-between">
            <button className="group p-3" onClick={prev}>
                <VscChevronLeft color="#DCB53F" className="size-5 group-hover:-translate-x-2 duration-300"/>
            </button>

            <div className="w-full max-w-[30rem] h-full overflow-hidden flex flex-row mx-5">
                <ProjectCard index={index} />
                <ProjectCard index={index} />
                <ProjectCard index={index} />
            </div>

            <button className="group p-3" onClick={next}>
                <VscChevronRight color="#DCB53F" className="size-5 group-hover:translate-x-2 duration-300"/>
            </button>
        </div>
    );
};