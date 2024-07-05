'use client'

// Components
import Image from 'next/image';
import { VscChevronDown } from "react-icons/vsc";

// Hooks
import { useState } from "react";

export default function ExperienceCard() {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => {setIsOpen(!isOpen)};

    return (
        <div>
            <div className={`w-full h-[7rem] pl-5 bg-theme-bg shadow-md flex justify-between ${isOpen ? 'rounded-t-md' : 'rounded-md'} hover:bg-theme-gray hover:bg-opacity-10 duration-100`}>
                {/* Information */}
                <div className="py-2 flex justify items-center gap-5">
                    <Image className="w-[5rem] h-3/4 object-cover rounded-md" alt='placeholder' width="64" height="64" src={'/placeholder.jpg'}></Image>
                    <div className="w-full h-full p-2 flex flex-col">
                        <h3 className="tracking-wide text-theme-main">Google Developer's Student Club</h3>
                        <h4 className="text-sm tracking-tighter font-bold">Technical Co-Lead</h4>
                        <p className="text-sm">2024</p>
                    </div>
                </div>
                {/* Drop down button */}
                <button className={`group w-full max-w-[2rem] h-full flex items-center justify-center ${isOpen ? 'rounded-tr-md' : 'rounded-r-md'} bg-theme-main`} onClick={onClickHandler}>
                    <VscChevronDown color="#0D0D0D" className={`${isOpen && 'rotate-180' } duration-300`}/>
                </button>
            </div>
            {/* Drop down content */}
            <div className={`w-full rounded-b-md bg-theme-main ${isOpen ? 'opacity-100 p-3 h-[8rem]' : 'h-[0rem] p-0 select-none'} duration-300`}>
                <p className="text-theme-bg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et natus rem nobis porro ipsum ipsam eligendi, iste sapiente minima beatae excepturi. Inventore id autem facilis accusantium velit laudantium dolor? Architecto.
                </p>
            </div>
        </div>
    );
};