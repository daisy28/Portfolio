import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";
import { BiBriefcase } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import { FiArrowUpRight } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import Logo from "../Img/Logo4.png";
import ReactCurvedText from "react-curved-text";
import style from "../styles/style.module.css";
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
      className={`${style.nav} shadow-sm text-base flex justify-between items-center p-6 font-bold font-['Nunito'] md:px-10 xl:px-14 fixed z-20 right-0 left-0 top-0 ${theme ? ` text-[#f4ddce]` : `text-[#fcfcfc]`}`}
    >
      <div className={`w-[80px] h-[80px] ${toggle ? `hidden` : `block`}`}>
        <Link to="/"><img src={Logo} alt="" className={`h-full w-full rounded-full `} /></Link>
      </div>
      <div
        className={`hidden md:flex justify-between items-center md:w-[275px]`}
      >
        <Link to="/" className={`hover:text-[#af5c3b] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === `` ? `${style.links} text-[#af5c3b]` : ``}`}>
          Home
        </Link>
        <Link to="/projects" className={`hover:text-[#af5c3b] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "projects" ? `${style.links} text-[#af5c3b]` : ``}`}>
          Projects
        </Link>
        <Link to="/experience" className={`hover:text-[#af5c3b] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === `experience` ? `${style.links} text-[#af5c3b]` : ``}`}>
          Experience
        </Link>
      </div>
      <div className={`w-[20px] h-[20px] absolute right-[100px] md:right-[150px] xl:right-[170px]`}>
        <button onClick={toggleTheme} className={`outline-none text-lg`}>
            { theme ? <BiMoon className={`${theme ? `text-[#f4ddce]` : `text-icons`}`} /> : <BiSun className={`${theme ? `text-[#f4ddce]` : `text-icons`}`} />}
        </button>
      </div>
      {
            <nav className={`md:hidden hover:bg-[#81442c] z-100 ${toggle ? `${navStyle.navigation_active}` : `${navStyle.navigation}`} ${theme ? `` : `` }`} onClick={handleToggle}>
              <span 
                className={`${toggle ? `${navStyle.nav_span_active} bg-[#f7103109] rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span} bg-[#af5c3b]`}`}
                style={{"--i":"0","--x":"-1","--y":"-1"}}>
                  <HiHome className={`${splitLocation[1] === "" ? `text-[#4d1b07]` : ``}`} />
                  <Link to="/" className={`hover:text-[#4d1b07] ${splitLocation[1] === "" ? `${navStyle.mobile_links} text-[#4d1b07]` : ``}`}>
          Home
        </Link></span>
        <span
                className={`${toggle ? `${navStyle.nav_span_active} bg-[#f7103109] rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span} bg-[#af5c3b]`}`} 
              style={{ "--i": "1", "--x": "-1", "--y": "0" }}>
              <HiInformationCircle className={`${splitLocation[1] === "experience" ? `text-[#4d1b07]` : ``}`} />
              <Link to="/experience" className={`hover:text-[#4d1b07] ${splitLocation[1] === "experience" ? `${navStyle.mobile_links} text-[#4d1b07]` : ``}`}>
          Experience
        </Link></span>
              <span
              className={`${toggle ? `${navStyle.nav_span_active} bg-[#f7103109] rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span} bg-[#af5c3b]`}`} style={{ "--i": "3", "--x": "1", "--y": "-1" }}>
              <BiBriefcase className={`${splitLocation[1] === "projects" ? `text-[#4d1b07]` : ``}`} />
              <Link to="/projects" className={`hover:text-[#4d1b07] ${splitLocation[1] === "projects" ? `${navStyle.mobile_links} text-[#4d1b07]` : ``}`}>
          Projects
        </Link></span>
              <span 
                className={`${toggle ? `${navStyle.nav_span_active} bg-[#f7103109] rounded-full block w-[100px] h-[100px]` : `${navStyle.nav_span} bg-[#af5c3b]`}`}
                style={{ "--i": "5", "--x": "1", "--y": "0" }}>
                  <TiContacts className={`${splitLocation[1] === "contact" ? `text-[#4d1b07]` : ``}`} />
                  <Link to="/contact" className={`hover:text-[#4d1b07] ${splitLocation[1] === "contact" ? `${navStyle.mobile_links} text-[#4d1b07]` : ``}`}>
          Contact
        </Link></span>
            </nav>
        }
        <Link to="/contact" className={`hidden md:block`}>
          <FiArrowUpRight
            className={`absolute font-bold text-xl text-[#af5c3b] top-[53px] right-[70px] xl:right-[85px]`}
          />
          <div className={`relative cursor-pointer`}>
            <ReactCurvedText
              className={`text-[#af5c3b]`}
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
              textPathProps={{ fill: "#af5c3b" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            />
            </div>
      </Link>
      </nav>
      </div>
  );
};

export default Nav;
