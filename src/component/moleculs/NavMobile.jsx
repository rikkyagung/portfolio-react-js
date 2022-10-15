import {
   logo,
   homeSVG,
   aboutSVG,
   serviceSVG,
   projectSVG,
   contactSVG,
} from "../../assets";
import PropTypes from "prop-types";

export default function NavMobile({ datas, setIsActive, isActive }) {
   const navSVG = (icon) => {
      if (icon === "home") {
         return homeSVG;
      }
      if (icon === "about") {
         return aboutSVG;
      }
      if (icon === "service") {
         return serviceSVG;
      }
      if (icon === "project") {
         return projectSVG;
      }
      if (icon === "contact") {
         return contactSVG;
      }
   };

   return (
      <>
         <div className="logo absolute w-full p-5 md:hidden">
            <a href="/">
               <img
                  src={logo}
                  alt="logo"
                  className="max-h-16 max-w-full lg:max-h-20"
               />
            </a>
         </div>
         <div className="fixed bottom-0 left-0 z-10 h-[10vh] w-screen bg-mangu-black md:hidden">
            <ul className="flex h-full items-center justify-around">
               {datas?.map((data) => {
                  return (
                     <li
                        key={data.id}
                        id={data.name}
                        onClick={(event) => {
                           setIsActive(event.currentTarget.id);
                        }}
                        className={`${
                           isActive === data.name
                              ? "ACTIVE-MOBILE"
                              : "opacity-80"
                        } h-full w-full`}
                     >
                        <a
                           href={data.url}
                           id={data.name}
                           className="flex h-full w-full items-center justify-center"
                        >
                           {navSVG(data.icon)}
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </>
   );
}

NavMobile.propTypes = {
   datas: PropTypes.array.isRequired,
   isActive: PropTypes.string.isRequired,
   setIsActive: PropTypes.func.isRequired,
};
