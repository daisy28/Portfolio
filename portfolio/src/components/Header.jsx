import React, { useState, useEffect } from "react";
import { MdEqualizer } from "react-icons/md";
import { MdCodeOff } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscChevronLeft  } from "react-icons/vsc";
import Img1 from "../Img/images (5).jpeg";
import Logo from "../Img/Logo.png";
import style from "./style.module.css";
import TextTransition, { presets } from "react-text-transition";

const Header = () => {
  const TEXTS = [
    `Hello World.`,
    `I develop web applications`,
    `With consistent Layout and Readability,`,
    `Dynamic code structure & Responsive Web Designs,`,
    `Collaborate with teams to build scalable apps,`,
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
    <section className={`${style.header}`}>
      <nav
        className={`text-header-text text-xs flex justify-between items-center px-4 py-4 font-bold font-['Nunito']`}
      >
        <div>
          <img src={Logo} alt="" className={`h-20 w-20 rounded-full`} />
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
          <VscChevronLeft 
            className={`${style.header_icon} text-icons-bg w-full h-full relative rotate-45`}
          />
          <img src={Img1} alt="" className={`${style.header_img} grayscale`} />
          <div
            className={`${style.header_img2} bg-icons-bg text-orange flex justify-center px-4 pt-6`}
          >
            <div>
              <TextTransition springConfig={presets.default}>
                <MdCode />
                <p className={`text-icons font-["Nunito"] font-bold text-base`}>{TEXTS[index % TEXTS.length]}</p>
                <MdCodeOff />
              </TextTransition>
            </div>
          </div>
        </div>
        <div
          className={`bg-icons-bg text-icons w-20 h-40 relative flex justify-start items-center flex-col`}
        >
          <a href="#.">
            <FaGithub className={`mb-6 mt-4`} />
          </a>
          <a href="#.">
            <FaTwitter className={`mb-6`} />
          </a>
          <a href="#.">
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
