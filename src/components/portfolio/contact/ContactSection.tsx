// Components
import { VscChevronRight } from "react-icons/vsc";
import { FaPaperclip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Hooks
import { useEffect } from "react";

// Context
import { useSectionContext } from "../../../context/SectionContext";

// React-intersection-observer
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  // On scroll text change
  const SectionContext = useSectionContext();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      SectionContext.setCurrentSection(3);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full h-fit min-h-[40rem] flex flex-col items-center rounded-md"
    >
      <section className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white">Justin Abuyuan</h2>
        <header className="mb-5 flex flex-row items-center gap-2">
          <VscChevronRight color="#DCB53F" className="size-3" />
          <a
            className="hover:text-theme-main duration-300"
            href="mailto:abuyuanjustin@gmail.com"
          >
            abuyuanjustin@gmail.com
          </a>
        </header>
        <button className="p-4 mb-5 flex items-center gap-3 border rounded-3xl hover:bg-theme-main hover:border-theme-main hover:text-white hover:rounded-xl duration-300">
          <FaPaperclip />
          <p>Resume</p>
        </button>
        <section className="mb-8 flex flex-row gap-3">
          <a target="_blank" href="https://github.com/jasooh">
            <FaGithub className="size-14 hover:text-theme-main duration-300" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/justin-abuyuan">
            <FaLinkedin className="size-14 hover:text-theme-main duration-300" />
          </a>
        </section>
        <section className="text-center text-sm">
          <p>
            Built with ❤ using <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, and deployed on{" "}
            <strong>GitHub Pages</strong>.
          </p>
          <p>© 2024 Justin Abuyuan. All rights reserved.</p>
        </section>
      </section>
    </section>
  );
}
