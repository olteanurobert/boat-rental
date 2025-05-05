"use client";

// Helpers / Libraries
import { useWindowSize } from "@/app/libr/hooks";

// Components
import NavMobile from "./navigationMobile";
import NavDesktop from "./navigationDesktop";

const Navigation = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 800;

  return <div id="home">{isMobile ? <NavMobile /> : <NavDesktop />}</div>;
};

export default Navigation;
