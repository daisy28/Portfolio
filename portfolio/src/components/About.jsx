import React from "react";
import style from "./style.module.css";
import { BsFillEggFill } from "react-icons/bs";
import { MdHotelClass } from "react-icons/md";
import Frame from "../Img/Group 8 (1).svg"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const About = () => {
  return (
    <section className={`${style.about_section} bg-about-section  p-6 pt-6 md:px-10 xl:px-14`} id="About">
      <div className={`${style.about_page} flex flex-col justify-center h-[100vh] my-[10rem] mt-[16rem] md:my-0 lg:my-[7rem]`}>
      <div className={`md:flex justify-between items-center`}>
      <div className={`relative mb-8 md:w-[45%]`}>
            <img src={Frame} alt="" className={`w-full h-full `} />
      </div>
      <div className={`md:w-[50%]`}>
        <h1 className={`text-about-header font-base text-xl mb-2 md:text-3xl md:mb-4`}>
          <span className={`font-bold text-4xl md:text-6xl`}>H</span>i, my name is{" "}
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-orange text-4xl md:text-6xl`}
            >
              G
            </span>
            LO:RIA.
          </span>
        </h1>
        <div>
          <h4
            className={`text-body-text text-base font-semibold font-["Nunito"] md:text-2xl text-jleft`}
          >
            I'm a Frontend Developer with 2+ years of experience. I build on-demand, scalable, fully responsive and 
            custom designed web applications. I have a diverse set of skills
            acquired overtime to stand out from the ordinary. I've an extensive
            programming experience especially on the frontend. I'm sensitive and pay attention to the littlest details which makes it easy for me to build & implement functional web applications.{" "}
          </h4>
          <div
            className={` text-about-header font-semibold text-xl mt-5 md:font-bold`}
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
                  <div className={` text-body-text text-sm mt-5 text-center md:text-lg`}>
                    <small>
                      I find that I write bugs first before I actually start coding which surprisingly makes my work easier. 😅
                    </small>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className={` text-body-text text-sm mt-5 text-center md:text-lg`}>
                    <small>
                      I spend more time trying to get a libray/framework to work exactly the way I want it before reading the documentation. Very inefficient! 😞
                    </small>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className={` text-body-text text-sm mt-5 text-center md:text-lg`}>
                    <small>
                      My slogan: While there's <span className={`line-through text-base`}>life</span> <span className={`text-orange text-base`}>(CODE)</span> there's <span className={`line-through text-base`}>hope</span> <span className={`text-orange text-base`}>(BUG).</span>
                    </small>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className={` text-body-text text-sm mt-5 text-center md:text-lg`}>
                    <small>
                      Thanks for reading this not so fun facts about me, You've proven to be the <span className={`text-about-header font-bold`}>CSS</span> to my <span className={`text-about-header font-bold`}>HTML</span>. 😄
                    </small>
                  </div>
                </Slide>
              </Slider>
              <div
                className={`w-40 mx-auto flex justify-between items-center text-orange relative my-4 cursor-pointer`}
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
    </div>
    </section>
  );
};

export default About;
