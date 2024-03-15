import { useActiveSectionContext } from "@/app/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      return () => {
        window.removeEventListener("resize", () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        });
      };
    }
  }, []);

  return windowSize;
};
