import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import { VscChevronLeft } from "react-icons/vsc";
import style from "../styles/style.module.css";
import Data from "../data/project";
import Frame1 from "../Img/Group 7 (1).svg";
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

  const theme = useContext(ThemeContext);

  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
    <section
      className={`p-4 md:p-0 relative mt-[8rem] ${theme ? `${style.project_section_light}` : `${style.project_section}`}`}
      id="Projects"
    >
      <img src={Frame1} alt="" className={`absolute top-0 left-0`} />
      <div className={`relative p-[2rem] md:pt-[4rem] md:pl-[4rem]`}>
        <h2 className={`font-bold text-3xl md:text-6xl ${theme ? `text-[#071e1e]` : `text-about-header`}`}>
          <span className={`font-bold text-xl md:text-3xl`}>
            <span
              className={`${style.name} font-extrabold text-orange text-4xl md:text-9xl`}
            >
              P
            </span>
            RO:JECTS.
          </span>
        </h2>
      </div>
      <div
        className={`p-[2rem] md:flex justify-between items-center md:px-[4rem] md:py-[6rem]xl:w-[1000px] xl:mx-auto xl:pb-[9rem]`}
      >
        <div className={`relative z-10 md:w-[70%] xl:w-[650px]`}>
          {data.map((info) => {
            return (
              <div
                className={`${style.project_div} my-8 px-4 md:px-8 md:my-0`}
                key={info.id}
              >
                <h3 className={`font-semibold text-2xl ${theme ? `text-[#071e1e]` : `text-about-header`}`}>
                  {info.title}
                </h3>
                <div className={`relative my-4`}>
                  <img
                    src={info.img}
                    alt=""
                    className={`w-full h-full`}
                  />
                </div>
                <p
                  className={`text-body-text text-base font-semibold font-["Nunito"] text-left py-4 md:text-xl`}
                >
                  {info.description}
                </p>
                <div className={`flex justify-start items-center`}>
                  <a
                    href={info.url}
                    className={`${style.border_gradient} font-semibold pb-2 animate-pulse ${theme ? `text-[#071e1e]` : `text-about-header`}`}
                  >
                    Visit Site
                  </a>
                  <a href={info.github} className={`${style.border_gradient}   font-semibold pb-2 ml-8 animate-pulse ${theme ? `text-[#071e1e]` : `text-about-header`}`}>Github</a>  
                </div>
              </div>
            );
          })}
        </div>

        <div className={`relative my-10 p-5 md:w-[20%] md:my-0`}>
          <div className={`relative`}>
            <VscChevronLeft
              className={`${style.project_border} w-[220px] h-[220px] text-gradient1 rotate-45`}
            />
          </div>
          <div className={`flex flex-col items-start p-4`}>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#071e1e]` : `text-about-header`}`}
              onClick={firstProject}
            >
              T&Cs Generator
            </button>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#071e1e]` : `text-about-header`}`}
              onClick={secondProject}
            >
              TempKit
            </button>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#071e1e]` : `text-about-header`}`}
              onClick={thirdProject}
            >
              Speak Better
            </button>
            <button
              className={`${style.border_gradient} z-10 font-semibold pb-1 mb-4 transition duration-700 ease-in-out outline-none ${theme ? `text-[#071e1e]` : `text-about-header`}`}
              onClick={fourthProject}
            >
              AgroLearn
            </button>
          </div>
        </div>
      </div>
      <img
        src={Frame1}
        alt=""
        className={`absolute bottom-0 right-0 rotate-180`}
      />
    </section>
    </motion.main>
  );
};

export default Projects;
