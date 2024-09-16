import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Introduction = ({ introductionRef }) => {
  const [allCouroselData, setAllCouroselData] = useState([
    {
      imageUrl: "/ninja-eyes.jpg",
      title: "Who am I ?",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, iure facere! Reprehenderit cupiditate, facilis tempore
            quos iure voluptatibus vitae accusantium deserunt dicta doloremque?
            Commodi quidem saepe suscipit exercitationem molestias possimus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatem delectus architecto laudantium nam laboriosam, magnam
            expedita eligendi maxime, amet voluptas ducimus inventore officiis
            obcaecati quia perspiciatis modi omnis eos!`,
    },
    {
      imageUrl: "/hero-house.jpg",
      title: "Where ?",
      desc: "hi",
    },
    {
      imageUrl: "/back-shot.jpg",
      title: "Why ?",
      desc: "thought",
    },
  ]);
  const [couroselList, setCouroselList] = useState(allCouroselData.slice(1));
  const [selectedData, setSelectedData] = useState(allCouroselData[0]);
  const smallDivRef = useRef();

  // animate handler
  const ImageVariants = {
    enter: () => ({
      opacity: 0,
      y: smallDivRef?.current?.offsetTop || window.screen.height / 4,
      x: smallDivRef?.current?.offsetLeft || window.screen.width / 2,
      borderRadius: "100%",
      width: "208px",
      height: "240px",
    }),
    active: () => ({
      opacity: 1,
      y: 0,
      x: 0,
      borderRadius: 0,
      width: "100%",
      height: "100%",
      transition: {
        delay: 0.1,
        duration: 0.6,
      },
    }),
    exit: () => ({
      x: 200,
      opacity: 0,
      transition: { duration: 0.1 },
    }),
  };

  const contentVariants = {
    enter: () => ({
      opacity: 0,
      translateY: 150,
    }),
    active: () => ({
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    }),
    exit: () => ({
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    }),
  };

  //   selection handler
  const selectHandler = (index) => {
    setSelectedData((prevSelected) => {
      const newSelectedData = couroselList[index];
      setCouroselList((prevCouroseList) => {
        if (index != 0) {
          const belowIndex = prevCouroseList.slice(0, index);
          const newCourosel = [
            ...prevCouroseList.slice(index + 1),
            prevSelected,
            ...belowIndex,
          ];
          return newCourosel;
        } else {
          const newCourosel = [
            ...prevCouroseList.slice(0, index),
            ...prevCouroseList.slice(index + 1),
            prevSelected,
          ];
          return newCourosel;
        }
      });
      return newSelectedData;
    });
  };

  //  courosel play
  const couroselPlay = (val) => {
    switch (val) {
      case "Inc":
        setSelectedData((prevSelectedData) => {
          const newSelectedData = couroselList[0];
          setCouroselList((prevCouroselList) => {
            const newCourosel = [
              ...prevCouroselList.slice(1),
              prevSelectedData,
            ];
            return newCourosel;
          });
          return newSelectedData;
        });
        break;
      case "Dec":
        setSelectedData((prevSelectedData) => {
          const newSelectedData = couroselList[couroselList.length - 1];
          setCouroselList((prevCouroselList) => {
            const newCourosel = [
              prevSelectedData,
              ...prevCouroselList.slice(0, prevCouroselList.length - 1),
            ];
            return newCourosel;
          });
          return newSelectedData;
        });
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={introductionRef}
      className={`h-dvh w-screen relative bg-black overflow-hidden`}
    >
      <AnimatePresence>
        {selectedData && (
          <motion.img
            key={selectedData?.imageUrl}
            variants={ImageVariants}
            initial="enter"
            animate="active"
            exit="exit"
            src={selectedData?.imageUrl}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
        )}
      </AnimatePresence>
      {/* contents */}
      <AnimatePresence>
        <motion.div
          key={selectedData?.title}
          variants={contentVariants}
          initial="enter"
          animate="active"
          exit="exit"
          className="absolute top-0 text-white ps-3 sm:ps-20 pe-2 pb-3 sm:pe-10 sm:pt-16 h-4/5 overflow-y-scroll"
        >
          <h4 className="text-8xl font-PG">{selectedData?.title}</h4>
          <p>{selectedData?.desc}</p>
        </motion.div>
      </AnimatePresence>
      {/* button */}
      <div className="text-white absolute bottom-20 left-24 hidden sm:flex gap-5">
        <button
          className="rounded-full w-24"
          onClick={() => couroselPlay("Dec")}
        >
          <svg
            version="1.1"
            id="icons_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            className="fill-white"
          >
            <g id="row2_1_">
              <g id="_x31__4_">
                <path
                  className="st2"
                  d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z"
                  id="left_3_"
                />
              </g>
            </g>
          </svg>
        </button>
        <button
          className="rounded-full w-24"
          onClick={() => couroselPlay("Inc")}
        >
          <svg
            version="1.1"
            id="icons_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            className="fill-white"
          >
            <g id="row1_1_">
              <g id="_x31__3_">
                <path
                  className="st2"
                  d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                  id="_x32__2_"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      {/* small view */}
      <div
        ref={smallDivRef}
        className="absolute pb-5 sm:pb-0 bottom-7 left-2/4 sm:left-2/4 flex gap-5 sm:w-1/2 overflow-x-scroll pe-20"
      >
        {couroselList?.map((val, index) => (
          <div
            key={index}
            onClick={() => selectHandler(index)}
            style={{ backgroundImage: `url('${val.imageUrl}')` }}
            className={`border  sm:border-none rounded-full w-10 h-10 sm:w-52 sm:h-60 bg-cover bg-center sm:rounded-xl shadow-2xl text-white flex items-end flex-shrink-0 hover:cursor-pointer`}
          >
            <h6 className="hidden sm:block px-2 py-2 shadow-lg font-bold text-2xl break-words overflow-hidden font-PG tracking-wider">
              {val.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
