import React, {useState } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import style from "./style.module.css";
import Data from "../data/project";
import Img from "../Img/images (5).jpeg";
import Frame1 from "../Img/Group 7.svg";

const Projects = () => {
     const [displayData, setDisplayData] = useState(Data);
     const [index, setIndex] = useState(0);
     const data = displayData.filter(info => {
          return info.id === index ? info : null;
     });
     const firstProject = () => {
          setIndex(firstIndex => firstIndex = 0);
     }
     const secondProject = () => {
          setIndex(secondIndex => secondIndex = 1);
     }
     const thirdProject = () => {
          setIndex(thirdIndex => thirdIndex = 2);
     }
     const fourthProject = () => {
          setIndex(fourthIndex => fourthIndex = 3);
     }
    
 return (
      <section className={`${style.project_section}  border-b-2 border-icons p-4 md:p-0 relative`} id="Projects">
           <img src={Frame1} alt="" className={`absolute top-0 left-0`} />
           <div className={`relative p-[2rem] md:pt-[4rem] md:pl-[4rem]`}>
                         <h2 className={`text-about-header font-bold text-3xl`}>
                              <span className={`font-bold text-xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl`}
                                   >
                                   P
                                   </span>
                                   RO:JECTS.
                                   </span>
                         </h2>
                    </div>
           <div className={`p-[2rem] md:flex justify-between items-center md:px-[4rem] md:py-[6rem]`}>
           <div className={`relative z-10 md:w-[70%]`}>
                {data.map(info => {
                        return (<div className={`${style.project_div} my-8 px-4 md:px-8 md:my-0`} key={info.id}> 
                             <h3 className={`font-semibold text-lg text-about-header`}>{info.title}</h3>
                             <div className={`relative my-4`}>
                                  <img src={Img} alt="" className={`w-full h-full`} />
                             </div>
                         <p className={`text-body-text text-base font-semibold font-["Nunito"] text-left py-4`}>{info.description}</p>
                         <div className={`flex justify-start items-center`}>
                              <a href={info.url} className={`${style.border_gradient}  text-about-header font-semibold pb-2 animate-pulse`}>Visit Site</a>
                              <a href={info.github} className={`${style.border_gradient}  text-about-header font-semibold pb-2 ml-8 animate-pulse`}>Github</a>  
                         </div>
                    </div>)
                   })}
               </div>
               
               <div className={`relative my-10 p-5 md:w-[20%] md:my-0`}>
                    <div className={`relative`}>
                         <VscChevronLeft className={`${style.project_border} w-[220px] h-[220px] text-gradient1 rotate-45`} />
                    </div>
                    <div className={`flex flex-col items-start p-4`}>
                         <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out`} onClick={firstProject}>Proj1</button>
                         <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out `} onClick={secondProject}>Proj2</button>  
                         <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out`} onClick={thirdProject}>Proj3</button>
                     <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out`} onClick={fourthProject}>Proj4</button>
                </div>
                    </div>
                    </div>
           <img src={Frame1} alt="" className={`absolute bottom-0 right-0 rotate-180`} />
     </section>
)
}

export default Projects;