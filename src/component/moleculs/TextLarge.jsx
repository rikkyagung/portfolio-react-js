import { ButtonAction } from "../";

export default function TextLarge() {
   return (
      <article className="mt-8 md:col-span-2 md:mt-0">
         <div className="flex h-full flex-col items-center justify-around gap-5 text-lg leading-loose md:items-start md:text-justify lg:ml-10">
            <p>Hi, I'm Agung. Nice to e-meet you!</p>
            <p>
               I'm a Frontend Dev based in Bekasi, IDN. I interest to Web
               Development since 2019 and currently active to find a new
               collaboration. In my spare time, I'm in love with games and
               upgrading my skills. React JS, Bootstrap, Tailwind CSS, and
               SASS/SCSS are my tools.
            </p>
            <ButtonAction
               types="secondary"
               url="/CV - Rikky Agung Nugraha.pdf"
               title="Get CV"
            />
         </div>
      </article>
   );
}
