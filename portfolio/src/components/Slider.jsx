import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../Img/IMG-20230421-WA0003.jpg";
import Img2 from "../Img/IMG-20230416-WA0006.jpg";
import Img3 from "../Img/Gloria.jpg";
import Img4 from "../Img/IMG-20230421-WA0001.jpg";
import Img5 from "../Img/IMG-20230421-WA0002.jpg";
import Img6 from "../Img/Snapchat-1315131059~2.jpg";

const Slider = () => {
  const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    transitionTime: 500,
  });
  return (
    <div
      className={`fixed bottom-0 top-0 left-0 right-0 bg-gradient-to-r from-[#2f3336] to-[#424549] bg-blend-multiply h-[100vh]`}
    >
      <Carousel
        className={`w-full relative bottom-0 top-0 left-0 right-0 z-0`}
        {...getConfigurableProps()}
        animationHandler="fade"
        swipeable={false}
      >
        <div>
          <img
            src={Img1}
            alt=""
            className={`h-[100vh] object-cover opacity-25`}
          />
        </div>
        <div>
          <img
            src={Img2}
            alt=""
            className={`h-[100vh] object-cover opacity-25`}
          />
        </div>
        <div>
          <img
            src={Img3}
            alt=""
            className={`h-[100vh] object-cover opacity-25`}
          />
        </div>
        <div>
          <img
            src={Img4}
            alt=""
            className={`h-[100vh] object-cover opacity-25`}
          />
        </div>
        <div>
          <img
            src={Img5}
            alt=""
            className={`h-[100vh] object-cover opacity-25`}
          />
        </div>
        <div>
          <img
            src={Img6}
            alt=""
            className={`h-[100vh] object-cover opacity-25`}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
