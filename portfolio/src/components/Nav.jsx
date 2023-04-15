import React from "react";
import { Link } from "react-router-dom";
import { MdEqualizer } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import Logo from "../Img/Logo.png";
import ReactCurvedText from "react-curved-text";
import style from "./style.module.css";

const Nav = () => {
  return (
    <nav
      className={`${style.nav} text-icons text-xs flex justify-between items-center p-6 font-bold font-['Nunito'] md:px-10 xl:px-14 bg-header-background fixed z-20 right-0 left-0 top-0`}
    >
      <div>
        <img src={Logo} alt="" className={`h-20 w-20 rounded-full`} />
      </div>
      <div
        className={`hidden md:flex justify-between items-center md:w-[60%] text-lg xl:w-[40%]`}
      >
        <Link to="/" className={`hover:text-orange`}>
          Home
        </Link>
        <Link to="/about" className={`hover:text-orange`}>
          About
        </Link>
        <Link to="/projects" className={`hover:text-orange`}>
          Projects
        </Link>
        <Link to="/experience" className={`hover:text-orange`}>
          Experience
        </Link>
        <Link to="/technologies" className={`hover:text-orange`}>
          Technology
        </Link>
      </div>

      <div className={`md:hidden`}>
        <MdEqualizer className={`bg-transparent text-orange text-5xl`} />
      </div>
      <div className={`relative cursor-pointer hidden md:block`}>
        <ReactCurvedText
          className={`text-orange`}
          width={80}
          height={80}
          cx={40}
          cy={40}
          rx={30}
          ry={30}
          startOffset={0}
          reversed={true}
          text="contact me . contact me ."
          textProps={{ style: { fontSize: 16 } }}
          textPathProps={{ fill: "#b51f06" }}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
        <Link to="/contact">
          <BsArrowUpRight
            className={`absolute font-bold text-xl text-orange top-[30px] left-[30px]`}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
