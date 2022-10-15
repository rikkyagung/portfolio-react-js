import PropTypes from "prop-types";
import { ButtonAction } from "../../index";

export default function CardImage({ image, alt, desc, url }) {
   return (
      <figure className="relative">
         <img
            src={image}
            alt={alt}
            className="transition-all duration-500 group-hover:scale-110"
         />
         <figcaption className="absolute top-0 bottom-0 right-0 left-0 flex h-full flex-col items-center justify-center px-6 text-center opacity-0 transition-all duration-500 group-hover:bg-boysenberry-shadow group-hover:opacity-100">
            <p className="relative mb-5 text-sm leading-loose">{desc}</p>
            <ButtonAction types="secondary" url={url} title="Go to site" />
         </figcaption>
      </figure>
   );
}

CardImage.propTypes = {
   image: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
};
