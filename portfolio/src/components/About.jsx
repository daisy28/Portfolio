import React from "react";
import style from "./style.module.css";
import { MdFmdGood } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdHotelClass } from "react-icons/md";
import Frame from "../Img/Group 8.svg"
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
    <section className={`${style.about_section} border-b-2 border-icons bg-about-section p-6 py-8 md:px-10 xl:px-14`} id="About">
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
            I'm a Frontend Developer with 1+ year of experience. I define myself
            by the work I do. I build on-demand scalable, fully responsive
            custom designed web applications. I have a diverse set of skills
            acquired overtime to stand out from the ordinary. I've an extensive
            programming experience and comfortable developing on the frontend as
            well as maintaining and managing code infrastructure.{" "}
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
              totalSlides={3}
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis aliquam deserunt velit culpa.
                    </small>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className={` text-body-text text-sm mt-5 text-center md:text-lg`}>
                    <small>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis aliquam deserunt velit culpa.
                    </small>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className={` text-body-text text-sm mt-5 text-center md:text-lg`}>
                    <small>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis aliquam deserunt velit culpa.
                    </small>
                  </div>
                </Slide>
              </Slider>
              <div
                className={`w-40 mx-auto flex justify-between items-center text-orange relative my-4 cursor-pointer`}
              >
                <ButtonNext className={`w-8`}>
                  <MdFmdGood className={`-rotate-90 text-4xl w-8 h-8`} />
                  <MdOutlineChevronLeft
                    className={`${style.arrow} text-about-section relative w-8`}
                  />
                </ButtonNext>
                <ButtonBack className={`w-8`}>
                  <MdFmdGood className={`rotate-90 text-4xl w-8 h-8`} />
                  <MdOutlineChevronRight
                    className={`${style.arrow2} text-about-section relative w-8`}
                  />
                </ButtonBack>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
