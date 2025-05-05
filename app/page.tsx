// Helpers
import Link from "next/link";

// Components
import HeroSection from "./components/clientComponents/heroSection";
import About from "./components/serverComponents/about";
import Itineraries from "./components/clientComponents/itineraries";
import GoogleMap from "./components/clientComponents/googleMap";
import Steps from "./components/clientComponents/steps";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-between px-6 pt-24 min-[800px]:pt-40">
      <HeroSection />

      <About />

      <Itineraries />

      <Steps />

      <GoogleMap />
    </main>
  );
};

export default HomePage;
