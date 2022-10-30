import PropTypes from "prop-types";
import { chevronRight, lock } from "../../../assets";

export default function ButtonAction({ title, url, types, icon }) {
   const primary =
      "border-none bg-sailor py-4 px-5 text-bright-gray shadow-lg shadow-sailor/60 dark:text-baby-powder md:h-14";

   const secondary =
      "flex items-center justify-center border-2 border-sailor bg-transparent py-2 px-7 text-mangu-black dark:text-baby-powder md:h-14";

   return (
      <a
         href={url}
         className="relative transition-all duration-500 hover:-translate-y-3 hover:transition-all hover:duration-500"
      >
         <button
            disabled={url === ""}
            className={`${
               url === "" ? "cursor-not-allowed disabled:opacity-60" : ""
            } ${types === "primary" ? primary : secondary} ${
               icon ? "py-3 pr-10" : ""
            } rounded-full dark:shadow-md dark:shadow-sailor/60`}
         >
            {url === "" ? "Private" : title}
         </button>
         {icon ? (
            <img
               src={url === "" ? lock : chevronRight}
               alt=""
               className={`${
                  url === "" ? "opacity-60" : ""
               } absolute top-1/2 right-1 -translate-y-1/2 -translate-x-1/2`}
            />
         ) : null}
      </a>
   );
}

ButtonAction.propTypes = {
   types: PropTypes.oneOf(["primary", "secondary"]).isRequired,
   url: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
};
