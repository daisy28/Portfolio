import React from "react";
import style from "./style.module.css";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3} from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiMaterializecss } from "react-icons/di";
import { SiSlack } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { RiNetflixLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiWebflow } from "react-icons/si";
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
          <section className={`bg-about-section p-6 py-10 relative overflow-hidden border-b-2 border-icons xl:px-14`} id="Technology">
               <div className={`mb-5`}>
                    <h2 className={`text-about-header font-bold text-3xl md:text-6xl`}>
                              <span className={`font-bold text-xl md:text-3xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl md:text-9xl`}
                                   >
                                   T
                                   </span>
                                   ECH:NOLOGY.
                                   </span>
                         </h2>
               </div>

               <div className={`wrapper flex justify-center mb-5 py-[4rem]`}>
               <div className={`scene`}>
               <div className={`carousel keen-slider pt-8 mb-4`} ref={sliderRef}>
                     <div className={`bg-white carousel__cell flex justify-center items-center number-slide1`}>
                         <div>
                              <div className={`absolute -top-4 left-7 z-10 flex justify-between`}>
                              <DiHtml5 className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <DiCss3 className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <DiJavascript className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center md:text-2xl`}>
                              <h1>01</h1>
                              <p>Html</p>
                              <p>Css</p>
                              <p>Javascript</p>
                         </div>   
                         </div>
                     </div>
                     
                     <div className={`bg-blue-400 carousel__cell  flex justify-center items-center number-slide2`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              <SiTypescript className={`w-8 h-8 bg-black text-orange mr-2`} />
                              <DiReact className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <RiNetflixLine className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div  className={`text-lg font-bold text-about-section text-center md:text-2xl`}>
                              <h1>02</h1>
                              <p>Typescript</p>
                              <p>React</p>
                              <p>Next Js</p>
                         </div>   
                         </div>
                     </div>
                     
                     <div className={`bg-green-400 carousel__cell  flex justify-center items-center number-slide3`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              <DiGit className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <FiFigma className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <SiSlack className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div  className={`text-lg font-bold text-about-section text-center md:text-2xl`}>
                              <h1>03</h1>
                              <p>Git & Github</p>
                              <p>Figma</p>
                              <p>Slack</p>
                         </div>   
                         </div>
                              </div>
                              
                     <div className={`bg-red-400 carousel__cell  flex justify-center items-center number-slide4`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              <DiWordpress className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <SiWebflow className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <SiShopify className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center md:text-2xl`}>
                              <h1>04</h1>
                              <p>Wordpress</p>
                              <p>Webflow</p>
                              <p>Shopify</p>
                         </div>   
                         </div>
                              </div>
                     <div className={`bg-yellow-400 carousel__cell  flex justify-center items-center number-slide6`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              <SiTailwindcss className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <DiBootstrap className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <DiMaterializecss className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center md:text-2xl`}>
                              <h1>05</h1>
                              <p>Tailwind</p>
                              <p>Bootstrap</p>
                              <p>Materilaize</p>
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
