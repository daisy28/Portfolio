import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import style from "../styles/style.module.css";
import Data from "../data/project";
import Frame1 from "../Img/Group 7 (1).svg";
import Html from "../Img/html5.c1bb84e0.svg";
import Css from "../Img/css3.3ec32022.svg";
import Bootstrap from "../Img/bootstrap-logo-shadow.png";
import Git from "../Img/git.43d387b7.svg";
import Javascript from "../Img/javascript.081325c6.svg";
import ReactImg from "../Img/react.e7574af2.svg";
import Slack from "../Img/Slack_icon_2019.svg.png";
import Tailwind from "../Img/images-removebg-preview.png";
import Ts from "../Img/images__2_-removebg-preview.png";
import Next from "../Img/images__1_-removebg-preview.png";
import Figma from "../Img/5968705.png";
import Wordpress from "../Img/174881.png";
import { motion } from "framer-motion";

const Projects = () => {
  const [displayData, setDisplayData] = useState(Data);
  const [index, setIndex] = useState(0);
  const data = displayData.filter((info) => {
    return info.id === index ? info : null;
  });
  const firstProject = () => {
       console.log(setDisplayData);
    setIndex((firstIndex) => (firstIndex = 0));
  };
  const secondProject = () => {
    setIndex((secondIndex) => (secondIndex = 1));
  };
  const thirdProject = () => {
    setIndex((thirdIndex) => (thirdIndex = 2));
  };
  const fourthProject = () => {
    setIndex((fourthIndex) => (fourthIndex = 3));
  };

  const [displayLink, setDisplayLink] = useState(false);

  const theme = useContext(ThemeContext);

  return (
    <motion.main
      className="main__container"
      initial={{ width: "40%" }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
    <section
      className={`${style.projects_section} p-4 bg-[#070b0e] w-[90%] h-[70vh] overflow-y-auto relative z-10 top-[150px] bottom-[150px] mx-auto ${theme ? `bg-[#f4ddce]` : `bg-[#070b0e] `}`}
      id="Projects"
      >
      <img src={Frame1} alt="" className={`absolute top-0 left-0`} />
      <div className={`pt-[2rem] pl-[2rem]`}>
         <h1 className={`font-base text-2xl md:text-3xl ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-[#af5c3b] text-7xl md:text-9xl`}
            >
              P
            </span>
            RO:JECTS
          </span>
        </h1>
      </div>

      <div className={`relative p-5 mt-4 mr-auto max-w-[800px] mx-auto`}>
          <div className={`flex justify-between items-enter p-4 flex-wrap`}>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}
              onClick={firstProject}
            >
              T&Cs Generator
            </button>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}
              onClick={secondProject}
            >
              TempKit
            </button>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}
              onClick={thirdProject}
            >
              Speak Better
            </button>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}
              onClick={fourthProject}
            >
              AgroLearn
            </button>
            <button
              className={`${style.border_gradient} z-10 text-[#af5c3b] font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `` : ``}`}
              onClick={fourthProject}
            >
              See more &gt;&gt;&gt;
            </button>
          </div>
        </div>

      <div
        className={`p-[1rem] md:px-[2rem] max-w-[800px] mx-auto`}
      >
        <div className={`relative z-10`}>
          {data.map((info) => {
            return (
              <div
                className={`${style.project_div} md:grid grid-cols-2 gap-6 pl-4 md:pl-8`}
                key={info.id}
              >
                <div className={``}>
                  <h3 className={`font-semibold text-2xl ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
                    {info.title}
                  </h3>
                  {<div className={`relative my-4 w-[100%] h-[100%]`}  onMouseOver={() => setDisplayLink(true)} onMouseLeave={() => setDisplayLink(false)}>
                    <img
                      src={info.img}
                      alt=""
                      className={`w-full h-full object-cover`}
                    />
                    <div className={`flex justify-between items-center absolute w-full top-0 right-0 left-0 bottom-0 p-4 ${displayLink ? `bg-[#af5c3bea]` : `hidden`}`}>
                  <a
                    href={info.url}
                    className={`text-[#fcfcfc] font-semibold pb-2 ${theme ? `` : ``}`}
                  >
                    Visit Site
                  </a>
                  <a href={info.github} className={`text-[#fcfcfc] font-semibold pb-2 ml-8 ${theme ? `` : ``}`}>Github</a>  
                </div>
                  </div>}
                </div>

                <div className={``}>
                  <p
                  className={`text-[#54646e] leading-[30px] md:leading-[38px] text-base font-semibold font-["Nunito"] text-left py-4 md:py-0 md:text-xl`}
                >
                  {info.description}
                </p>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>

      <div className={`my-6 p-[1rem] pb-[4rem] md:pb-[4rem] max-w-[800px] mx-auto md:p-[2rem]`}>
        <h1 className={`font-base mb-6 text-2xl ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-[#af5c3b] text-4xl md:text-6xl`}
            >
              T
            </span>
            ECH:NOLOGY STACK
          </span>
        </h1>
        <p className={`mb-4 text-lg ${theme ? `text-[#14181b]` : `text-[#cfcccc]`}`}>Tools and Technology</p>
        <div className={`grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-8`}>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={ReactImg} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Javascript} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Ts} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Next} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Git} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Html} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Css} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Tailwind} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Bootstrap} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Figma} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Slack} alt="" />
          </div>
          <div className={`p-4 rounded-md flex justify-center items-center ${theme ? `bg-[#edc9b2]` : `bg-[#14181b]`}`}>
            <img src={Wordpress} alt="" />
          </div>
        </div>
      </div>
        {/* <img
        src={Frame1}
        alt=""
        className={`absolute bottom-0 right-0 rotate-180`}
      /> */}
    </section>
    </motion.main>
  );
};

export default Projects;
