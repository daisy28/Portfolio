import React from "react";
import { MdEqualizer } from "react-icons/md";
import { MdCodeOff } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { TbChevronsUpLeft } from "react-icons/tb";
import Img1 from "../Img/images (5).jpeg";
import style from "./style.module.css";



const Header = () => {
     return (
          <section className={`bg-header-background`}>
               <nav className={`text-header-text text-xs flex justify-between items-center px-4 py-8 font-bold font-['Nunito']`}>
                    <div>
                         <MdCodeOff className={`bg-transparent text-orange text-5xl`} />
                    </div>
                    <div className={`hidden`}>
                         <a href="#About">About</a>
                         <a href="#Projects">Projects</a>
                         <a href="#Experience">Experience</a>
                         <a href="#Technology">Technology</a>
                         <a href="#Contact">Contact</a>
                    </div>
                    
                    <div>
                         <MdEqualizer className={`bg-transparent text-orange text-5xl`} />
                    </div>
               </nav>
               <header className={`flex justify-between p-4 mt-4`}>
                    <div className={`${style.header_div} mb-8 relative`}>
                         <TbChevronsUpLeft className={`${style.header_icon} text-icons-bg w-full h-full relative`} />
                         <img src={Img1} alt="" className={`${style.header_img} grayscale`} />
                         <div className={`${style.header_img2} bg-icons-bg text-icons flex justify-center items-center uppercase`}>
                              <p>&lt;&gt;Hello World&lt;/&gt;</p>
                         </div>
                    </div>
                    <div className={`bg-icons-bg text-icons w-12 h-40 relative flex justify-start items-center flex-col`}>
                         <a href="#."><FaGithub className={`mb-6 mt-4`} /></a>
                         <a href="#."><FaTwitter className={`mb-6`} /></a>
                         <a href="#."><FaLinkedinIn className={`mb-6`} /></a>
                         <div className={`${style.cta} relative my-8`}>
                              <span className={`${style.cta_text} absolute text-center text-header-background uppercase bg-orange p-1 font-bold`}>follow &nbsp; me</span>
                         </div>
                    </div>
               </header>
          </section>
     )
}

export default Header;