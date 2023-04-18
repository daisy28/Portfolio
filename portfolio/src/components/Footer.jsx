import React, { useContext } from "react";
import { ThemeContext } from "../App";
import style from "./style.module.css";
// import Frame from "../Img/Group 3.svg";

const Footer = () => {
     const theme = useContext(ThemeContext);
     return (
          <section className={`${style.footer} relative  ${theme ? `bg-[#fafafa] shadow-md text-[#002733]` : `bg-[#041b25] text-about-header`}`}>
               <div className={`flex justify-center items-center font-semibold text-center p-4`}>
                    <p>&copy;2023 - Gloria <span className={`text-orange font-extrabold text-2xl`}>&nbsp;|&nbsp;</span> All rights reserved</p>
               </div>
          </section>
     )
}

export default Footer;