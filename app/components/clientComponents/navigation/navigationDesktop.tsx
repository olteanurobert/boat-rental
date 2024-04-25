// Local data
import { links } from "@/app/libr/data";

// Helpers / Libraries
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

// Assets
import { BsFacebook } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../../../public/logo.png";

// Context
import { useActiveSectionContext } from "@/app/context/active-section-context";
import Image from "next/image";

const NavDesktop = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="flex w-full justify-between items-center p-6 fixed top-0 z-10">
      <div className="">
        <div className="">
          <Image src={logo} alt="" className="w-20" />
        </div>
      </div>

      <motion.div
        className="flex px-2 py-[2px] bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-950 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex">
          <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
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
                      className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
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
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-left gap-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex justify-evenly gap-6">
          <a
            className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
            href={`tel:${"0740912267"}`}
          >
            <BsTelephone className="h-9 w-9" />
          </a>

          <a
            className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
            href="https://wa.me/40744259256"
          >
            <BsWhatsapp className="h-8 w-8 cursor-pointer" />
          </a>

          <a
            className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
            href="https://www.google.com/"
            target="_blank"
          >
            <BsFacebook className="h-8 w-8 cursor-pointer" />
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default NavDesktop;
