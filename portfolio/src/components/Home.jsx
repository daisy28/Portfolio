import React, { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../styles/style.module.css";
import { BsFillEggFill } from "react-icons/bs";
import { MdHotelClass } from "react-icons/md";
import Frame from "../Img/Group 8 (1).webp"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { motion } from "framer-motion";
import "pure-react-carousel/dist/react-carousel.es.css";

const About = () => {
const theme = useContext(ThemeContext)

  return (
    <motion.main
      className="main__container"
      initial={{ width: "40%" }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
    <main className={`${style.about_section} w-[90%] h-[70vh] overflow-y-auto relative z-10 top-[150px] bottom-[150px] mx-auto p-6 md:px-6 xl:px-14 pb-10 ${theme ? `bg-[#f4ddce]` : `bg-[#070b0e] `}`} id="About">
      <div className={`md:flex justify-between items-center lg:w-[867px] mx-auto`}>
      <div className={`relative my-8`}>
        <img src={Frame} alt="" className={`w-full h-full `} />
      </div>
      <div className={`my-8 md:w-[50%]`}>
        <h1 className={`font-base text-2xl mb-4 md:text-3xl text-center md:text-left mt-4 ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
          <span className={`font-bold text-5xl md:text-6xl`}>H</span>i, my name is{" "}
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-[#af5c3b] text-5xl md:text-7xl`}
            >
              G
            </span>
            LO:RIA
          </span>
        </h1>
        <div>
          <p
            className={`text-[#54646e] leading-[30px] text-xl font-["Nunito"] md:text-2xl text-center md:text-left mb-3`}
                >
                As a seasoned Frontend Developer, I possess a deep passion for crafting visually stunning and highly engaging web applications that leave a lasting impression on users.
              </p>
              <p className={`text-[#54646e] leading-[30px] text-xl font-["Nunito"] md:text-2xl text-center md:text-left mb-3`}>
                With my extensive programming experience, I am able to seamlessly merge form and function to create truly remarkable digital experiences. 
              </p>
              <p className={`text-[#54646e] leading-[30px] text-xl font-["Nunito"] md:text-2xl text-center md:text-left`}>
                My keen eyes for design and knack for solving complex problems make me a valuable asset to any Development Team. 
              </p>
        </div>
      </div>
      </div>

      <div className={`md:flex my-6 justify-between items-start mx-auto md:my-10 lg:w-[867px] pb-[4rem]`}>
      <div
            className={`font-semibold text-xl mt-5 mb-4 md:font-bold w-[250px] mx-auto md:px-[2rem] md:mt-0 md:w-[50%] max-w-[433px] lg:pr-[4rem] ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}
          >
            <h2 className={`flex justify-center items-center md:text-2xl`}>
              What I do &nbsp;
              <MdHotelClass />
            </h2>
            <CarouselProvider
              naturalSlideWidth={60}
              totalSlides={6}
              touchEnabled={true}
              infinite={true}
              isIntrinsicHeight={true}
              interval={3000}
              isPlaying={true}
              lockOnWindowScroll={true}
            >
              <Slider>
                <Slide index={0}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      I develop web applications
                    </small>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      with cutting-edge, beautiful interfaces and intuitively implemented UX.
                    </small>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      Passionate about dynamic code structure & Responsive Web Designs.
                    </small>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      Collaborate with teams to build SEO optimized & scalable apps
                    </small>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      Integrate third party Libraries & Frameworks
                    </small>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      Ensure the automated processing of Documents by using Semantic Elements.
                    </small>
                  </div>
                </Slide>
              </Slider>
              <div
                className={`w-40 mx-auto flex justify-between items-center text-[#af5c3b]  relative my-4 cursor-pointer`}
              >
                <ButtonNext className={`w-8`}>
                  <BsFillEggFill
                    className={`${style.arrow} hover:text-[#a04d2c] relative w-8 rotate-[90deg]`}
                  />
                </ButtonNext>
                <ButtonBack className={`w-8`}>
                  <BsFillEggFill
                    className={`${style.arrow2} hover:text-[#a04d2c] relative w-8 -rotate-[90deg]`}
                  />
                </ButtonBack>
              </div>
            </CarouselProvider>
          </div>
      <section className={`my-10 relative mx-auto flex flex-col justify-center md:w-[50%] lg:w-[50%] md:my-0 lg:ml-auto md:flex-row md:justify-between md:items-start`} >
      <header className={`flex justify-between items-start relative w-[100%]`}>
        <div className={`w-[60%] md:w-[200px]`}>
          <p className={`text-[#54646e] text-left`}><span className={`text-[#af5c3b]`}><Link to="/contact">Drop me a line with any </Link></span>project ideas you have or to just say hello!</p>
        </div>

        <div
          className={`w-20 h-40 relative flex justify-start items-center flex-col ${theme ? `bg-[#edc9b2] text-[#191c20] shadow-sm` : `bg-[#14181b] text-[#fcfcfc]`}`}
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
      </div>
  </main>
  </motion.main>
  );
};

export default About;
