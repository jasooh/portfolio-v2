// Context
import PortfolioContent from "../components/portfolio/PortfolioContent";

export default function Home() {
  return (
    <div className="overflow-hidden w-full min-h-screen h-fit flex justify-center bg-gradient-to-b from-theme-bg to-black">
      <div className="w-2/3 h-auto xl:px-[6rem] pt-[8rem] flex xl:flex-row xl:items-start flex-col items-center">
        <PortfolioContent />
      </div>
    </div>
  );
}
