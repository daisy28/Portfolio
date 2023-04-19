import React, { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../styles/style.module.css";
import Frame from "../Img/Group 3.svg";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <section
      className={`${style.footer} relative ${
        theme
          ? `bg-[#fafafa] shadow-md text-[#002733]`
          : `bg-[#041b25] text-about-header`
      }`}
    >
      <div className={`relative flex space-between`}>
        <img
          src={Frame}
          alt=""
          className={`relative left-0 h-14 rotate-180 w-14 top-0 bottom-0`}
        />
        <div
          className={`flex justify-center items-center font-semibold text-center w-full`}
        >
          <p>
            &copy; 2023 - Gloria{" "}
            <span className={`text-orange font-extrabold text-2xl`}>
              &nbsp;|&nbsp;
            </span>{" "}
            All rights reserved
          </p>
        </div>
        <img
          src={Frame}
          alt=""
          className={`relative right-0 h-14 w-14 top-0 bottom-0`}
        />
      </div>
    </section>
  );
};

export default Footer;
