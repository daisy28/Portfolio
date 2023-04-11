import React from "react";

const Footer = () => {
     return (
          <section className={`bg-header-background p-4`}>
               <div className={`flex justify-center items-center text-about-header font-semibold`}>
                    <p>&copy;2023 - Gloria <span className={`text-orange font-extrabold text-2xl`}>|</span> All rights reserved</p>
               </div>
          </section>
     )
}

export default Footer;