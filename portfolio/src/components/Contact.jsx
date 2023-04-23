import React, { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../styles/style.module.css";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { FiEdit3 } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
        <motion.main
      className="main__container"
      initial={{ width: "40%" }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: "0" }}
      transition={{duration: 2}}
    >
          <section className={`${style.contact_section} w-[90%] h-[70vh] overflow-y-scroll relative backdrop-blur-[10px] z-10 top-[150px] bottom-[250px] pb-[6rem] mx-auto ${theme ? `bg-[#f4ddce]` : `bg-[#070b0e]`}`} id="Contact">
            <div className={``}>
               <div className={``}>
                    <div className={`py-8 p-6 md:p-10 xl:px-14`}>
                    <div className={``}>
                    <h1 className={`font-base text-2xl md:text-3xl ${theme ? `text-[#191c20]` : `text-[#fcfcfc]`}`}>
          <span className={`${style.name} text-[#af5c3b] font-bold text-[45px]`}>
            <span
              className={`${style.name} font-extrabold text-[#AF5C3B] text-7xl md:text-9xl`}
            >
              C
            </span>
            ONTACT
          </span>
        </h1>
                    </div>

                   
                    
                         <div className={`my-[2rem] md:flex justify-between items-start mx-auto max-w-[850px]`}>
                               <div className={`md:w-[40%]`}>
               <div className={`mb-2`}>
                         <h1 className={`text-3xl mb-4 font-bold ${theme ? `text-[#24272a]` : `text-[#969a9d]`}`}>Love to hear from you, Get in touch 👋</h1>
                    </div>
              <div className={`mx-auto flex justify-between flex-col gap-4 items-start text-[#AF5C3B] font-bold text-3xl py-4 md:w-[100%] md:flex-col`}>
               <div className={`bg-[#fcfcfc] py-4 px-2 flex justify-start items-center rounded-md md:mb-4 cursor-pointer transition duration-700 ease-in-out ${theme ? `` : ``}`}>
                    <BiMailSend className={`md:mb-0  ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`} `} />
                    <p className={`text-sm font-semibold md:block ml-2 ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`}`}>ubahgloria16@gmail.com</p>
                    </div>
                    <div className={`bg-[#fcfcfc] py-4 px-2 flex justify-start items-center rounded-md md:mb-4 cursor-pointer transition duration-700 ease-in-out ${theme ? `` : ``}`}>
                    <BsFillPhoneVibrateFill className={`md:mb-0  ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`}`} />
                    <p className={`text-sm font-semibold md:block ml-2 ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`}`}>+2349026115866</p>
               </div>
                    <div className={`bg-[#fcfcfc] py-4 px-2 flex justify-start items-center rounded-md md:mb-4 cursor-pointer transition duration-700 ease-in-out ${theme ? `` : ``}`}>
                    <BiCurrentLocation className={`md:mb-0  ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`}`} />
                    <p className={`text-sm font-semibold md:block ml-2 ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`}`}>Lagos, Nigeria</p>
               </div>
                    </div>
                    
                    </div>
                         <form className={`mb-4 md:mb-0 md:w-[50%]`} action="">
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
                  className={`${style._input_element} relative w-full border-0 rounded-3xl p-2 pl-10 text-[#fcfcfc] outline-none h-[200px] transition duration-700 ease-in-out ${theme ? `bg-[#edc9b2] shadow-md shadow-[#e28f89]` : `bg-[#14181b]`}`}
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
                <div className={`${style._btn_div} relative mb-5 mt-4 pb-4`}>
                  <button
                    className={`w-full bg-[#fcfcfc] py-2 border-0 rounded-2xl px-6 font-[600] md:py-3 md:px-8 md:text-xl transition duration-700 ease-in-out hover:bg-[#AF5C3B] hover:text-[#fcfcfc] ${theme ? `text-[#AF5C3B]` : `text-[#070b0e]`}`}
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