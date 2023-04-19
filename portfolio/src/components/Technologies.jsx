import React, { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../styles/style.module.css";
// import { DiJavascript } from "react-icons/di";
// import { DiHtml5 } from "react-icons/di";
// import { DiCss3} from "react-icons/di";
// import { DiBootstrap } from "react-icons/di";
// import { DiWordpress } from "react-icons/di";
// import { DiMaterializecss } from "react-icons/di";
// import { SiSlack } from "react-icons/si";
// import { DiGit } from "react-icons/di";
// import { DiReact } from "react-icons/di";
// import { FiFigma } from "react-icons/fi";
// import { RiNetflixLine } from "react-icons/ri";
// import { SiTailwindcss } from "react-icons/si";
// import { SiTypescript } from "react-icons/si";
// import { SiShopify } from "react-icons/si";
// import { SiWebflow } from "react-icons/si";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/style.css";
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
                     <div className={`bg-orange carousel__cell flex justify-center items-center number-slide1 rounded`}>
                         <div>
                              <div className={`absolute -top-4 left-7 z-10 flex justify-between`}>
                              {/* <DiHtml5 className={`w-8 h-8  text-black mr-2`} />
                              <DiCss3 className={`w-8 h-8  text-black mr-2`} />
                              <DiJavascript className={`w-8 h-8  text-black`} /> */}
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center  relative`}>
                                   <div className={`bg-[rgba(79,38,30,0.1)] backdrop-blur[40px] w-[70px] h-[70px] rounded-full absolute -top-[50px] flex justify-center items-center shadow-md`}>
                                        <p>Html</p>
                                   </div>
                                   <div className={`bg-[rgba(25,57,67,0.1)] backdrop-blur[40px] w-[50px] h-[50px] rounded-full absolute flex justify-center items-center -top-[50px] -left-[40px] shadow-md`}>
                                        <p>Css</p>
                                   </div>
                                   <div className={`bg-[rgba(58,65,25,0.1)] backdrop-blur[40px] w-[120px] h-[120px] rounded-full absolute flex justify-center items-center -top-[20px] -left-[80px] shadow-md `}>
                                        <p>Javascript</p>
                                   </div>
                              </div>   
                         </div>
                     </div>
                     
                     <div className={`bg-blue-900 carousel__cell  flex justify-center items-center number-slide2 rounded`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              {/* <SiTypescript className={`w-8 h-8 bg-black text-orange mr-2`} />
                              <DiReact className={`w-8 h-8  text-black mr-2`} />
                              <RiNetflixLine className={`w-8 h-8  text-black`} /> */}
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center  relative`}>
                                   <div className={`bg-[rgba(61,23,46,0.1)] backdrop-blur[40px] w-[120px] h-[120px] rounded-full absolute -top-[30px] -left-[10px] flex justify-center items-center shadow-md `}>
                                        <p>Typescript</p>
                                   </div>
                                   <div className={`bg-[rgba(28,65,26,0.1)] backdrop-blur[40px] w-[80px] h-[80px] rounded-full absolute flex justify-center items-center top-[15px] -left-[70px] shadow-md`}>
                                        <p>React</p>
                                   </div>
                                   <div className={`bg-[rgba(24,24,60,0.1)] w-[100px] h-[100px] rounded-full absolute flex justify-center items-center -top-[80px] -left-[80px] backdrop-blur[40px] shadow-md`}>
                                        <p>Nextjs</p>
                                   </div>
                              </div>    
                         </div>
                     </div>
                     
                     <div className={`bg-green-900 carousel__cell  flex justify-center items-center number-slide3 rounded`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              {/* <DiGit className={`w-8 h-8  text-black mr-2`} />
                              <FiFigma className={`w-8 h-8  text-black mr-2`} />
                              <SiSlack className={`w-8 h-8  text-black`} /> */}
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center  relative`}>
                                   <div className={`bg-[rgba(34,71,31,0.1)] backdrop-blur[40px] w-[120px] h-[120px] rounded-full absolute -top-[30px] -left-[10px] flex justify-center items-center flex-col shadow-md `}>
                                        <p>Git</p>
                                        <p>&</p>
                                        <p>Github</p>
                                   </div>
                                   <div className={`bg-[rgba(190,111,111,0.1)] backdrop-blur[40px] w-[80px] h-[80px] rounded-full absolute flex justify-center items-center top-[15px] -left-[70px] shadow-md`}>
                                        <p>Figma</p>
                                   </div>
                                   <div className={`bg-[rgba(202,118,207,0.1)] w-[100px] h-[100px] rounded-full absolute flex justify-center items-center -top-[80px] -left-[80px] backdrop-blur[40px] shadow-md`}>
                                        <p>Slack</p>
                                   </div>
                              </div>     
                         </div>
                              </div>
                              
                     <div className={`bg-red-900 carousel__cell  flex justify-center items-center number-slide4 rounded`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              {/* <DiWordpress className={`w-8 h-8  text-black mr-2`} />
                              <SiWebflow className={`w-8 h-8  text-black mr-2`} />
                              <SiShopify className={`w-8 h-8  text-black`} /> */}
                              </div>
                              <div className={`text-lg font-bold text-about-section text-center  relative`}>
                                   <div className={`bg-[rgba(59,112,153,0.1)] backdrop-blur[40px] w-[120px] h-[120px] rounded-full absolute -top-[30px] -left-[10px] flex justify-center items-center shadow-md `}>
                                        <p>Wordpress</p>
                                   </div>
                                   <div className={`bg-[rgba(188,85,114,0.1)] backdrop-blur[40px] w-[90px] h-[90px] rounded-full absolute flex justify-center items-center top-[10px] -left-[70px] shadow-md`}>
                                        <p>Webflow</p>
                                   </div>
                                   <div className={`bg-[rgba(220,83,83,0.1)] w-[100px] h-[100px] rounded-full absolute flex justify-center items-center -top-[80px] -left-[80px] backdrop-blur[40px] shadow-md`}>
                                        <p>Shopify</p>
                                   </div>
                              </div>   
                         </div>
                              </div>
                     <div className={`bg-yellow-900 carousel__cell  flex justify-center items-center number-slide6 rounded`}>
                         <div>
                              <div className={`absolute -top-4  left-7 z-10 flex justify-between`}>
                              {/* <SiTailwindcss className={`w-8 h-8  text-black mr-2`} />
                              <DiBootstrap className={`w-8 h-8  text-black mr-2`} />
                              <DiMaterializecss className={`w-8 h-8  text-black`} /> */}
                              </div>
                               <div className={`text-lg font-bold text-about-section text-center  relative`}>
                                   <div className={`bg-[rgba(95,92,241,0.1)] backdrop-blur[40px] w-[120px] h-[120px] rounded-full absolute -top-[30px] -left-[10px] flex justify-center items-center shadow-md `}>
                                        <p>Tailwind</p>
                                   </div>
                                   <div className={`bg-[rgba(91,61,113,0.1)] backdrop-blur[40px] w-[90px] h-[90px] rounded-full absolute flex justify-center items-center top-[8px] -left-[70px] shadow-md`}>
                                        <p>Bootstrap</p>
                                   </div>
                                   <div className={`bg-[rgba(141,51,111,0.1)] w-[100px] h-[100px] rounded-full absolute flex justify-center items-center -top-[80px] -left-[80px] backdrop-blur[40px] shadow-md`}>
                                        <p>Materialize</p>
                                   </div>
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
