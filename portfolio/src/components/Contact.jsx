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
          <section className={`relative lg:py-[8rem] xl:py-[4rem] ${theme ? `bg-[#f4ddce]` : `bg-about-section`}`} id="Contact">
            <div className={`md:${style.technology_page} md:flex flex-col mt-[8rem] lg:mt-0 md:h-[100vh] xl:mt-[4rem]`}>
               <div className={`md:mt-[4rem] lg:mt-0`}>
                    <div className={`py-8 p-6 md:p-10 xl:px-14`}>
                    <div className={`mb-8`}>
                    <h1 className={`font-base text-2xl md:text-3xl ${theme ? `text-[#071e1e]` : `text-about-header`}`}>
          <span className={`font-bold text-xl`}>
            <span
              className={`${style.name} font-extrabold text-orange text-7xl md:text-9xl`}
            >
              C
            </span>
            ON:TACT.
          </span>
        </h1>
                    </div>

                   
                    
                         <div className={`md:flex justify-between flex-row my-[4rem]`}>
                               <div className={`md:w-[45%]`}>
               <div className={`mb-2`}>
                         <h1 className={`text-3xl font-bold ${theme ? `text-[#354f52]` : `text-icons`}`}>Love to hear from you, Get in touch 👋</h1>
                    </div>
              <div className={`mx-auto flex justify-between items-start text-about-header font-bold text-3xl py-4 md:w-[100%] md:flex-col`}>
               <div className={`bg-orange p-4 flex justify-center items-center flex-col rounded-full md:mb-4 md:flex-row cursor-pointer hover:rounded-xl ${theme ? `hover:bg-[#edc9b2]` : `hover:bg-[#034355]`}`} onMouseOver={() => setDisplayLocation(true)} onMouseLeave={() => setDisplayLocation(false)}>
                    <BiCurrentLocation className={`md:mb-0 ${displayLocation ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayLocation ? `block` : `hidden`}`}>Lagos, Nigeria</p>
               </div>
               <div className={`bg-orange p-4 flex justify-center items-center flex-col rounded-full md:mb-4 md:flex-row cursor-pointer hover:rounded-xl ${theme ? `hover:bg-[#edc9b2]` : `hover:bg-[#034355]`}`} onMouseOver={() => setDisplayPhone(true)} onMouseLeave={() => setDisplayPhone(false)}>
                    <BsFillPhoneVibrateFill className={`md:mb-0 ${displayPhone ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayPhone ? `block` : `hidden`}`}>+2349026115866</p>
               </div>
               <div className={`bg-orange p-4 flex justify-center items-center flex-col rounded-full md:mb-4 md:flex-row cursor-pointer hover:rounded-xl ${theme ? `hover:bg-[#edc9b2]` : `hover:bg-[#034355]`}`} onMouseOver={() => setDisplayEmail(true)} onMouseLeave={() => setDisplayEmail(false)}>
                    <BiMailSend className={`md:mb-0 ${displayEmail ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayEmail ? `block` : `hidden`}`}>ubahgloria16@gmail.com</p>
               </div>
                    </div>
                    
                    </div>
                         <form className={`mb-4 md:mb-0 md:w-[50%]`} action="">
                <div className={`mb-4`}>
                  <div className={`${style._input_div} relative mt-3 mb-6`}>
                  <input
                    className={`${style._input_element} relative w-full border-0  rounded-lg p-2 pl-10 outline-none ${theme ? `bg-[#edc9b2] text-[#034355] shadow` : `bg-[#034355] text-about-header`}`}
                    type="text"
                    id="name"
                    placeholder=" "
                  />
                    <RxPerson
                      className={`${style._input_icon} absolute text-about-header`}
                    />
                  <label 
                  htmlFor="name" 
                  className={`${style._input_text} text-about-header ${theme ? `${style._light_mode}` : ""}`} 
                  tabIndex={1}>
                    Name
                  </label>
                  </div>
                  <div className={`${style._input_div} relative mb-6`}>
                  <input
                    className={`${style._input_element} relative w-full border-0 rounded-lg p-2 pl-10 text-about-header outline-none ${theme ? `bg-[#edc9b2] shadow` : `bg-[#034355]`}`}
                    type="email"
                    id="email"
                    placeholder=" "
                  />
                    <BiMailSend
                      className={`${style._input_icon} absolute text-about-header`}
                    />
                         <label
                          htmlFor="email"
                          className={`${style._input_text} text-about-header ${theme ? `${style._light_mode}` : ""}`}
                          tabIndex={1}>
                    Email
                  </label>
                  </div>

                  <div className={`${style._input_div} relative mb-6`}>
                  <textarea
                  className={`${style._input_element} relative w-full border-0 rounded-lg p-2 pl-10 text-about-header outline-none h-[200px] ${theme ? `bg-[#edc9b2] shadow` : `bg-[#034355]`}`}
                  name="" 
                  id="message" 
                  placeholder=" "
                  >
                    
                  </textarea>
                    <FiEdit3
                      className={`${style._input_icon} absolute text-about-header`}
                    />
                         <label
                          htmlFor="message"
                          className={`${style._input_text} text-about-header ${theme ? `${style._light_mode}` : ""}`}
                          tabIndex={1}>
                    Message
                  </label>
                  </div>
                  
                </div>
                <div className={`${style._btn_div} relative mb-5 mt-4`}>
                  <button
                    className={`bg-orange py-2 border-0 px-6 text-about-header font-bold rounded animate-bounce md:py-3 md:px-8 md:text-xl hover:bg-[#a81e05]`}
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