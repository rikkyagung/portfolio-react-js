import { useState } from "react";
import datas from "../../data/navbar.json";
import { NavMobile, NavDesktop } from "../";

export default function Navbar() {
   const [isNavActive, setIsNavActive] = useState("Home");

   return (
      <nav>
         <NavMobile
            datas={datas}
            isActive={isNavActive}
            setIsActive={setIsNavActive}
         />
         <NavDesktop
            datas={datas}
            isActive={isNavActive}
            setIsActive={setIsNavActive}
         />
      </nav>
   );
}
