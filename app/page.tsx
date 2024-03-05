// Helpers
import Link from "next/link";

// Components
import HeroSection from "./components/heroSection";
import About from "./components/clientComponents/about";
import Projects from "./components/clientComponents/projects";
import Map from "./components/clientComponents/map";
import Experience from "./components/clientComponents/experience";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-between px-6">
      <HeroSection />

      <About />

      <Experience />

      <Projects />

      <Map />
    </main>
  );
};

export default HomePage;
