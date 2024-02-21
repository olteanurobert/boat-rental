"use client";

// Local data
import { links } from "@/app/lib/data";

// Helpers / Libraries
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

// Assets
import { BsFacebook } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../../public/logo.png";
// Context
import { useActiveSectionContext } from "@/app/context/active-section-context";
import Image from "next/image";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <div>
        <div className="fixed sm:top-[1.3rem] sm:h-[3.25rem] sm:w-[50rem]">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="" className="w-36" />
          </div>
        </div>
        <motion.div
          className="flex justify-center items-center fixed top-0 left-1/2 h-[4.5rem] w-full sm:top-[1.3rem] sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <div className="flex items-center gap-2">
            <BsFacebook />
            facebook
          </div>
          <div className="flex items-center gap-2">
            <BsTelephone />
            +40 744 259 256
          </div>
          {/* <div className="flex items-center gap-2">
          <BsWhatsapp />
          whatsapp
        </div> */}
        </motion.div>
      </div>

      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-[5.3rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[5.5rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
