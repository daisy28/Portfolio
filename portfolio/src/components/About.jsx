import React from "react";
import style from "./style.module.css";
import Me from "../Img/Gloria.jpg";
import { Md3DRotation } from "react-icons/md";
import { MdFmdGood } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";


const About = () => {
     return (
          <section className={`bg-about-section p-6`}>
               <div className={`relative mb-6`}>
                    <Md3DRotation className={`rotate-180 w-full h-full text-orange`} />
                    <img src={Me} alt="" className={`${style.my_image} absolute rounded-full`} />
               </div>
               <div className={``}>
                    <h1 className={`text-about-header font-base text-xl mb-2`}><span className={`font-bold text-2xl`}>H</span>i, my name is <span className={`font-bold text-xl`}><span className={`${style.name} font-extrabold text-orange text-3xl`}>G</span>LO:RIA.</span></h1>
                    <div>
                         <h4 className={`text-body-text text-base font-semibold font-["Nunito"]`}>I'm a Frontend Developer with 1+ year of experience. I define myself by the work I do. I build on-demand scalable, fully responsive custom designed web applications. I have a diverse set of skills acquired overtime to stand out from the ordinary. I've an extensive programming experience and comfortable developing on the frontend as well as maintaining and managing code infrastructure. </h4>
                         <div className={`text-center text-about-header font-semibold text-xl mt-5`}>
                              <h2>Fun facts about me</h2>
                              <div className={`w-40 mx-auto flex justify-between items-center text-orange relative my-8 cursor-pointer`}>
                                   <MdFmdGood className={`-rotate-90 text-4xl`} />
                                   <MdFmdGood className={`rotate-90 text-4xl`} />
                                   <MdOutlineChevronLeft className={`${style.arrow} text-about-section relative`} />
                                   <MdOutlineChevronRight className={`${style.arrow2} text-about-section relative`} />
                              </div>
                         </div>
                    </div>
                   
               </div>
               
               {/* About */}
          </section>
     )
}

export default About;