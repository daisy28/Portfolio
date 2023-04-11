import React, { useState } from "react";
import style from "./style.module.css";
import { BsGripVertical } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Frame from "../Img/Group 3.svg"
import Tippy from "@tippyjs/react";

const Contact = () => {
     // const [visible, setVisible] = useState(true);
     const [displayPhone, setDisplayPhone] = useState(false);
     const [displayEmail, setDisplayEmail] = useState(false);
     const [displayLocation, setDisplayLocation] = useState(false);


     return (
          <section className={`bg-about-section relative`} id="Contact">
               <div>
                    {/* <div className={`relative left-0 top-0 `}>
                         <img src={Frame} alt="" className={`h-24 w-24 relative`} />
                    </div> */}
                    <div className={`py-5 p-4`}>
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
                    
                    <div className={``}>
                         <form className="mb-4" action="">
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
                    <BsEnvelope
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
                    className={`bg-orange py-2 border-0 px-4  text-about-header font-bold rounded animate-bounce`}
                  >Send
                  </button>
                </div>
              </form>
              <div className={`w-[60%] mx-auto flex justify-between items-start text-about-header font-bold text-3xl h-40 py-4 my-4`}>
                         <Tippy content="+2349026115866" visible={displayPhone} className={`${style.tooltip} bg-light-blue2 p-2 px-4 text-about-header rounded-lg absolute -top-[40px] -left-[70px]`}>
                              <button onMouseOver={() => setDisplayPhone(true)} onMouseLeave={() => setDisplayPhone(false)}>
                              <BsFillTelephoneFill />
                              </button>
                         </Tippy>
                          <Tippy content="ubahgloria16@gmail.com" visible={displayEmail} className={`${style.tooltip} bg-light-blue2 p-2 px-4 text-about-header rounded-lg absolute -top-[40px] -left-[100px]`}>
                              <button onMouseOver={() => setDisplayEmail(true)} onMouseLeave={() => setDisplayEmail(false)}>
                                   <BsEnvelopeAtFill className={``} />
                              </button>
                         </Tippy>
                         <Tippy content="Lagos,Nigeria" visible={displayLocation} className={`${style.tooltip} bg-light-blue2 p-2 px-4 text-about-header rounded-lg absolute -top-[40px] -left-[70px] mb-2`}>
                              <button onMouseOver={() => setDisplayLocation(true)} onMouseLeave={() => setDisplayLocation(false)}>
                                   <BsGeoAltFill className={``} />
                              </button>
                         </Tippy>
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