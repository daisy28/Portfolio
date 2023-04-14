import React, { useState, useEffect } from "react";
import { MdEqualizer } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { MdCodeOff } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Frame from "../Img/Group 7.svg";
import Img1 from "../Img/images (5).jpeg";
import Logo from "../Img/Logo.png";
import style from "./style.module.css";
import TextTransition, { presets } from "react-text-transition";
import ReactCurvedText from 'react-curved-text';

const Header = () => {
  const TEXTS = [
    `Hello World.`,
    `I develop web applications,`,
    `with cutting-edge, beautiful interfaces and intuitively implemented UX.`,
    `Passionate about dynamic code structure & Responsive Web Designs.`,
    `Collaborate with teams to build SEO optimized & scalable apps,`,
    `Integrate third party Libraries and`,
    `Ensure the automated processing of Documents by using Semantic Elements.`,
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 4000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className={`${style.header} border-b-2 border-icons`} id="Header">
      <nav
        className={`text-icons text-xs flex justify-between items-center p-6 font-bold font-['Nunito'] md:px-10 xl:px-14`}
      >
        <div>
          <img src={Logo} alt="" className={`h-20 w-20 rounded-full`} />
        </div>
        <div className={`hidden md:flex justify-between items-center md:w-[60%] text-lg xl:w-[40%]`}>
          <a href="#Header" className={`hover:text-orange`}>Home</a>
          <a href="#About" className={`hover:text-orange`}>About</a>
          <a href="#Projects" className={`hover:text-orange`}>Projects</a>
          <a href="#Experience" className={`hover:text-orange`}>Experience</a>
          <a href="#Technology" className={`hover:text-orange`}>Technology</a>
        </div>

        <div className={`md:hidden`}>
          <MdEqualizer className={`bg-transparent text-orange text-5xl`} />
        </div>
        <div className={`relative cursor-pointer hidden md:block`}>
        <ReactCurvedText
        className={`text-orange`}
            width={80}
            height={80}
            cx={40}
            cy={40}
            rx={30}
            ry={30}
            startOffset={0}
            reversed={true}
            text="contact me . contact me ."
            textProps={{ style: { fontSize: 16} }}
            textPathProps={{ "fill": "#b51f06"}}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
          <a href="#Contact"><BsArrowUpRight className={`absolute font-bold text-xl text-orange top-[30px] left-[30px]`} /></a>
          </div>
        
      </nav>
      <header className={`flex justify-between p-6 mt-4 md:p-10 xl:px-14`}>
        <div className={`${style.header_div} w-[50%] h-[300px] mb-8 relative md:h-[400px] md:w-[70%]`}>
          <img src={Frame} alt="" />
          <img src={Img1} alt="" className={`${style.header_img} grayscale`} />
          <div
            className={`${style.header_img2} bg-icons-bg text-orange absolute flex justify-center px-4 pt-6 top-[45px] left-[45px] md:top-[55px] md:left-[55px] xl:left-[65px] md:items-center md:pt-0`}
          >
            <div>
              <TextTransition springConfig={presets.default}>
                <MdCode className={`md:text-2xl`} />
                <p className={`text-icons font-["Nunito"] font-bold text-base md:text-2xl`}>{TEXTS[index % TEXTS.length]}</p>
                <MdCodeOff className={`md:text-2xl`} />
              </TextTransition>
            </div>
          </div>
        </div>
        <div
          className={`bg-icons-bg text-icons w-20 h-40 relative flex justify-start items-center flex-col`}
        >
          <a href="#." className={`hover:text-orange md:text-lg`}>
            <FaGithub className={`mb-6 mt-4`} />
          </a>
          <a href="#." className={`hover:text-orange md:text-lg`}>
            <FaTwitter className={`mb-6`} />
          </a>
          <a href="#." className={`hover:text-orange md:text-lg`}>
            <FaLinkedinIn className={`mb-6`} />
          </a>
          <div className={`${style.cta} relative my-8`}>
            <span
              className={`${style.cta_text} absolute text-center text-header-background uppercase bg-orange p-1 font-bold font-["Nunito"]`}
            >
              follow &nbsp; me
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
