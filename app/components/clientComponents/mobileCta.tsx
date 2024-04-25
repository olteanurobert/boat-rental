// Assets
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const MobileCta = () => {
  return (
    <div className="fixed bottom-5 right-5  bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
      {/* <a
        className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
        href="https://wa.me/40744259256"
      >
        <BsWhatsapp className="h-8 w-8 cursor-pointer" />
      </a> */}
      <a
        className="font-semibold dark:text-gray-400 dark:hover:text-gray-300"
        href={`tel:${"0740912267"}`}
      >
        <BsTelephone className="h-5 w-5" />
      </a>
    </div>
  );
};
export default MobileCta;
