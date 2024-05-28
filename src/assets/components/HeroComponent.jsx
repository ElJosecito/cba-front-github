import React, { useEffect } from "react";
import { motion } from "framer-motion";

import basquet from "../images/basquet.jpg";
import player from "../images/player.jpg";
import hero from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";
import hero3 from "../images/hero-3.jpg";
import hero4 from "../images/hero-4.jpg";
import hero5 from "../images/hero-5.jpg";
import hero6 from "../images/hero-6.jpg";

//icons
import { GiBasketballBall, } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

// accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function HeroComponent() {
  return (
    <>
      <section className="w-full h-screen flex justify-center">
        {/* autoplay swiper carrousel, with title in the middle */}
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}

          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full "
        >
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center filter brightness-50">
              <img src={hero} alt="hero" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center filter brightness-50">
              <img src={hero2} alt="hero" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center filter brightness-50">
              <img src={hero3} alt="hero" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center filter brightness-50">
              <img src={hero4} alt="hero" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center filter brightness-50">
              <img src={hero5} alt="hero" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center filter brightness-50">
              <img src={hero6} alt="hero" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>

        </Swiper>

        <div className="max-w-screen-2xl w-full h-full flex justify-between items-center absolute z-10 ">
          <div className=" px-5 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:pl-8" >
            <p className="text-lg md:text-lg opacity-50 hidden md:flex text-white">
              We Are The Best Basketball Academy
            </p>

            <h1 className="text-5xl text-center md:text-start md:text-7xl font-bold druk-wide text-white">
              Welcome to the <span className="text-red-600">Carlos Banks</span>{" "}
              Academy
            </h1>
            <p className="text-sm text-center md:text-start md:text-lg mt-5 opacity-60 text-white">
              We are the best basketball academy in the world. We have the best
              coaches and the best facilities. We are here to help you become the
              best basketball player you can be. We have helped many players
              achieve their dreams and we can help you too.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-full font-medium"
            >
              Get Started
            </motion.button>

          </div>
        </div>



      </section>
      {/*  */}
      <section className="w-full min-h-[90vh] h-fit flex justify-center overflow-hidden">
        <div className="max-w-screen-2xl w-full flex pt-44 md:pt-0">
          <div className="md:w-1/2 md:flex justify-start items-center md:pl-8">
            <div className="relative">
              <img
                src={basquet}
                alt="basquet"
                className="bottom-0 left-0"
              />
              <div className="lg:w-[42rem] lg:h-[32rem] mx-4 bg-white absolute top-32 md:top-20 md:-right-80 shadow-xl md:pl-10 pl-5 py-10 flex flex-col justify-between items-start">
                <div>
                  <h1 className="md:text-6xl text-4xl font-bold mt-5">
                    Best Basketball Academy
                  </h1>
                  <p className="opacity-60 md:text-lg md:pr-20 md:mt-12 mt-6">
                    We are the best basketball academy in the world. We have the
                    best coaches and the best facilities. We are here to help you
                    become the best basketball player you can be. We have helped
                    many players achieve their dreams and we can help you too.
                  </p>
                </div>
                <button className="text-lg mt-5 font-semibold bg-red-600 text-white py-3 w-56 rounded-2xl">
                  +1 234 567 890
                </button>
              </div>

            </div>
          </div>
          <div className="w-0 md:w-1/2 hidden xl:flex justify-end items-center pr-20">
            <div className="">
              <img
                src={player}
                alt="player"
                className="w-80 relative bottom-0 left-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full flex justify-center overflow-hidden bg-[#4bbdff33] py-20">
        <div className="max-w-screen-2xl w-full lg:flex items-center ">
          <div className="lg:w-2/5 h-96 md:h-auto lg:pl-40 px-8" >
            <h3 className="text-base font-bold text-left text-red-500">
              Why Join Us
            </h3>
            <h1 className="text-5xl font-bold mt-5">Life is better with basketball
            </h1>
            <p className="opacity-60 mt-5">
              We are the best basketball academy in the world. We have the best
              coaches and the best facilities. We are here to help you become the
              best basketball player you can be. We have helped many players
              achieve their dreams and we can help you too.
            </p>

            
              {/* red line */}

              <div className="w-20 h-1 bg-red-500 mt-8"> 
              </div>
          </div>
          <div className="lg:w-3/5 flex justify-center items-center p-3">
            <div className="grid place-items-center md:grid-cols-2 md:grid-rows-2 gap-6">
              <div className="w-[22rem] h-48 bg-white flex p-5 overflow-hidden">
                {/* icon */}
                <div className="px-2 pt-2">
                  <GiBasketballBall className="text-6xl text-red-600" />
                </div>
                <div className="text-lg font-semibold mt-3">
                  <h1 className="text-3xl font-bold">Basketball</h1>
                  {/* lorem */}
                  <p className="opacity-60 mt-2 text-base">
                    We are the best basketball academy in the world. We have the
                    best coaches and the best facilities.
                  </p>
                </div>

              </div>
              {/*  */}
              <div className="w-[22rem] h-48 bg-white flex p-5 overflow-hidden">
                {/* icon */}
                <div className="px-2 pt-2">
                  <GiBasketballBall className="text-6xl text-red-600" />
                </div>
                <div className="text-lg font-semibold mt-3">
                  <h1 className="text-3xl font-bold">Basketball</h1>
                  {/* lorem */}
                  <p className="opacity-60 mt-2 text-base">
                    We are the best basketball academy in the world. We have the
                    best coaches and the best facilities.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="w-[22rem] h-48 bg-white flex p-5 overflow-hidden">
                {/* icon */}
                <div className="px-2 pt-2">
                  <GiBasketballBall className="text-6xl text-red-600" />
                </div>
                <div className="text-lg font-semibold mt-3">
                  <h1 className="text-3xl font-bold">Basketball</h1>
                  {/* lorem */}
                  <p className="opacity-60 mt-2 text-base">
                    We are the best basketball academy in the world. We have the
                    best coaches and the best facilities.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="w-[22rem] h-48 bg-white flex p-5 overflow-hidden">
                {/* icon */}
                <div className="px-2 pt-2">
                  <GiBasketballBall className="text-6xl text-red-600" />
                </div>
                <div className="text-lg font-semibold mt-3">
                  <h1 className="text-3xl font-bold">Basketball</h1>
                  {/* lorem */}
                  <p className="opacity-60 mt-2 text-base">
                    We are the best basketball academy in the world. We have the
                    best coaches and the best facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full min-h-[50vh] h-fit flex justify-center overflow-hidden  my-10 py-8 ">
        <div className="max-w-screen-2xl w-full grid place-items-center md:grid-cols-4 md:gap-2 gap-6 md:px-20">
          {/*  */}
          <div className="w-80 h-60 bg-white flex flex-col justify-center shadow-lg">
            <div className="w-full flex justify-center">
              <div className="flex justify-center items-center bg-red-600 w-14 h-14">
                <FaUsers className="text-2xl text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mt-2 text-center">100+</h1>
            <p className="text-base opacity-60 mt-5 text-center">Active Members</p>
          </div>
          {/*  */}
          <div className="w-80 h-60 bg-white flex flex-col justify-center shadow-lg">
            <div className="w-full flex justify-center">
              <div className="flex justify-center items-center bg-red-600 w-14 h-14">
                <FaUsers className="text-2xl text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mt-2 text-center">100+</h1>
            <p className="text-base opacity-60 mt-5 text-center">Active Members</p>
          </div>
          {/*  */}
          <div className="w-80 h-60 bg-white flex flex-col justify-center shadow-lg">
            <div className="w-full flex justify-center">
              <div className="flex justify-center items-center bg-red-600 w-14 h-14">
                <FaUsers className="text-2xl text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mt-2 text-center">100+</h1>
            <p className="text-base opacity-60 mt-5 text-center">Active Members</p>
          </div>
          {/*  */}

          <div className="w-80 h-60 bg-white flex flex-col justify-center shadow-lg">
            <div className="w-full flex justify-center">
              <div className="flex justify-center items-center bg-red-600 w-14 h-14">
                <FaUsers className="text-2xl text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mt-2 text-center">100+</h1>
            <p className="text-base opacity-60 mt-5 text-center">Active Members</p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full flex justify-center overflow-hidden pb-10">
        <div className="max-w-screen-2xl w-full md:flex">
          <div className="md:w-1/2 flex md:justify-center px-5">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold">NEED HELP?
              </h1>
              <p className="opacity-60 mt-5">
                We are the best basketball academy in the world. We have the best
                coaches and the best facilities. We are here to help you become the
                best basketball player you can be.
              </p>

              <h3 className="text-2xl font-bold mt-5">Contact information</h3>
              <div className="flex items-center mt-5">
                <FaPhone className="text-xl text-red-500" />
                <p className="ml-3">+1 234 567 890</p>
              </div>
              <div className="flex items-center mt-3">
                <MdEmail className="text-xl text-red-500" />
                <p className="ml-3">email@example.com</p>
              </div>
              <div className="flex items-center mt-3">
                <FaLocationDot className="text-xl text-red-500" />
                <p className="ml-3">123 Street Name, City Name, United States</p>
              </div>

              {/* red line */}

              <div className="w-20 h-1 bg-red-500 mt-8"> 
              </div>


            </div>

          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <h2 className="text-2xl font-bold ml-5 md:ml-0">Common questions</h2>
            <div className="lg::w-[624px] bg-[#4bbdff33] p-5 mt-5 rounded-lg">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  className=""
                >
                  <h1 className="text-xl font-bold text-red-500">Accordion 1</h1>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="mt-3"
              >
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h1 className="text-xl font-bold text-red-500">Accordion 2</h1>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>

              <Accordion
                className="mt-3"
              >
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <h1 className="text-xl font-bold text-red-500">Accordion 1</h1>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>

              <Accordion
                className="mt-3"
              >
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <h1 className="text-xl font-bold text-red-500">Accordion 1</h1>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default HeroComponent;
