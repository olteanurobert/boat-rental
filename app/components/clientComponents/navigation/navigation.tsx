"use client";

// Helpers / Libraries
import { useWindowSize } from "@/app/libr/hooks";
import { useSectionInView } from "@/app/libr/hooks";

// Components
import NavMobile from "./navigationMobile";
import NavDesktop from "./navigationDesktop";

const Navigation = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 800;

  const { ref } = useSectionInView("Acasă");

  return (
    <div ref={ref} id="home">
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </div>
  );
};

export default Navigation;
