import { logo } from "../../assets";
import PropTypes from "prop-types";
import { ThemeButton } from "../atoms";

export default function NavDesktop({ datas, isActive, setIsActive }) {
   return (
      <div className="hidden w-full items-center justify-between py-1 px-6 transition-all duration-200 ease-linear dark:bg-eerie-black md:relative md:flex md:h-[20vh] md:px-10">
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
            <ul className="mr-5 w-full md:flex md:items-center md:justify-end md:gap-10">
               {datas?.map((data) => {
                  return (
                     <a href={data.url} key={data.id}>
                        <li
                           id={data.name}
                           onClick={(event) => {
                              setIsActive(event.currentTarget.id);
                           }}
                           className={`${
                              isActive === data.name
                                 ? "ACTIVE-DESKTOP font-semibold text-sailor opacity-100"
                                 : "text-mangu-black hover:text-sailor hover:opacity-100 dark:text-baby-powder dark:hover:text-sailor"
                           } relative opacity-80 hover:font-semibold`}
                        >
                           {data.name}
                        </li>
                     </a>
                  );
               })}
            </ul>
            <ThemeButton />
         </div>
      </div>
   );
}

NavDesktop.propTypes = {
   datas: PropTypes.array.isRequired,
   isActive: PropTypes.string.isRequired,
   setIsActive: PropTypes.func.isRequired,
};
