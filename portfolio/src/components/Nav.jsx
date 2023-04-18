import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";
import { AiFillProject } from "react-icons/ai";
import { TbTimeline } from "react-icons/tb";
import { RiMiniProgramFill } from "react-icons/ri";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import Logo from "../Img/Logo.png";
import ReactCurvedText from "react-curved-text";
import style from "./style.module.css";
import navStyle from "../styles/nav.module.css";

const Nav = ({toggleTheme}) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(prevState => !prevState);
  }

  const theme = useContext(ThemeContext);

  return (
    <div>
    <nav
      className={`${style.nav} text-xs flex justify-between items-center p-6 font-bold font-['Nunito'] md:px-10 xl:px-14 fixed z-20 right-0 left-0 top-0 ${theme ? `bg-[#fafafa] shadow-md text-[#002733]` : `bg-[#041b25] text-icons`}`}
    >
      <div className={`w-[100px] h-[80px] ${toggle ? `hidden` : `block`}`}>
        <Link to="/"><img src={Logo} alt="" className={`h-full w-full rounded-full `} /></Link>
      </div>
      <div
        className={`hidden md:flex justify-between items-center md:w-[60%] text-lg lg:w-[50%] xl:w-[38%]`}
      >
        <Link to="/" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === `` ? `${style.links} text-orange` : ``}`}>
          Home
        </Link>
        <Link to="/about" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "about" ? `${style.links} text-orange` : ``}`}>
          About
        </Link>
        <Link to="/projects" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "projects" ? `${style.links} text-orange` : ``}`}>
          Projects
        </Link>
        <Link to="/experience" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "experience" ? `${style.links} text-orange` : ``}`}>
          Experience
        </Link>
        <Link to="/technologies" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "technologies" ? `${style.links} text-orange` : ""}`}>
          Technology
          </Link>
      </div>
      <div className={`w-[20px] h-[20px] absolute right-[100px] md:right-[130px] lg:right-[150px]`}>
        <button onClick={toggleTheme} className={`outline-none text-lg`}>
            { theme ? <BiMoon className={`${theme ? `text-[#002733]` : `text-icons`}`} /> : <BiSun className={`${theme ? `text-[#002733]` : `text-icons`}`} />}
        </button>
      </div>
      {
            <nav className={`md:hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${toggle ? `${navStyle.navigation_active}` : `${navStyle.navigation}`} ${theme ? `hover:bg-[#e2f0f2]` : `hover:bg-[#012630]` }`} onClick={handleToggle}>
              <span 
                className={`${toggle ? `${navStyle.nav_span_active} rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span}`} ${theme ? `bg-[#041b25] ${navStyle.nav_span_active_light}` : `bg-[#84a4b5]`}`}
                style={{"--i":"0","--x":"-1","--y":"-1"}}>
                  <HiHome className={`${splitLocation[1] === "" ? `text-[#2dfc52]` : ``}`} />
                  <Link to="/" className={`hover:text-[#2dfc52]  transition ease-in-out delay-150 duration-300  ${splitLocation[1] === "" ? `${navStyle.mobile_links} text-[#2dfc52]` : ``}`}>
          Home
        </Link></span>
              <span 
                className={`${toggle ? `${navStyle.nav_span_active} bg-white rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span}`} ${theme ? `bg-[#041b25] ${navStyle.nav_span_active_light}` : `bg-[#84a4b5]`}`}
              style={{ "--i": "1", "--x": "-1", "--y": "0" }}>
                <HiInformationCircle className={`${splitLocation[1] === "about" ? `text-[#2dfc52]` : ``}`} />
              <Link to="/about" className={`hover:text-[#2dfc52]  transition ease-in-out delay-150 duration-300  ${splitLocation[1] === "about" ? `${navStyle.mobile_links} text-[#2dfc52]` : ``}`}>
          About
        </Link></span>
              <span
                className={`${toggle ? `${navStyle.nav_span_active} bg-white rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span}`} ${theme ? `bg-[#041b25] ${navStyle.nav_span_active_light}` : `bg-[#84a4b5]`}`} 
              style={{ "--i": "2", "--x": "1", "--y": "1" }}>
              <AiFillProject className={`${splitLocation[1] === "projects" ? `text-[#2dfc52]` : ``}`} />
              <Link to="/projects" className={`hover:text-[#2dfc52]  transition ease-in-out delay-150 duration-300  ${splitLocation[1] === "projects" ? `${navStyle.mobile_links} text-[#2dfc52]` : ``}`}>
          Projects
        </Link></span>
              <span 
                className={`${toggle ? `${navStyle.nav_span_active} bg-white rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span}`} ${theme ? `bg-[#041b25] ${navStyle.nav_span_active_light}` : `bg-[#84a4b5]`}`}
                style={{ "--i": "3", "--x": "1", "--y": "-1" }}>
                <TbTimeline className={`${splitLocation[1] === "experience" ? `text-[#2dfc52]` : ``}`} />
                  <Link to="/experience" className={`hover:text-[#2dfc52]  transition ease-in-out delay-150 duration-300  ${splitLocation[1] === "experience" ? `${navStyle.mobile_links} text-[#2dfc52]` : ``}`}>
          Experience
        </Link></span>
              <span
              className={`${toggle ? `${navStyle.nav_span_active} bg-white rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span}`} ${theme ? `bg-[#041b25] ${navStyle.nav_span_active_light}` : `bg-[#84a4b5]`}`} style={{ "--i": "4", "--x": "1", "--y": "0" }}>
              <RiMiniProgramFill className={`${splitLocation[1] === "technologies" ? `text-[#2dfc52]` : ``}`} />
              <Link to="/technologies" className={`hover:text-[#2dfc52]  transition ease-in-out delay-150 duration-300  ${splitLocation[1] === "technologies" ? `${navStyle.mobile_links} text-[#2dfc52]` : ``}`}>
          Technology
        </Link></span>
              <span 
                className={`${toggle ? `${navStyle.nav_span_active} bg-white rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span}`} ${theme ? `bg-[#041b25] ${navStyle.nav_span_active_light}` : `bg-[#84a4b5]`}`}
                style={{ "--i": "5", "--x": "-1", "--y": "1" }}>
                  <BsFillPhoneVibrateFill className={`${splitLocation[1] === "contact" ? `text-[#2dfc52]` : ``}`} />
                  <Link to="/contact" className={`hover:text-[#2dfc52]  transition ease-in-out delay-150 duration-300  ${splitLocation[1] === "contact" ? `${navStyle.mobile_links} text-[#2dfc52]` : ``}`}>
          Contact
        </Link></span>
            </nav>
      }
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
          <FiArrowUpRight
            className={`absolute font-bold text-xl text-orange top-[30px] left-[30px]`}
          />
        </Link>
      </div>
      </nav>
      </div>
  );
};

export default Nav;
