import React from "react";
import { VscChevronLeft } from "react-icons/vsc";
import style from "./style.module.css";


const Projects = () => {
     return (
          <section className={`bg-about-section border-none p-4`}>
               
               <div className={`relative`}>
                    {/* <div className={`relative`}>
                         <VscChevronLeft className={`${style.project_border} w-64 h-64 text-gradient1 rotate-45`} />
                    </div> */}
                    <div className={`relative`}>
                         <h2 className={`text-about-header font-bold text-3xl`}>
                              <span className={`font-bold text-xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl`}
                                   >
                                   P
                                   </span>
                                   ROJ:ECTS.
                                   </span>
                         </h2>
                    </div>
                    <div className={`my-8 px-8 border-l-4 border-light-blue`}>
                         <h3 className={`font-semibold text-lg text-about-header`}>Weather App</h3>
                         <p className={`text-body-text text-base font-semibold font-["Nunito"] text-left py-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur est inventore ipsa ducimus dignissimos harum debitis fugit ipsum voluptatem ut eius earum cupiditate sapiente quae illum unde, recusandae accusamus!</p>
                         <div className={`flex justify-start items-center`}>
                              <a href="g" className={`border-b-2 border-light-blue text-about-header font-semibold pb-2`}>View Site</a>
                              <a href="g" className={`border-b-2 border-light-blue text-about-header font-semibold pb-2 ml-8`}>Github</a>  
                         </div>
                         
                    </div>
               </div>
               <div className={`relative my-10 p-5`}>
                    <div className={`relative`}>
                         <VscChevronLeft className={`${style.project_border} w-64 h-64 text-gradient1 rotate-45`} />
                    </div>
                    <div className={`flex flex-col justify-center items-start p-4`}>
                              <a href="g" className={`border-b-2 border-light-blue text-about-header font-semibold pb-1 mb-4`}>Proj1</a>
                         <a href="g" className={`border-b-2 border-light-blue text-about-header font-semibold pb-1 mb-4`}>Proj2</a>  
                         <a href="g" className={`border-b-2 border-light-blue text-about-header font-semibold pb-1 mb-4`}>Proj3</a>
                              <a href="g" className={`border-b-2 border-light-blue text-about-header font-semibold pb-1 mb-4`}>Proj4</a> 
                         </div>
               </div>
               
                
          </section>
     )
}

export default Projects;