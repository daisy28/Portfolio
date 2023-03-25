import React from "react";
import style from "./style.module.css";

const About = () => {
     return (
          <section className={`bg-about-section p-4`}>
               <div>
                    <h1 className={`text-about-header`}>Hi, my name is <p className={`font-bold text-xl`}><span className={`${style.name} font-extrabold text-orange text-3xl`}>G</span>LO:RIA</p></h1>
               </div>
               <div></div>
               {/* About */}
          </section>
     )
}

export default About;