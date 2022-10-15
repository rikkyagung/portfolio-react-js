import {
   Navbar,
   Hero,
   About,
   Service,
   Project,
   Collab,
   Footer,
} from "./component";

const App = () => {
   return (
      <main
         id="home"
         className="relative bg-boysenberry-shadow font-montserrat"
      >
         <Navbar />
         <Hero />
         <section className="relative bg-azureish-white bg-opacity-70 px-5 md:px-10 lg:px-16 lg:pt-4 xl:px-20">
            <About />
            <Service />
            <Project />
            <Collab />
         </section>
         <Footer />
      </main>
   );
};
export default App;
