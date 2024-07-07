// Components
import Image from "next/image";
import { useState } from "react";

interface CardProps {
  index: number;
}

export default function ProjectCard({ index }: CardProps) {
  const [epic, setEpic] = useState(true);

  return (
    <article
      className="w-full p-5 flex flex-col items-center gap-5 rounded-md shadow-md hover:bg-theme-gray hover:bg-opacity-10 flex-shrink-0 duration-200 select-none"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <header className="text-center">
        <h2 className="text-3xl text-theme-main leading-relaxed tracking-wide">
          Project
        </h2>
        <h3 className="font-bold">Developer</h3>
        <h4 className="text-sm">2024</h4>
      </header>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eum non,
        ex odio excepturi voluptatibus vel quis architecto consequuntur
        temporibus voluptatem est sapiente provident, magnam reprehenderit! Amet
        sed et odit.
      </p>
      <Image
        className="w-[60%] object-cover rounded-md"
        alt="placeholder"
        width="500"
        height="500"
        src={"/placeholder.jpg"}
      ></Image>
    </article>
  );
}
