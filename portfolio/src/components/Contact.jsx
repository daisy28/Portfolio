import React, { useState } from "react";
import style from "./style.module.css";
import { BsGripVertical } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Tippy from "@tippyjs/react";

const Contact = () => {
     const [visible, setVisible] = useState(true);
     const show = () => setVisible(prev => !prev);
     const hide = () => setVisible(false);

     return (
          <section className={`bg-about-section p-4 relative`} id="Contact">
               <div>
                    <div className={`flex items-start justify-start w-20 h-20 relative -left-7 -top-10`}>
                         <BsGripVertical className={`text-about-header w-24 h-24`} />
                         <BsGripVertical className={`text-orange w-24 h-24 relative -left-6`} />
                    </div>
                    <div className={`mt-3`}>
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
                    <div className={`flex flex-col justify-between items-start text-about-header font-bold text-3xl h-40 py-4 mb-4`}>
                         <Tippy content="+2349026115866" visible={visible} className={`${style.tooltip} bg-light-blue2 p-2 px-4 text-about-header rounded-lg absolute -bottom-11 left-10 w-64`}>
                              <button onClick={show}>
                              <BsFillTelephoneFill />
                              </button>
                         </Tippy>
                          <Tippy content="ubahgloria16@gmail.com" visible={visible} className={`${style.tooltip} bg-light-blue2 p-2 px-4 text-about-header rounded-lg absolute -bottom-11 left-10 w-64`}>
                              <button onClick={show}>
                                   <BsEnvelopeAtFill className={``} />
                              </button>
                         </Tippy>
                         <Tippy content="Lagos, Nigeria" visible={visible} className={`${style.tooltip} bg-light-blue2 p-2 px-4 text-about-header rounded-lg absolute -bottom-11 left-10 w-64`}>
                              <button onClick={show}>
                                   <BsGeoAltFill className={``} />
                              </button>
                         </Tippy>
                    </div>
                    <div className={``}>
                         <form className="mb-4" action="">
                <div className={`mb-4`}>
                  <div className={`${style._input_div} relative mt-3 mb-6`}>
                  <input
                    className={`${style._input_element} bg-transparent relative w-full border-0 bg-light-blue2 rounded-lg p-2 pl-10 text-about-header outline-none`}
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
                    className={`${style._input_element} bg-transparent relative w-full border-0 bg-light-blue2 rounded-lg p-2 pl-10 text-about-header outline-none`}
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
                  
                </div>
                <div className={`${style._btn_div} relative mb-5 mt-4`}>
                  <button
                    className={`bg-orange py-2 border-0 px-4  text-about-header font-bold rounded animate-bounce`}
                  >Send
                  </button>
                </div>
              </form>
                         </div>
                         </div>
                    <div className={`flex items-end justify-end w-20 h-20 relative -right-7 -bottom-8 ml-auto`}>
                         <BsGripVertical className={`text-orange w-24 h-24 relative -right-6`} />
                         <BsGripVertical className={`text-about-header w-24 h-24`} />
                    </div>
               </div>
          </section>
     )
}

export default Contact;