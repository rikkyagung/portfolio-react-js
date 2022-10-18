import PropTypes from "prop-types";
import { chevronRight, lock } from "../../../assets";

export default function ButtonAction({ title, url, types, icon }) {
   const primary =
      "h-[3.3rem] w-[8.5rem] rounded-full bg-sailor text-bright-gray shadow-lg shadow-sailor/60 md:h-14";

   const secondary =
      "flex h-[3.3rem] w-[8.5rem] md:h-14 items-center justify-center rounded-full border-2 border-sailor bg-transparent text-mangu-black";

   return (
      <a
         href={url}
         className="relative transition-all duration-500 hover:-translate-y-3 hover:transition-all hover:duration-500"
      >
         <button
            disabled={url === ""}
            className={`${
               url === "" ? "h- cursor-not-allowed disabled:opacity-60" : ""
            } ${types === "primary" ? primary : secondary} ${
               icon ? "pr-5" : ""
            }`}
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
