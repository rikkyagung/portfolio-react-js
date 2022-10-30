import { Home } from "./component";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
   return (
      <ThemeProvider>
         <Home />
      </ThemeProvider>
   );
};
export default App;
