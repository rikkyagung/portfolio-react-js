import { badgeCheck } from "../../assets";
import { Title } from "../";

export default function Service() {
   const skills = [
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "Bootstrap",
      "Tailwind CSS",
      "SASS/SCSS",
      "Git",
   ];

   return (
      <section
         id="service"
         className="py-8 text-center text-mangu-black dark:text-baby-powder"
      >
         <Title subText="Select The Offer" text="Service" />
         <article className="mt-8 grid gap-4 rounded-lg bg-midwinter-mist p-6 text-mangu-black md:grid-cols-3 md:items-center md:gap-10 lg:p-8">
            <h3 className="text-2xl font-semibold md:leading-relaxed">
               Frontend Development
            </h3>
            <div className="mt-4 grid gap-2 md:col-span-2 md:mt-0">
               <ul className="mx-auto grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                  {skills.length > 0 &&
                     skills.map((skill, index) => {
                        return (
                           <li
                              key={index}
                              className="flex items-center gap-2 text-left"
                           >
                              <img src={badgeCheck} alt="" width="28" />
                              <p>{skill}</p>
                           </li>
                        );
                     })}
               </ul>
            </div>
         </article>
      </section>
   );
}
