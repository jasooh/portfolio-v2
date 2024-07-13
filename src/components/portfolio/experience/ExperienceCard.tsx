// Components
import Image from "next/image";
import { VscChevronDown } from "react-icons/vsc";

// Hooks
import { useState } from "react";

export default function ExperienceCard() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="overflow-hidden">
      <section
        className={`w-full h-fit pl-5 shadow-md flex justify-between ${
          isOpen ? "rounded-t-md" : "rounded-md"
        } hover:bg-theme-gray hover:bg-opacity-10 duration-100`}
      >
        {/* Information */}
        <div className="py-2 flex justify items-center gap-5 overflow-hidden">
          <Image
            className="w-[10rem] object-cover rounded-md xl:block hidden"
            alt="placeholder"
            width="64"
            height="64"
            src={"/placeholder.jpg"}
          ></Image>
          <header className="w-full h-full p-2 flex flex-col">
            <h2 className="tracking-wide text-theme-main">
              Google Developer's Student Club
            </h2>
            <h3 className="text-sm font-bold tracking-tighter">
              Technical Co-Lead
            </h3>
            <h4 className="text-sm">2024</h4>
          </header>
        </div>
        {/* Drop down button */}
        <button
          className={`group w-full max-w-[2rem] flex items-center justify-center ${
            isOpen ? "rounded-tr-md" : "rounded-r-md"
          } bg-theme-main`}
          onClick={onClickHandler}
        >
          <VscChevronDown
            color="#0D0D0D"
            className={`${isOpen && "rotate-180"} duration-300`}
          />
        </button>
      </section>
      {/* Drop down content */}
      <section
        className={`w-full rounded-b-md bg-theme-main overflow-auto ${
          isOpen ? "h-[20rem]" : "h-[0rem] select-none"
        } duration-300`}
      >
        <p className="text-theme-bg p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et natus rem
          nobis porro ipsum ipsam eligendi, iste sapiente minima beatae
          excepturi. Inventore id autem facilis accusantium velit laudantium
          dolor? Architecto.
        </p>
      </section>
    </article>
  );
}
