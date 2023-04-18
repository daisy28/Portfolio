import React, { useContext } from "react";
import { ThemeContext } from "../App";
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
import { motion } from "framer-motion";

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

     const theme = useContext(ThemeContext);
     
     return (
          <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
          <section className={`p-6 py-10 relative overflow-hidden xl:px-14 ${theme ? `bg-[#f3f8f8]` : `bg-about-section`}`} id="Technology">
               <div className={`${style.technology_page} flex flex-col justify-center h-[100vh]`}>
               <div className={`mb-5`}>
                    <h2 className={`font-bold text-3xl md:text-6xl ${theme ? `text-[#071e1e]` : `text-about-header`}`}>
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
                     <div className={`bg-white carousel__cell flex justify-center items-center number-slide1 rounded`}>
                         <div>
                              <div className={`absolute -top-4 left-7 z-10 flex justify-between`}>
                              <DiHtml5 className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <DiCss3 className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <DiJavascript className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center md:text-2xl relative`}>
                                   <div className={`bg-[#d26552] backdrop-blur-[20px] w-[70px] h-[70px] rounded-full absolute -top-[80px] flex justify-center items-center`}>
                                        <p>Html</p>
                                   </div>
                                   <div className={`bg-[#7dd8f1] w-[50px] h-[50px] rounded-full absolute flex justify-center items-center -top-[70px] -left-[70px]`}>
                                        <p>Css</p>
                                   </div>
                                   <div className={`bg-[#498a9e] w-[120px] h-[120px] rounded-full absolute flex justify-center items-center -top-[20px] -left-[80px]`}>
                                        <p>Javascript</p>
                                   </div>
                              </div>   
                         </div>
                     </div>
                     
                     <div className={`bg-blue-400 carousel__cell  flex justify-center items-center number-slide2 rounded`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              <SiTypescript className={`w-8 h-8 bg-black text-orange mr-2`} />
                              <DiReact className={`w-8 h-8 bg-orange text-black mr-2`} />
                              <RiNetflixLine className={`w-8 h-8 bg-orange text-black`} />
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center md:text-2xl relative`}>
                                   <div className={`bg-[#d17a6b] backdrop-blur-[20px] w-[120px] h-[120px] rounded-full absolute -top-[30px] -left-[10px] flex justify-center items-center`}>
                                        <p>Typescript</p>
                                   </div>
                                   <div className={`bg-[#98d3e3] w-[80px] h-[80px] rounded-full absolute flex justify-center items-center top-[15px] -left-[50px]`}>
                                        <p>React</p>
                                   </div>
                                   <div className={`bg-[#549eb5] w-[100px] h-[100px] rounded-full absolute flex justify-center items-center -top-[80px] -left-[80px]`}>
                                        <p>Nextjs</p>
                                   </div>
                         </div>    
                         </div>
                     </div>
                     
                     <div className={`bg-green-400 carousel__cell  flex justify-center items-center number-slide3 rounded`}>
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
                              
                     <div className={`bg-red-400 carousel__cell  flex justify-center items-center number-slide4 rounded`}>
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
                     <div className={`bg-yellow-400 carousel__cell  flex justify-center items-center number-slide6 rounded`}>
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
               </div>
               </section>
               </motion.main>
     )
}

export default Technologies;
