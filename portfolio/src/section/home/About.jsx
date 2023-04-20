import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import style from "../../styles/style.module.css";
import { BsFillEggFill } from "react-icons/bs";
import { MdHotelClass } from "react-icons/md";
import Frame from "../../Img/Group 8 (1).svg"
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
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
    <section className={`${style.about_section} w-[80%] h-[80vh] overflow-y-auto relative z-20 top-[150px] bottom-[150px] mx-auto p-6 md:px-10 xl:px-14 ${theme ? `bg-[#f4ddce] ${style.card_shadow_light}` : `bg-[#070b0e] ${style.card_shadow}`}`} id="About">
      <div className={``}>
      <div className={`relative my-8`}>
            <img src={Frame} alt="" className={`w-full h-full `} />
      </div>
      <div className={`my-8`}>
        <h1 className={`font-base text-2xl mb-2 md:text-3xl text-center mt-4 md:mb-4 ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
          <span className={`font-bold text-5xl md:text-6xl`}>H</span>i, my name is{" "}
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-[#701b15] text-7xl md:text-9xl`}
            >
              G
            </span>
            LO:RIA.
          </span>
        </h1>
        <div>
          <p
            className={`text-[#54646e] leading-[45px] md:leading-[48px] text-xl font-semibold font-["Nunito"] md:text-2xl text-center`}
                >
            I'm a Frontend Developer with 2+ years of experience. I build on-demand, scalable, fully responsive and 
            custom designed web applications. I have a diverse set of skills
            acquired overtime to stand out from the ordinary. I've an extensive
            programming experience especially on the frontend. I'm sensitive and pay attention to the littlest details which makes it easy for me to build & implement functional web applications.{" "}
          </p>
          <div
            className={`font-semibold text-xl mt-5 md:font-bold ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}
          >
            <h2 className={`flex justify-center items-center md:text-2xl`}>
              Fun facts about me &nbsp;
              <MdHotelClass />
            </h2>
            <CarouselProvider
              naturalSlideWidth={80}
              totalSlides={4}
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
                      I find that I write bugs first before I actually start coding which surprisingly makes my work easier. 😅
                    </small>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      I spend more time trying to get a libray/framework to work exactly the way I want it before reading the documentation. Very inefficient! 😞
                    </small>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      My slogan: While there's <span className={`line-through text-base`}>life</span> <span className={`text-[#701b15] text-base`}>(CODE)</span> there's <span className={`line-through text-base`}>hope</span> <span className={`text-[#701b15] text-base`}>(BUG).</span>
                    </small>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className={` text-[#54646e] text-base mt-5 text-center md:text-lg`}>
                    <small>
                      Thanks for reading this not so fun facts about me, You've proven to be the <span className={` font-bold ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>CSS</span> to my <span className={`font-bold ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>HTML</span>. 😄
                    </small>
                  </div>
                </Slide>
              </Slider>
              <div
                className={`w-40 mx-auto flex justify-between items-center text-[#701b15] relative my-4 cursor-pointer`}
              >
                <ButtonNext className={`w-8`}>
                  <BsFillEggFill
                    className={`${style.arrow} relative w-8 rotate-[90deg]`}
                  />
                </ButtonNext>
                <ButtonBack className={`w-8`}>
                  <BsFillEggFill
                    className={`${style.arrow2} relative w-8 -rotate-[90deg]`}
                  />
                </ButtonBack>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      </div>
  </section>
  </motion.main>
  );
};

export default About;
