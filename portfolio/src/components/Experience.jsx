import React from "react";
// import { CgArrowLongDownC } from "react-icons/cg";
// import { ImPriceTag } from "react-icons/im";
// import { RiHomeFill } from "react-icons/ri";
import Frame1 from "../Img/Group 9.svg";
import Frame2 from "../Img/Group 12.svg";
import style from "./style.module.css";




const Experience = () => {
     return (
          <section className={`bg-about-section p-6`} id="Experience">
               <div className={`md:hidden`}>
                    <div className={`mb-8`}>
                         <h2 className={`text-about-header font-bold text-3xl md:text-6xl`}>
                              <span className={`font-bold text-xl md:text-3xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl md:text-9xl`}
                                   >
                                   E
                                   </span>
                                   X:PERIENCE.
                                   </span>
                         </h2>
                    </div>
                    <div className={`relative mb-10`}>
                         {/* <div className={`mx-auto relative mb-6`}>
                              <img src={Frame2} alt="" className={`w-[80%] mx-auto`} />
                         </div> */}
                         <img src={Frame1} alt="" className={`absolute h-[185px]`} />
                         <div className={`ml-8`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>Sololearn &#123;2021&#125;</h1>
                              <p className={`text-body-text mb-4`}>Completed a course and series of challenges by demonstrating theoritical understanding of HTML & CSS. Certificate issued by Sololearn.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>
                    <div className={`relative mb-10 text-right`}>
                         <img src={Frame1} alt="" className={`absolute h-[185px] right-0`} />
                         <div className={`mr-8`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>Women Techsters &#123;2021&#125;</h1>
                              <p className={`text-body-text mb-4`}>Successfully completed a 2-week Bootcamp training in software development with the Women Techsters in collaboration with Microsoft.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>
                    <div className={`relative mb-10`}>
                         <img src={Frame1} alt="" className={`absolute h-[185px]`} />
                         <div className={`ml-8`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>I4GxZuri &#123;2021&#125;</h1>
                              <p className={`text-body-text mb-4`}>Participated in an intensive training in Fullstack development program sponsored by I4GxZuri. Collaborated in teams to build and deploy projects.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>
                    <div className={`relative mb-10 text-right`}>
                         <img src={Frame1} alt="" className={`absolute h-[185px] right-0`} />
                         <div className={`mr-8`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>HNG &#123;2022&#125;</h1>
                              <p className={`text-body-text mb-4`}>Successfully completed a 2-week Bootcamp training in software development with the Women Techsters in collaboration with Microsoft.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>
               </div>

               <div className={`hidden md:block lg:px-[4rem] xl:px-14`}>
                    <div className={`mb-10`}>
                         <h2 className={`text-about-header font-bold text-3xl md:text-6xl`}>
                              <span className={`font-bold text-xl md:text-3xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl md:text-9xl`}
                                   >
                                   E
                                   </span>
                                   X:PERIENCE.
                                   </span>
                         </h2>
                    </div>
                    <div className={`relative`}>
                         <div className={`flex items-center w-[80%] xl:w-[90%] xl:ml-auto`}>
                              <div className={`relative mb-10`}>
                         <img src={Frame1} alt="" className={`absolute h-[250px]`} />
                         <div className={`ml-8 w-[200px]`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>Sololearn</h1>
                              <p className={`text-body-text mb-4`}>Completed a course and series of challenges by demonstrating theoritical understanding of HTML & CSS. Certificate issued by Sololearn.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                         </div>
                         
                         <div className={`relative mb-10 ml-[8rem] lg:ml-[12rem] xl:ml-[14rem]`}>
                         <img src={Frame1} alt="" className={`absolute h-[250px]`} />
                         <div className={`ml-8 w-[200px]`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>I4GxZuri</h1>
                              <p className={`text-body-text mb-4`}>Participated in an intensive training in Fullstack development program sponsored by I4GxZuri. Collaborated in teams to build and deploy projects.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>

                         </div>
                    

                         <div className={`flex justify-center items-center mb-4`}>
                              <div className={`relative`}>
                              <img src={Frame2} alt="" className={`w-[220px]`} />
                              <p className={`absolute text-about-header text-xl font-bold top-[3.5px] left-[24px]`}>&#123;2021&#125;</p>
                              </div>
                              <div className={`relative`}>
                              <img src={Frame2} alt="" className={`w-[220px]`} />
                              <p className={`absolute text-about-header text-xl font-bold top-[3.5px] left-[24px]`}>&#123;2021&#125;</p>
                             </div>
                             <div className={`relative`}>
                              <img src={Frame2} alt="" className={`w-[220px]`} />
                              <p className={`absolute text-about-header text-xl font-bold top-[3.5px] left-[24px]`}>&#123;2022&#125;</p>
                              </div>
                              <div className={`relative`}>
                              <img src={Frame2} alt="" className={`w-[220px]`} />
                              <p className={`absolute text-about-header text-xl font-bold top-[3.5px] left-[24px]`}>&#123;2022&#125;</p>
                             </div>
                         </div>

                    <div className={`flex items-center w-[75%] left-[180px] ml-auto xl:w-[70%]`}>
                          <div className={`relative mb-10`}>
                         <img src={Frame1} alt="" className={`absolute h-[250px]`} />
                         <div className={`ml-8 w-[200px]`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>Women Techsters</h1>
                              <p className={`text-body-text mb-4`}>Successfully completed a 2-week Bootcamp training in software development with the Women Techsters in collaboration with Microsoft.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>
                    
                    <div className={`relative mb-10 ml-[6rem] lg:ml-[11rem] xl:ml-[13rem]`}>
                         <img src={Frame1} alt="" className={`absolute h-[250px]`} />
                         <div className={`ml-8 w-[200px]`}>
                              <h1 className={`text-about-header font-bold text-lg mb-2`}>HNG</h1>
                              <p className={`text-body-text mb-4`}>Successfully completed a 2-week Bootcamp training in software development with the Women Techsters in collaboration with Microsoft.</p>
                              <a href="#." className={`rounded p-2 bg-gradient-to-r from-orange to-yellow-400 font-bold text-lg`}>Access Certificate</a>
                         </div>
                    </div>
                    </div>
                         </div>
               </div>
          </section>
     )
}

export default Experience;