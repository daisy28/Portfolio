import React from "react";
import style from "./style.module.css";
import Frame from "../Img/Group 3.svg";

const Footer = () => {
     return (
          <section className={`${style.footer} bg-[#041b25] relative`}>
               
               <div className={`flex justify-center items-center text-about-header font-semibold text-center p-4`}>
                    <p>&copy;2023 - Gloria <span className={`text-orange font-extrabold text-2xl`}>&nbsp;|&nbsp;</span> All rights reserved</p>
               </div>
               
          </section>
     )
}

export default Footer;