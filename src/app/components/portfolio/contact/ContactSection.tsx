// Components
import { VscChevronRight } from "react-icons/vsc";
import { FaPaperclip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full h-fit min-h-[40rem] flex flex-col items-center rounded-md">
      <section className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white">Justin Abuyuan</h2>
        <header className="flex flex-row items-center gap-2 mb-5">
          <VscChevronRight color="#DCB53F" className="size-3" />
          <a
            className="hover:text-theme-main duration-300"
            href="mailto:abuyuanjustin@gmail.com"
          >
            abuyuanjustin@gmail.com
          </a>
        </header>
        <button className="flex items-center gap-3 border rounded-3xl p-4 mb-5 hover:bg-theme-main hover:border-theme-main hover:text-white hover:rounded-xl duration-300">
          <FaPaperclip />
          <p>Resume</p>
        </button>
        <section className="flex flex-row gap-3 mb-8">
          <button>
            <FaGithub className="size-14 hover:text-theme-main duration-300" />
          </button>
          <button>
            <FaLinkedin className="size-14 hover:text-theme-main duration-300" />
          </button>
        </section>
        <section className="text-center text-sm">
          <p>
            Built with love using <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>, and deployed on{" "}
            <strong>GitHub Pages</strong>.
          </p>
          <p>© 2024 Justin Abuyuan. All rights reserved.</p>
        </section>
      </section>
    </section>
  );
}
