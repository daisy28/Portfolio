import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Frame1 from "../Img/Group 9.svg";
import style from "../styles/style.module.css";
import { motion } from "framer-motion";

const Experience = () => {
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
      className={`${style.experience_section} p-6 w-[90%] h-[80vh] overflow-y-auto relative z-10 top-[150px] bottom-[150px] mx-auto ${theme ? `bg-[#f4ddce]` : `bg-[#070b0e]`}`}
      id="Experience"
    >
      <div className={`mb-10`}>
           <h1 className={`font-base text-2xl md:text-3xl ${theme ? `text-[#071e1e]` : `text-[#fcfcfc] `}`}>
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-[#af5c3b] text-7xl md:text-9xl`}
            >
              E
            </span>
            X:PERIENCE
          </span>
        </h1>
        </div>
      <div className={`lg:w-[870px] mx-auto`}>
        <div className={`md:flex justify-between items-start md:mb-10`}>
        <div className={`relative md:w-[45%] mb-10 md:mb-0 flex`}>
          <img src={Frame1} alt="" className={``} />
          <div className={`ml-8`}>
            <h1 className={`font-bold text-lg mb-2 ${theme ? `text-[#071e1e]` : `text-[#fcfcfc]`}`}>
                Sololearn 2021
            </h1>
            <p className={`text-[#54646e] mb-4`}>
              Completed a course and series of challenges by demonstrating
              theoritical understanding of HTML & CSS. Certificate issued by
              Sololearn.
            </p>
            <a
              href="https://drive.google.com/file/d/1JMH_NetIQNbxRb55nxmkGq1CuzS7qXlI/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded p-2 bg-[#af5c3b] hover:bg-gradient-to-r hover:bg-[#a04d2c] font-bold text-lg transition duration-700 ease-in-out ${theme ? `text-[#fcfcfc]` : `text-[#fcfcfc]`}`}
            >
              Access Certificate
            </a>
          </div>
        </div>
        <div className={`relative flex md:w-[45%] mb-10 md:mb-0 text-right flex-row-reverse md:text-left md:flex-row `}>
          <img src={Frame1} alt="" className={``} />
          <div className={`mr-8 md:ml-8`}>
            <h1 className={`font-bold text-lg mb-2  ${theme ? `text-[#071e1e]` : `text-[#fcfcfc]`}`}>
              Women Techsters 2021
            </h1>
            <p className={`text-[#54646e] mb-4`}>
              Successfully completed a 2-week Bootcamp training in software
              development with the Women Techsters in collaboration with
              Microsoft.
            </p>
            <a
              href="https://drive.google.com/file/d/1JJw8wtUiOhX6k1Qt_gtTGcW8NDOoRiry/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded p-2 bg-[#af5c3b] hover:bg-gradient-to-r hover:bg-[#a04d2c] font-bold text-lg transition duration-700 ease-in-out ${theme ? `text-[#fcfcfc]` : `text-[#fcfcfc]`}`}
            >
              Access Certificate
            </a>
          </div>
        </div>
          </div>
          
        <div className={`md:flex justify-between items-start md:mb-10`}>
        <div className={`relative md:w-[45%] mb-10 flex md:mb-0`}>
          <img src={Frame1} alt="" className={``} />
          <div className={`ml-8`}>
            <h1 className={`font-bold text-lg mb-2  ${theme ? `text-[#071e1e]` : `text-[#fcfcfc]`}`}>
              I4GxZuri 2022
            </h1>
            <p className={`text-[#54646e] mb-4`}>
              Participated in an intensive 3 months training in Fullstack development
              program sponsored by I4GxZuri. Collaborated in teams to build and
              deploy projects.
            </p>
            <a
              href="https://drive.google.com/file/d/10-NmffnavC7I0GUaJ40GbnGPnkdNtqhn/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded p-2 bg-[#af5c3b] hover:bg-gradient-to-r hover:bg-[#a04d2c] font-bold text-lg transition duration-700 ease-in-out ${theme ? `text-[#fcfcfc]` : `text-[#fcfcfc]`}`}
            >
              Access Certificate
            </a>
          </div>
        </div>
        <div className={`relative md:w-[45%] md:ml-auto mb-10 text-right md:text-left flex flex-row-reverse md:flex-row`}>
          <img src={Frame1} alt="" className={``} />
          <div className={`mr-8 md:ml-8 md:mr-0`}>
            <h1 className={`font-bold text-lg mb-2  ${theme ? `text-[#071e1e]` : `text-[#fcfcfc]`}`}>
              HNG Internship 2022
            </h1>
            <p className={`text-[#54646e] mb-4`}>
              Enrolled and successfully completed the HNG Internship program. A remote, large scale, fast-paced virtual internship that improves skills by working on a real world project.
            </p>
            <a
              href="#."
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded p-2 bg-[#af5c3b] hover:bg-gradient-to-r hover:bg-[#a04d2c] font-bold text-lg transition duration-700 ease-in-out ${theme ? `text-[#fcfcfc]` : `text-[#fcfcfc]`}`}
            >
              Access Certificate
            </a>
          </div>
        </div>
        </div>
        </div>
    </section>
  </motion.main>
  );
};

export default Experience;
