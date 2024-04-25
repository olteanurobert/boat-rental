import { useEffect, useRef, useState } from "react";

// Helpers / Libraries
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

// Local Data
import { links } from "@/app/libr/data";

// Assets
import { BsFacebook } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      ref={ref}
      className={`flex justify-end px-6 py-6 w-full fixed top-0 right-0 z-10 ${
        isOpen &&
        "dark:bg-gray-950 dark:bg-opacity-75 bg-gray-300 bg-opacity-80 shadow-lg shadow-black/[0.03]"
      }`}
    >
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-10 left-0 shadow-4xl right-0 top-[96px] px-5 pb-5 dark:bg-gray-950 dark:bg-opacity-75 bg-gray-300 bg-opacity-80 shadow-lg shadow-black/[0.03] border-b border-b-white/20"
          >
            <div className="flex justify-end mb-6 gap-6">
              <a
                className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
                href="https://www.google.com/"
                target="_blank"
              >
                <BsFacebook className="h-8 w-8 cursor-pointer" />
              </a>
              <a
                className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
                href="https://wa.me/40744259256"
              >
                <BsWhatsapp className="h-8 w-8 cursor-pointer" />
              </a>

              <a
                className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
                href={`tel:${"0740912267"}`}
              >
                <BsTelephone className="h-9 w-9" />
              </a>
            </div>

            <ul className="grid gap-2">
              {links.map((link, idx) => {
                // const { Icon } = link;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={link.name}
                    className="w-full rounded-xl dark:bg-gray-950 dark:bg-opacity-75 bg-white bg-opacity-80"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-gray-100 dark:text-white dark:bg-white/5"
                      }
                      href={link.hash}
                    >
                      <span className="flex gap-1 text-lg">{link.name}</span>

                      {/* <Icon className="text-xl" /> */}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavMobile;
