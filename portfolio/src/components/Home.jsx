import React, { useState, useEffect } from "react";
import { MdCodeOff } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Frame from "../Img/Group 7.svg";
import Img1 from "../Img/images (5).jpeg";
import style from "./style.module.css";
import TextTransition, { presets } from "react-text-transition";

const Header = () => {
  const TEXTS = [
    `Hello World.`,
    `I develop web applications,`,
    `with cutting-edge, beautiful interfaces and intuitively implemented UX.`,
    `Passionate about dynamic code structure & Responsive Web Designs.`,
    `Collaborate with teams to build SEO optimized & scalable apps,`,
    `Integrate third party Libraries & Frameworks`,
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
    <section className={`${style.header} pt-[4rem] md:pt-0 bg-header-background`} id="Header">
      <div className={`${style.home_page} flex flex-col justify-center h-[100vh]`}>
      <header className={`flex justify-between px-6 md:px-10 xl:px-14`}>
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
          <a href="https://github.com/daisy28" className={`hover:text-orange md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <FaGithub className={`mb-6 mt-4`} />
          </a>
          <a href="https://twitter.com/gloriah_CU?s=09" className={`hover:text-orange md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <FaTwitter className={`mb-6`} />
          </a>
          <a href="https://www.linkedin.com/in/gloria-ubah-a74446156" className={`hover:text-orange md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
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
      </div>
    </section>
  );
};

export default Header;
