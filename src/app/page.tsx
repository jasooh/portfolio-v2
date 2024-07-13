// Front-end page

// Context
import Layout from "@/components/Layout";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import PortfolioContent from "../components/portfolio/PortfolioContent";

export default function Home() {
  return (
    <Layout>
      <BackgroundEffect />
      <PortfolioContent />
    </Layout>
  );
}
