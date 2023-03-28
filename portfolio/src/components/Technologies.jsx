import React from "react";
import style from "./style.module.css";
import { DiJavascript1 } from "react-icons/di";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

const Technologies = () => {
     return (
          <section className={`bg-about-section p-4 relative`} id="Technology">
               <div className={`mb-5`}>
                    <h2 className={`text-about-header font-bold text-3xl`}>
                              <span className={`font-bold text-xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl`}
                                   >
                                   T
                                   </span>
                                   ECH:NOLOGY.
                                   </span>
                         </h2>
               </div>
               <div className={`flex items-center justify-center pt-8 overflow-hidden mb-4`}>
                     <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>01</h1>
                              <p>Javascript</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>02</h1>
                              <p>Typescript</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>03</h1>
                              <p>React js</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>04</h1>
                              <p>Next js</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>05</h1>
                              <p>jQuery</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>06</h1>
                              <p>Git & Github</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>07</h1>
                              <p>Tailwind</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
                    <div className={`${style.technology_div} border border-dashed border-t-orange border-r-orange border-l-light-blue2 border-b-light-blue2 w-40 h-40 p-4 flex justify-center items-center rounded-tr-3xl mr-4`}>
                         <div  className={`text-lg font-bold text-about-header text-center`}>
                              <h1>08</h1>
                              <p>Bootstrap</p>
                         </div>
                         <DiJavascript1 className={`w-8 h-8 bg-orange absolute -top-4 text-about-header left-7 z-10`} />
                    </div>
               </div>
          </section>
     )
}

export default Technologies;
