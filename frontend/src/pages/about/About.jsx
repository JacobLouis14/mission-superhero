import React from "react";
import Appbar from "../../components/common/Appbar";
import TimelineComp from "../../components/common/Timeline";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="min-h-screen">
        <Appbar />
        {/* mission */}
        <div className="h-60 -mt-44 sm:-mt-24 bg-yellow-900 sm:rounded-b-full flex justify-center items-end pb-3">
          <motion.h2
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.2 }}
            className=" text-3xl lg:text-7xl font-PG tracking-wider"
          >
            Superhero Mission
          </motion.h2>
        </div>
        <div className="p-5">
          <div className=" block sm:grid grid-cols-2 gap-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1.2 }}
              className=" text-justify mb-4 sm:mb-0"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam laudantium hic quo perferendis enim repudiandae,
                eveniet dolore commodi nemo explicabo adipisci excepturi,
                maiores non harum neque. Fugit distinctio dicta molestias? Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus atque, dolores rem architecto assumenda sapiente?
                Quidem sunt doloribus, ea odit cumque maxime rem, voluptates,
                dolore voluptatibus natus et vitae dignissimos? Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Velit dolorem vel
                veniam! Itaque ducimus qui ab voluptatem totam, dignissimos unde
                non magnam ratione quidem voluptatum, perspiciatis expedita
                rerum. Nesciunt, eveniet.
              </p>
              <TimelineComp />
            </motion.div>
            <div>
              <img
                src="/hero-mission.jpg"
                alt="image"
                className="brightness-50"
              />
            </div>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="min-h-screen bg-[url(/hero-background.jpg)] bg-cover">
        <div className="bg-gradient-radial from-transparent to-black min-h-screen flex flex-col items-center">
          <div className="bg-black p-4 rounded-b-3xl h-min w-full text-center ">
            <motion.h2
              initial={{
                opacity: 0,
                y: -30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1.2 }}
              className="text-3xl lg:text-6xl font-PG text-yellow-900"
            >
              Why am i
            </motion.h2>
          </div>
          <div className="flex flex-col sm:mt-32 py-10 backdrop-blur-lg">
            <div className="block sm:grid grid-cols-2 w-full px-10">
              <div className="border-b-2 pb-5 sm:pb-0 sm:border-b-0 sm:border-r-2 border-yellow-900 sm:pr-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                rerum autem! Nesciunt dolorem non asperiores eos est ad
                quibusdam nemo a! Maiores, minus alias? Pariatur id debitis
                officia rem cum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus, architecto quod at, exercitationem
                consequuntur inventore earum vel provident perspiciatis error
                quasi, minima beatae amet similique. Similique minus aliquam
                ratione ullam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatibus nihil maiores adipisci culpa
                obcaecati ut corporis facilis iste rem possimus. Error ex
                aliquid dolore aperiam in voluptas reiciendis sequi dicta.
              </div>
              <div className="pt-5 sm:pt-0 sm:ps-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                rerum autem! Nesciunt dolorem non asperiores eos est ad
                quibusdam nemo a! Maiores, minus alias? Pariatur id debitis
                officia rem cum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus, architecto quod at, exercitationem
                consequuntur inventore earum vel provident perspiciatis error
                quasi, minima beatae amet similique. Similique minus aliquam
                ratione ullam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatibus nihil maiores adipisci culpa
                obcaecati ut corporis facilis iste rem possimus. Error ex
                aliquid dolore aperiam in voluptas reiciendis sequi dicta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
