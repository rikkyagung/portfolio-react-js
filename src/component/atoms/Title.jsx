import PropTypes from "prop-types";

export default function Title({ text, subText }) {
   return (
      <>
         <span>{subText}</span>
         <h2 className="text-[2rem] font-semibold">{text}</h2>
      </>
   );
}

Title.propTypes = {
   text: PropTypes.string.isRequired,
   subText: PropTypes.string.isRequired,
};
