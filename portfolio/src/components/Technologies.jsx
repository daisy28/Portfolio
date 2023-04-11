import React from "react";
import style from "./style.module.css";
import { DiJavascript } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { RiNetflixLine } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";

const Technologies = () => {

     const carousel = (slider) => {
          const z = 300
          function rotate() {
               const deg = 360 * slider.track.details.progress
               slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
          }
          slider.on("created", () => {
               const deg = 360 / slider.slides.length
               slider.slides.forEach((element, idx) => {
                    element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
               })
               rotate()
          })
          slider.on("detailsChanged", rotate)
     }
     
     const [sliderRef] = useKeenSlider({
          loop: true,
          renderMode: "custom",
          mode: "free-snap",
          selector: ".carousel__cell",
     },
     [carousel]);
     
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

               <div className={`wrapper flex justify-center mb-5`}>
               <div className={`scene`}>
               <div className={`carousel keen-slider pt-8 mb-4`} ref={sliderRef}>
                     <div className={`bg-white carousel__cell  flex justify-center items-center number-slide1`}>
                         <div>
                              <DiJavascript className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>01</h1>
                              <p>Javascript</p>
                         </div>   
                         </div>
                     </div>
                     
                     <div className={`bg-red-400 carousel__cell  flex justify-center items-center number-slide2`}>
                         <div>
                              <SiTypescript className={`w-8 h-8 bg-about-section absolute -top-4 text-orange left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>02</h1>
                              <p>Typescript</p>
                         </div>   
                         </div>
                     </div>
                     
                     <div className={`bg-lime-400 carousel__cell  flex justify-center items-center number-slide3`}>
                         <div>
                              <DiReact className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>03</h1>
                              <p>React</p>
                         </div>   
                         </div>
                              </div>
                              
                     <div className={`bg-red-400 carousel__cell  flex justify-center items-center number-slide4`}>
                         <div>
                              <RiNetflixLine className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>04</h1>
                              <p>Next Js</p>
                         </div>   
                         </div>
                              </div>
                              
                     <div className={`bg-teal-400 carousel__cell  flex justify-center items-center number-slide5`}>
                         <div>
                              <SiJquery className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>05</h1>
                              <p>JQuery</p>
                         </div>   
                         </div>
                     </div>
                     <div className={`bg-yellow-400 carousel__cell  flex justify-center items-center number-slide6`}>
                         <div>
                              <DiGit className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>06</h1>
                              <p>Git & Github</p>
                         </div>   
                         </div>
                     </div>
                     <div className={`bg-blue-400 carousel__cell  flex justify-center items-center number-slide7`}>
                         <div>
                              <SiTailwindcss className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>07</h1>
                              <p>Tailwind</p>
                         </div>   
                         </div>
                     </div>
                     <div className={`bg-green-400 carousel__cell  flex justify-center items-center number-slide8`}>
                         <div>
                              <DiBootstrap className={`w-8 h-8 bg-orange absolute -top-4 text-about-section left-7 z-10`} />
                              <div  className={`text-lg font-bold text-about-section text-center`}>
                              <h1>08</h1>
                              <p>Bootstrap</p>
                         </div>   
                         </div>
                     </div>

               </div>
               </div> 
               </div>
          </section>
     )
}

export default Technologies;
