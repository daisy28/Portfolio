import React, { useState } from "react";
import style from "./style.module.css";
// import { BsGripVertical } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
// import Frame from "../Img/Group 3.svg"

const Contact = () => {
     const [displayLocation, setDisplayLocation] = useState(false);
     const [displayEmail, setDisplayEmail] = useState(false);
     const [displayPhone, setDisplayPhone] = useState(false);


     return (
          <section className={`bg-about-section relative border-b-2 border-icons`} id="Contact">
               <div>
                    {/* <div className={`relative left-0 top-0 `}>
                         <img src={Frame} alt="" className={`h-24 w-24 relative`} />
                    </div> */}
                    <div className={`py-8 p-6 md:p-10`}>
                    <div className={`mb-5`}>
                    <h2 className={`text-about-header font-bold text-3xl`}>
                              <span className={`font-bold text-xl`}>
                                   <span
                                   className={`${style.name} font-extrabold text-orange text-4xl`}
                                   >
                                   C
                                   </span>
                                   ON:TACT.
                                   </span>
                         </h2>
                    </div>
                    
                    <div className={`md:flex justify-between flex-row-reverse my-[6rem]`}>
                         <form className={`mb-4 md:mb-0 md:w-[50%]`} action="">
                <div className={`mb-4`}>
                  <div className={`${style._input_div} relative mt-3 mb-6`}>
                  <input
                    className={`${style._input_element} relative w-full border-0 bg-light-blue2 rounded-lg p-2 pl-10 text-about-header outline-none`}
                    type="text"
                    id="name"
                    placeholder=" "
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                    <BsPerson
                      className={`${style._input_icon} absolute text-about-header`}
                    />
                  <label 
                  htmlFor="name" 
                  className={`${style._input_text} text-about-header`} 
                  tabIndex={1}>
                    Name
                  </label>
                  </div>
                  <div className={`${style._input_div} relative mb-6`}>
                  <input
                    className={`${style._input_element} relative w-full border-0 bg-light-blue2 rounded-lg p-2 pl-10 text-about-header outline-none`}
                    type="email"
                    id="email"
                    placeholder=" "
                  />
                    <BsEnvelope
                      className={`${style._input_icon} absolute text-about-header`}
                    />
                         <label
                          htmlFor="email"
                          className={`${style._input_text} text-about-header `}
                          tabIndex={1}>
                    Email
                  </label>
                  </div>

                  <div className={`${style._input_div} relative mb-6`}>
                  <textarea
                  className={`${style._input_element} relative w-full border-0 bg-light-blue2 rounded-lg p-2 pl-10 text-about-header outline-none h-[200px]`}
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
                          className={`${style._input_text} text-about-header `}
                          tabIndex={1}>
                    Message
                  </label>
                  </div>
                  
                </div>
                <div className={`${style._btn_div} relative mb-5 mt-4`}>
                  <button
                    className={`bg-orange py-2 border-0 px-4  text-about-header font-bold rounded animate-bounce md:py-3 md:px-8 md:text-xl`}
                  >Send
                  </button>
                </div>
              </form>
              <div className={`md:w-[45%]`}>
               <div className={`mb-5`}>
                         <h1 className={`text-icons text-3xl font-bold`}>Love to hear from you, Get in touch.</h1>
                    </div>
              <div className={`mx-auto flex justify-between items-start text-about-header font-bold text-3xl py-4 md:w-[100%] md:flex-col`}>
               <div className={`bg-orange p-4 flex justify-center items-center flex-col rounded md:mb-4 md:flex-row cursor-pointer`} onMouseOver={() => setDisplayLocation(true)} onMouseLeave={() => setDisplayLocation(false)}>
                    <BsGeoAltFill className={`md:mb-0 ${displayLocation ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayLocation ? `block` : `hidden`}`}>Lagos, Nigeria</p>
               </div>
               <div className={`bg-orange p-4 flex justify-center items-center flex-col rounded md:mb-4 md:flex-row cursor-pointer`} onMouseOver={() => setDisplayPhone(true)} onMouseLeave={() => setDisplayPhone(false)}>
                    <BsFillTelephoneFill className={`md:mb-0 ${displayPhone ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayPhone ? `block` : `hidden`}`}>+2349026115866</p>
               </div>
               <div className={`bg-orange p-4 flex justify-center items-center flex-col rounded md:mb-4 md:flex-row cursor-pointer`} onMouseOver={() => setDisplayEmail(true)} onMouseLeave={() => setDisplayEmail(false)}>
                    <BsEnvelopeAtFill className={`md:mb-0 ${displayEmail ? `mb-4` : `mb-0`}`} />
                    <p className={`text-base font-semibold text-white md:block md:ml-4 ${displayEmail ? `block` : `hidden`}`}>ubahgloria16@gmail.com</p>
               </div>
                    </div>
                    
                    </div>
                         </div>
                         </div>
                    {/* <div className={`relative right-0 bottom-0 `}>
                         <img src={Frame} alt="" className={`h-24 w-24 relative ml-auto`} />
                    </div> */}
               </div>
          </section>
     )
}

export default Contact;