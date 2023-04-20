import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import style from "../styles/style.module.css";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { FiEdit3 } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
     const [displayLocation, setDisplayLocation] = useState(false);
     const [displayEmail, setDisplayEmail] = useState(false);
  const [displayPhone, setDisplayPhone] = useState(false);
  
  const theme = useContext(ThemeContext);

  return (
        <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
          <section className={`w-[80%] h-[80vh] overflow-y-scroll relative backdrop-blur-[10px] z-20 top-[150px] bottom-[150px] mx-auto ${theme ? `bg-[#f4ddce]` : `bg-[#070b0e]`}`} id="Contact">
            <div className={``}>
               <div className={``}>
                    <div className={`py-8 p-6 md:p-10 xl:px-14`}>
                    <div className={``}>
                    <h1 className={`font-base text-2xl md:text-3xl ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-[#701b15] text-7xl md:text-9xl`}
            >
              C
            </span>
            ON:TACT.
          </span>
        </h1>
                    </div>

                   
                    
                         <div className={`my-[2rem] md:w-[400px] mx-auto`}>
                               <div className={``}>
               <div className={`mb-2`}>
                         <h1 className={`text-3xl mb-4 font-bold ${theme ? `text-[#24272a]` : `text-[#969a9d]`}`}>Love to hear from you, Get in touch 👋</h1>
                    </div>
              <div className={`mx-auto flex justify-between items-start text-[#fcfcfc] font-bold text-3xl py-4 md:w-[100%] md:flex-col`}>
               <div className={`bg-[#701b15] p-4 flex justify-center items-center flex-col rounded-full md:mb-4 md:flex-row cursor-pointer hover:rounded-xl transition duration-700 ease-in-out ${theme ? `hover:bg-[#621712]` : `hover:bg-[#621712]`}`} onMouseOver={() => setDisplayLocation(true)} onMouseLeave={() => setDisplayLocation(false)}>
                    <BiCurrentLocation className={`md:mb-0 ${displayLocation ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayLocation ? `block` : `hidden`}`}>Lagos, Nigeria</p>
               </div>
               <div className={`bg-[#701b15] p-4 flex justify-center items-center flex-col rounded-full md:mb-4 md:flex-row cursor-pointer hover:rounded-xl transition duration-700 ease-in-out ${theme ? `hover:bg-[#621712]` : `hover:bg-[#621712]`}`} onMouseOver={() => setDisplayPhone(true)} onMouseLeave={() => setDisplayPhone(false)}>
                    <BsFillPhoneVibrateFill className={`md:mb-0 ${displayPhone ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayPhone ? `block` : `hidden`}`}>+2349026115866</p>
               </div>
               <div className={`bg-[#701b15] p-4 flex justify-center items-center flex-col rounded-full md:mb-4 md:flex-row cursor-pointer hover:rounded-xl transition duration-700 ease-in-out ${theme ? `hover:bg-[#621712]` : `hover:bg-[#621712]`}`} onMouseOver={() => setDisplayEmail(true)} onMouseLeave={() => setDisplayEmail(false)}>
                    <BiMailSend className={`md:mb-0 ${displayEmail ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayEmail ? `block` : `hidden`}`}>ubahgloria16@gmail.com</p>
               </div>
                    </div>
                    
                    </div>
                         <form className={`mb-4 md:mb-0 `} action="">
                <div className={`mb-4`}>
                  <div className={`${style._input_div} relative mt-3 mb-6`}>
                  <input
                    className={`${style._input_element} relative w-full border-0  rounded-2xl p-2 pl-10 outline-none transition duration-700 ease-in-out ${theme ? `bg-[#edc9b2] text-[#14181b] shadow-md shadow-[#e28f89]` : `bg-[#14181b] text-[#fcfcfc]`}`}
                    type="text"
                    id="name"
                    placeholder=" "
                  />
                    <RxPerson
                      className={`${style._input_icon} absolute text-[#fcfcfc]`}
                    />
                  <label 
                  htmlFor="name" 
                  className={`${style._input_text} text-[#fcfcfc] ${theme ? `${style._light_mode}` : ""}`} 
                  tabIndex={1}>
                    Name
                  </label>
                  </div>
                  <div className={`${style._input_div} relative mb-6`}>
                  <input
                    className={`${style._input_element} relative w-full border-0 rounded-2xl p-2 pl-10 text-[#fcfcfc] outline-none transition duration-700 ease-in-out ${theme ? `bg-[#edc9b2] shadow-md shadow-[#e28f89]` : `bg-[#14181b]`}`}
                    type="email"
                    id="email"
                    placeholder=" "
                  />
                    <BiMailSend
                      className={`${style._input_icon} absolute text-[#fcfcfc]`}
                    />
                         <label
                          htmlFor="email"
                          className={`${style._input_text} text-[#fcfcfc] ${theme ? `${style._light_mode}` : ""}`}
                          tabIndex={1}>
                    Email
                  </label>
                  </div>

                  <div className={`${style._input_div} relative mb-6`}>
                  <textarea
                  className={`${style._input_element} relative w-full border-0 rounded-2xl p-2 pl-10 text-[#fcfcfc] outline-none h-[200px] transition duration-700 ease-in-out ${theme ? `bg-[#edc9b2] shadow-md shadow-[#e28f89] inset` : `bg-[#14181b]`}`}
                  name="" 
                  id="message" 
                  placeholder=" "
                  >
                    
                  </textarea>
                    <FiEdit3
                      className={`${style._input_icon} absolute text-[#fcfcfc]`}
                    />
                         <label
                          htmlFor="message"
                          className={`${style._input_text} text-[#fcfcfc] ${theme ? `${style._light_mode}` : ""}`}
                          tabIndex={1}>
                    Message
                  </label>
                  </div>
                  
                </div>
                <div className={`${style._btn_div} relative mb-5 mt-4`}>
                  <button
                    className={`bg-[#701b15] py-2 border-0 px-6 text-[#fcfcfc] font-bold rounded animate-bounce md:py-3 md:px-8 md:text-xl transition duration-700 ease-in-out hover:bg-[#621712]`}
                  >Send
                  </button>
                </div>
              </form>
              
                         </div>
                         </div>
               </div>
               </div>
      </section>
      </motion.main>
     )
}

export default Contact;