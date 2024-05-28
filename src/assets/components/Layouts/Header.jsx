import React, { useState, useEffect } from "react";


import { motion } from "framer-motion";

//logo
import banksLogo from "../../images/carlosbanks.svg";

//icons
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

function Header() {
  // state
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  // useEffect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={
           `w-full flex justify-center items-center px-5 py-2 fixed z-50 transition-all duration-300 ${ scroll ? `bg-red-600 ` : ``}`      
        }
      >
        <div className="max-w-screen-2xl w-full flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-16 md:w-20">
              <img
                src={banksLogo}
                alt="Carlos Banks Academy"
                className="w-full h-full"
              />
            </div>
          </div>
          <nav
            className={scroll ? `hidden md:flex text-white` : `hidden md:flex text-white`}
          >
            <ul className="flex items-end justify-between py-1">
              <li className="group mx-4 text-xl font-semibold">
                <a href="/">Home</a>
                {/* border bottom animation */}
                <div
                  className={
                    scroll
                      ? `w-0 h-1 bg-white group-hover:w-full transition-all duration-300`
                      : `w-0 h-1 bg-black group-hover:w-full transition-all duration-300`
                  }
                ></div>
              </li>
              <li className="group mx-4 text-xl font-semibold">
                <a href="/">About</a>
                {/* border bottom animation */}
                <div
                  className={
                    scroll
                      ? `w-0 h-1 bg-white group-hover:w-full transition-all duration-300`
                      : `w-0 h-1 bg-black group-hover:w-full transition-all duration-300`
                  }
                ></div>
              </li>
              <button
                className={
                  scroll
                    ? `mx-4 px-6 py-2 rounded-full text-xl hover:shadow-md shadow-sm font-bold hover:scale-110 transition-all duration-200 text-red-600 bg-white`
                    : `mx-4 px-6 py-2 rounded-full text-xl hover:shadow-md shadow-sm font-semibold hover:scale-110 transition-all duration-200 bg-red-600 text-white`
                }
              >
                Contact
              </button>
            </ul>
          </nav>
        </div>

        {/* Icono del menú */}
        <div className="flex md:hidden">
          {showMenu ? (
            <FaXmark
              className={`text-2xl ${scroll ? "text-white" : "text-white"}`}
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <FaBarsStaggered
              className={`text-2xl ${scroll ? "text-white" : "text-white"}`}
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </motion.header>

      {/* Contenido del menú */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showMenu ? 0 : -600 }}
        transition={{ duration: 0.5 }}
        className={` md:hidden fixed w-full h-96 flex justify-center items-center z-40 ${scroll ? `bg-red-600 text-white` : `bg-red-600 text-white`}`}
      > 
        <ul className="flex flex-col items-center justify-between py-1">
          {/* Opciones del menú */}
          <li className="group mx-4 text-xl font-semibold">
            <a href="/">Home</a>
            {/* border bottom animation */}
            <div
              className={
                scroll
                  ? `w-0 h-1 bg-white group-hover:w-full transition-all duration-300`
                  : `w-0 h-1 bg-black group-hover:w-full transition-all duration-300`
              }
            ></div>
          </li>
          <li className="group mx-4 text-xl font-semibold">
            <a href="/">About</a>
            {/* border bottom animation */}
            <div
              className={
                scroll
                  ? `w-0 h-1 bg-white group-hover:w-full transition-all duration-300`
                  : `w-0 h-1 bg-black group-hover:w-full transition-all duration-300`
              }
            ></div>
          </li>
          <button
            className={
              scroll
                ? `mx-4 px-6 py-2 rounded-full text-xl hover:shadow-md shadow-sm font-bold hover:scale-110 transition-all duration-200 text-red-600 bg-white`
                : `mx-4 px-6 py-2 rounded-full text-xl hover:shadow-md shadow-sm font-semibold hover:scale-110 transition-all duration-200 bg-white text-black`
            }
          >
            Contact
          </button>
        </ul>
      </motion.nav>
    </>
  );
}

export default Header;
