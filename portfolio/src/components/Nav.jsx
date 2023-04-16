import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";


import Logo from "../Img/Logo.png";
import ReactCurvedText from "react-curved-text";
import style from "./style.module.css";

const Nav = () => {
     const location = useLocation();
     const { pathname } = location;
     const splitLocation = pathname.split("/");
     const [toggle, setToggle] = useState(false);

     const handleToggle = () => {
          setToggle(prevState => !prevState);
     }
    //  const navRef = useRef();
    //  const showNavBar = () => {
    //       navRef.current.classList.toggle("responsive_nav");
    //  }
  return (
    <nav
      className={`${style.nav} text-icons text-xs flex justify-between items-center p-6 font-bold font-['Nunito'] md:px-10 xl:px-14 bg-header-background fixed z-20 right-0 left-0 top-0 $`}
    >
      <div className={`w-[100px] h-[80px]`}>
        <Link to="/"><img src={Logo} alt="" className={`h-full w-full rounded-full `} /></Link>
      </div>
      <div
        className={`hidden md:flex justify-between items-center md:w-[60%] text-lg xl:w-[40%]`}
      >
        <Link to="/" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "" ? " border-b-2 border-orange text-orange" : ""}`}>
          Home
        </Link>
        <Link to="/about" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "about" ? " border-b-2 border-orange text-orange" : ""}`}>
          About
        </Link>
        <Link to="/projects" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "projects" ? " border-b-2 border-orange text-orange" : ""}`}>
          Projects
        </Link>
        <Link to="/experience" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "experience" ? " border-b-2 border-orange text-orange" : ""}`}>
          Experience
        </Link>
        <Link to="/technologies" className={`hover:text-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${splitLocation[1] === "technologies" ? " border-b-2 border-orange text-orange" : ""}`}>
          Technology
        </Link>
      </div>

      <div className={`md:hidden`} onClick={handleToggle}>
        <CgMenuRightAlt className={`bg-transparent text-orange text-5xl`} />
      </div>
      { toggle ?
        <div className={`h-[100vh] fixed top-0 right-0 left-0 bottom-0 bg-white md:hidden p-4 flex flex-col`}>
          <div className={`w-4 h-4 ml-auto`} onClick={() => setToggle(false)}>
            <GrFormClose className={`text-orange w-full h-full`}/>
          </div>
          <nav class="navigation">
            <span style={{i:"0",x:"-1",y:"0"}}>Home</span>
            <span style={{i:"1",x:"1",y:"0"}}>About</span>
            <span style={{i:"2",x:"0",y:"1"}}>Projects</span>
            <span style={{i:"3",x:"0",y:"-1"}}>Technology</span>
            <span style={{i:"4",x:"1",y:"1"}}>Experience</span>
            <span style={{i:"5",x:"-1",y:"-1"}}>Contact</span>
          </nav>
        </div>
        : ""
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
  );
};

export default Nav;
