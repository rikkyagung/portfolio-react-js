import PropTypes from "prop-types";

export default function ButtonAction({ title, url, types }) {
   const primary =
      "h-14 w-[8.5rem] rounded-full shadow-lg shadow-sailor/60 bg-sailor text-bright-gray transition-all duration-500 hover:-translate-y-3 hover:transition-all hover:duration-500";

   const secondary =
      "h-14 w-[8.5rem] rounded-full border-2 border-sailor bg-transparent text-mangu-black transition-all duration-500 hover:-translate-y-3 hover:transition-all hover:duration-500 flex items-center justify-center";

   return (
      <a href={url}>
         <button
            disabled={url === ""}
            className={`${
               url === "" ? "cursor-not-allowed disabled:opacity-60" : ""
            } ${types === "primary" ? primary : secondary} `}
         >
            {title}
         </button>
      </a>
   );
}

ButtonAction.propTypes = {
   types: PropTypes.oneOf(["primary", "secondary"]).isRequired,
   url: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
};
