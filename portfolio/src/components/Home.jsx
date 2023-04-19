import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";
import { MdCodeOff } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Frame from "../Img/Group 7.svg";
import Frame2 from "../Img/Group 7 (2).svg";
import Img1 from "../Img/Gloria.jpg";
import style from "../styles/style.module.css";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

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

  const theme = useContext(ThemeContext);

  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
    <section className={`pt-[4rem] md:pt-0  ${theme ? `${style.header_light}` : `${style.header}`}`} id="Header">
      <div className={`${style.home_page} flex flex-col justify-center h-[100vh]`}>
      <header className={`flex justify-between px-6 md:px-10 xl:px-14`}>
        <div className={`${style.header_div} w-[50%] h-[300px] mb-8 relative md:h-[400px] md:w-[70%]`}>
          {theme ? <img src={Frame2} className={``} alt="" /> : <img src={Frame} className={``} alt="" />}
          <img src={Img1} alt="" className={`${style.header_img} backdrop-blur-[60px] shadow-lg w-100-h-100 object-cover`} />
          <div
            className={`${style.header_img2}  text-orange absolute flex justify-center px-4 pt-6 top-[45px] left-[45px] md:top-[52px] md:left-[75px] lg:left-[95px] xl:left-[105px] shadow-md backdrop-blur-[30px] md:items-center md:pt-0 ${theme ? `bg-[rgba(226,240,242,0.05)] shadow-md` : `bg-[rgba(1,51,66,0.44)]`}`}
          >
            <div className={`z-10`}>
              <TextTransition springConfig={presets.default}>
                <MdCode className={`md:text-2xl`} />
                <p className={` font-["Nunito"] font-bold text-base md:text-2xl ${theme ? `text-[#162729] ` : `text-icons`}`}>{TEXTS[index % TEXTS.length]}</p>
                <MdCodeOff className={`md:text-2xl`} />
              </TextTransition>
            </div>
          </div>
        </div>
        <div
          className={`w-20 h-40 relative flex justify-start items-center flex-col ${theme ? `bg-[#e2f0f2] text-[#354f52] shadow-sm` : `bg-icons-bg text-icons`}`}
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
              className={`${style.cta_text} absolute text-center  uppercase bg-orange p-1 font-bold font-["Nunito"] text-header-background`}
            >
              follow &nbsp; me
            </span>
          </div>
        </div>
      </header>
      </div>
        </section>
    </motion.main>
  );
};

export default Header;
