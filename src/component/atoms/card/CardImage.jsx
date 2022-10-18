import PropTypes from "prop-types";
import { ButtonAction } from "../../index";

export default function CardImage({ image, alt, desc, url, icon }) {
   return (
      <figure className="relative">
         <img
            src={image}
            alt={alt}
            className="transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
         />
         <figcaption className="card absolute top-0 bottom-0 right-0 left-0 flex h-full flex-col items-center justify-center px-6 text-center font-medium opacity-0 transition-all duration-500 group-hover:opacity-100">
            <p className="relative mb-5 text-sm leading-loose">{desc}</p>
            <ButtonAction
               types="secondary"
               url={url}
               title="Go to site"
               icon={icon}
            />
         </figcaption>
      </figure>
   );
}

CardImage.propTypes = {
   image: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
};
