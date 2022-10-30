import { ButtonAction } from "../atoms/index";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function Hero() {
   const { theme } = useContext(ThemeContext);

   return (
      <section
         className={`${
            theme === "light" ? "HERO-LIGHT" : "HERO-DARK"
         } h-screen px-6 transition-all duration-200 ease-linear dark:bg-eerie-black md:h-[80vh]`}
      >
         <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-mangu-black dark:text-baby-powder">
            <h1 className="text-center text-[3.2rem] font-bold tracking-wide">
               Agung's Here 👋
            </h1>
            <p className="mb-4 text-[1.3rem] font-light">
               Frontend Web Developer
            </p>
            <ButtonAction types="primary" url="#about" title="Find Me Out" />
         </div>
      </section>
   );
}
