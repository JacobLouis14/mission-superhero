import React, { useRef, useState } from "react";
import Appbar from "../common/Appbar";
import { motion } from "framer-motion";

const Hero = ({ introductionRef, whyWebsiteRef }) => {
  const [imageClicked, setImageClicked] = useState(false);

  //   iuntroduction scroll handler
  const introduceMeHandler = () => {
    introductionRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  // why website scroll handler
  const whyWebsiteScrollHandler = () => {
    whyWebsiteRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-landing-image h-dvh bg-cover bg-center relative overflow-hidden">
      {/* gradient */}
      <div className="h-dvh w-full bg-gradient-radial from-transparent to-black relative">
        <Appbar />
        {/* //////////Landing Main Section */}
        <div className="flex justify-center">
          {!imageClicked && (
            <motion.h6
              initial={{
                opacity: 0,
                y: -30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1 }}
              className="text-center pt-10 text-yellow-700 text-5xl font-PG"
            >
              Tap the hero to reveal
            </motion.h6>
          )}
          {imageClicked && (
            <div className="pt-10 text-white relative w-full flex flex-col sm:flex-row justify-center px-4 z-10">
              <motion.button
                className="rounded-full p-10 font-PG text-3xl text-yellow-700 border bg-gray-500/20 backdrop-blur-sm border-yellow-700 hover:text-white hover:bg-yellow-700 mt-5 sm:mt-0 sm:me-6"
                initial={{
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                onClick={introduceMeHandler}
              >
                Introduce Me
              </motion.button>
              <motion.button
                className="rounded-full p-10 font-PG text-3xl text-yellow-700 border bg-gray-500/30 backdrop-blur-sm border-yellow-700 hover:text-white hover:bg-yellow-700 mt-5 sm:mt-0 sm:me-6"
                initial={{
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                onClick={whyWebsiteScrollHandler}
              >
                Why this website
              </motion.button>
            </div>
          )}
          <motion.img
            src="hero.png"
            alt="hero"
            className={`aspect-auto h-3/5 absolute bottom-0 hover:cursor-pointer ${
              imageClicked ? "brightness-100" : "brightness-0"
            }`}
            onClick={() => setImageClicked(!imageClicked)}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                type: "spring",
                bounce: 0.7,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
