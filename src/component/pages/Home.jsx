import { Hero, About, Service, Project, Collab } from "../";
import Layout from "../../layout";

export default function Home() {
   return (
      <main
         id="home"
         className="relative bg-boysenberry-shadow font-montserrat transition-all duration-500 ease-linear"
      >
         <Layout>
            <Hero />
            <section className="relative bg-azureish-white bg-opacity-70 px-5 dark:bg-raisin-black md:px-10 lg:px-16 lg:pt-4 xl:px-20">
               <About />
               <Service />
               <Project />
               <Collab />
            </section>
         </Layout>
      </main>
   );
}
