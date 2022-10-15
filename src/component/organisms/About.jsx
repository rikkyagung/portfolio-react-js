import { CardAbout, Title, TextLarge } from "../";
import { briefcase, task } from "../../assets";

export default function About() {
   return (
      <section id="about" className="py-8 text-center text-mangu-black">
         <Title subText="Get To Know" text="About Me" />
         <article className="mt-8 md:mt-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-10">
            <aside className="flex flex-col gap-5 md:gap-6 lg:mr-6">
               <CardAbout
                  image={briefcase}
                  name="experience"
                  title="1 Year Internship"
               />
               <CardAbout image={task} name="Project" title="6 Completed" />
            </aside>
            <TextLarge />
         </article>
      </section>
   );
}
