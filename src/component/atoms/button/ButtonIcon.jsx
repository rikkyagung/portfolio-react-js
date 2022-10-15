import PropTypes from "prop-types";

export default function ButtonIcon({ url, icon }) {
   return (
      <a href={url}>
         <button className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-sailor bg-transparent transition-all duration-500 hover:-translate-y-3 hover:transition-all hover:duration-500 lg:h-16 lg:w-16">
            {icon}
         </button>
      </a>
   );
}

ButtonIcon.propTypes = {
   url: PropTypes.string.isRequired,
   icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
