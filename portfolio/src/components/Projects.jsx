import React, {useState } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import { FaBorderStyle } from "react-icons/fa";
import style from "./style.module.css";
import Data from "../data/project";
import Img from "../Img/images (5).jpeg";
import Frame from "../Img/Group 5.svg"

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
      <section className={`${style.project_section} border-none p-4`} id="Projects">
           <div className={`relative z-10`}>
                    <div className={`relative`}>
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
                {data.map(info => {
                        return (<div className={`${style.project_div} my-8 px-8`} key={info.id}> 
                             <h3 className={`font-semibold text-lg text-about-header`}>{info.title}</h3>
                             <div className={`relative my-4`}>
                                  <img src={Frame} alt="" className={`w-[261px] h-[261px]`} />
                                  <img src={Img} alt="" className={`absolute h-[220px] w-[220px] bottom-[20px] left-[20px]`} />
                             </div>
                         <p className={`text-body-text text-base font-semibold font-["Nunito"] text-left py-4`}>{info.description}</p>
                         <div className={`flex justify-start items-center`}>
                              <a href={info.url} className={`${style.border_gradient}  text-about-header font-semibold pb-2 animate-pulse`}>Visit Site</a>
                              <a href={info.github} className={`${style.border_gradient}  text-about-header font-semibold pb-2 ml-8 animate-pulse`}>Github</a>  
                         </div>
                    </div>)
                   })}
               </div>
               
               <div className={`relative my-10 p-5`}>
                    <div className={`relative`}>
                         <VscChevronLeft className={`${style.project_border} w-64 h-64 text-gradient1 rotate-45`} />
                    </div>
                    <div className={`flex flex-col items-start p-4`}>
                         <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out`} onClick={firstProject}>Proj1</button>
                         <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out `} onClick={secondProject}>Proj2</button>  
                         <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out`} onClick={thirdProject}>Proj3</button>
                     <button className={`${style.border_gradient} z-10  text-about-header font-semibold pb-1 mb-4 transition duration-700 ease-in-out`} onClick={fourthProject}>Proj4</button>
                </div>
                    </div>
     </section>
)
}

export default Projects;