import PropTypes from "prop-types";

export default function CardText({ image, name, title }) {
   return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-midwinter-mist bg-opacity-80 p-6 text-mangu-black">
         <img src={image} alt="icon" width="36" />
         <p className="text-lg font-semibold">{name}</p>
         <p className="text-sm">{title}</p>
      </div>
   );
}

CardText.propTypes = {
   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
   name: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
};
