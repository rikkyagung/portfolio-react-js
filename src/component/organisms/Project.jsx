import { useEffect, useState } from "react";
import projects from "../../data/project.json";
import { CardProject, Title } from "../";
import { untitled } from "../../assets";

const Project = () => {
   const [project, setProject] = useState([]);

   useEffect(() => {
      let result = projects.map((data) => {
         let { id, name, title, image, url } = data;
         return { id, name, title, image, url };
      });
      setProject(result);
   }, []);

   return (
      <section
         id="project"
         className="py-8 pb-44 text-center text-mangu-black md:pb-40 lg:pb-36"
      >
         <Title subText="Recent Work" text="Project" />
         <article className="mt-8 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {project?.reverse().map((data) => {
               return (
                  <div
                     key={data.id}
                     className="group relative overflow-hidden rounded-[10px] shadow-lg"
                  >
                     <CardProject
                        desc={data.title}
                        image={data.image === "" ? untitled : data.image}
                        alt={data.title}
                        url={data.url}
                     />
                  </div>
               );
            })}
         </article>
      </section>
   );
};
export default Project;
