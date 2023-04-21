import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";
import { MdCodeOff } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import style from "../../styles/style.module.css";
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
    <section className={`md:w-[70%] z-10 relative top-[150px] mx-auto flex flex-col justify-center h-[80vh] ${theme ? `${style.header_light}` : `${style.header}`}`} id="Header">
      <header className={`flex justify-between items-start relative -bottom-[90px] md:-bottom-[200px] px-6 md:px-10 xl:px-14`}>
        <div className={`${style.header_div} w-[70%] relative -top-[120px] md:-top-[200px]`}>
          <div
            className={`${style.header_img2} text-[#fcfcfc] flex justify-center items-center p-4 md:py-10 ${theme ? `bg-[#f4ddce]` : `bg-[#070b0e]`}`}
          >
            <div className={`z-10 h-[200px] md:h-[340px]`}>
              <TextTransition springConfig={presets.default}>
                <MdCode className={`md:text-2xl text-[#af5c3b]`} />
                <p className={` font-["Nunito"] font-bold text-base md:text-3xl leading-[30px] md:leading-[60px] ${theme ? `text-[#191c20] ` : `text-[#fcfcfc]`}`}>{TEXTS[index % TEXTS.length]}</p>
                <MdCodeOff className={`md:text-2xl text-[#af5c3b]`} />
              </TextTransition>
            </div>
          </div>
        </div>
        <div
          className={`w-20 h-40 relative flex justify-start items-center lg:-top-[100px] lg:-left-[50px] flex-col ${theme ? `bg-[#edc9b2] text-[#191c20] shadow-sm` : `bg-[#070b0e] text-[#fcfcfc]`}`}
        >
          <a href="https://github.com/daisy28" className={`hover:text-[#af5c3b] md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <FaGithub className={`mb-6 mt-4`} />
          </a>
          <a href="https://twitter.com/gloriah_CU?s=09" className={`hover:text-[#af5c3b] md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <FaTwitter className={`mb-6`} />
          </a>
          <a href="https://www.linkedin.com/in/gloria-ubah-a74446156" className={`hover:text-[#af5c3b] md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <FaLinkedinIn className={`mb-6`} />
          </a>
          <div className={`${style.cta} relative my-8`}>
            <span
              className={`${style.cta_text} absolute text-center  uppercase bg-[#af5c3b] p-1 font-bold font-["Nunito"] text-[#fcfcfc]`}
            >
              follow &nbsp; me
            </span>
          </div>
        </div>
      </header>
        </section>
    </motion.main>
  );
};

export default Header;
