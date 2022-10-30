import { Navbar, Footer } from "../component";

export default function Layout(props) {
   return (
      <>
         <Navbar />
         {props.children}
         <Footer />
      </>
   );
}
