import { ButtonAction } from "../atoms/index";

export default function Hero() {
   return (
      <section className="hero h-screen px-6 md:h-[80vh] ">
         <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <h1 className="text-center text-[3.2rem] font-bold tracking-wide text-mangu-black">
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
