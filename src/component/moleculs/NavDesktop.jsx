import { logo } from "../../assets";
import PropTypes from "prop-types";

export default function NavDesktop({ datas, isActive, setIsActive }) {
   return (
      <div className="hidden w-full items-center justify-between bg-boysenberry-shadow py-1 px-6 md:relative md:flex md:h-[20vh] md:px-10">
         <div className="relative flex w-full items-center justify-between">
            <div className="logo">
               <a href="/">
                  <img
                     src={logo}
                     alt="logo"
                     className="max-h-16 max-w-full lg:max-h-20"
                  />
               </a>
            </div>
            <ul className="hidden w-full md:flex md:items-center md:justify-end md:gap-10">
               {datas?.map((data) => {
                  return (
                     <li
                        key={data.id}
                        onClick={(event) => {
                           setIsActive(event.target.textContent);
                        }}
                        className={`${
                           isActive === data.name
                              ? "ACTIVE-DESKTOP font-semibold text-sailor"
                              : "opacity-80 hover:text-sailor hover:opacity-100"
                        } relative`}
                     >
                        <a href={data.url}>{data.name}</a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}

NavDesktop.propTypes = {
   datas: PropTypes.array.isRequired,
   isActive: PropTypes.string.isRequired,
   setIsActive: PropTypes.func.isRequired,
};
