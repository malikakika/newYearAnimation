import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "./particules";

const NewYearAnimation = () => {
  const [year, setYear] = useState("2024");

  useEffect(() => {
    const timer = setTimeout(() => {
      setYear("2025");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const imageMotionVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const numberVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const numberChangeVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 1.5, opacity: 0.5, transition: { duration: 0.4 } },
    final: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden">
      <ParticlesBackground />

      <motion.div className="absolute top-10 left-0 right-0 flex flex-wrap justify-between px-4 sm:px-10 z-10">
        <motion.img
          src="/roadshine.png"
          alt="Roadshine Logo"
          className="w-24 h-auto sm:w-40"
          initial="initial"
          animate="animate"
          variants={imageMotionVariants}
        />
        <motion.img
          src="/maharat.png"
          alt="Maharat Logo"
          className="w-24 h-auto sm:w-60"
          initial="initial"
          animate="animate"
          variants={imageMotionVariants}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-2xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5C365D] to-[#FBCB81] z-10 mt-20 text-center px-4"
      >
        ROADSHINE and MAHARAT 
     
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-2xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5C365D] to-[#FBCB81] z-10 mt-6 text-center px-4"
      >
       wish you 
     
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-2xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5C365D] to-[#FBCB81] z-10 mt-2 text-center px-4"
      >
       a
     
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-5xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5C365D] to-[#FBCB81] z-10 mt-6 sm:mt-16 text-center px-4"
      >
        HAPPY NEW YEAR
      </motion.h1>
      <motion.div className="flex text-5xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FBCB81] to-[#5C365D] z-10 mt-6 sm:mt-6">
        <motion.span
          className="mx-1"
          initial="initial"
          animate="animate"
          variants={numberVariants}
          transition={{ delay: 0.4 }}
        >
          2
        </motion.span>
        <motion.span
          className="mx-1"
          initial="initial"
          animate="animate"
          variants={numberVariants}
          transition={{ delay: 0.6 }}
        >
          0
        </motion.span>
        <motion.span
          className="mx-1"
          initial="initial"
          animate="animate"
          variants={numberVariants}
          transition={{ delay: 0.8 }}
        >
          2
        </motion.span>
        <motion.span
          className="mx-1"
          initial="initial"
          animate={year === "2025" ? "final" : "animate"}
          variants={year === "2025" ? numberChangeVariants : numberVariants}
          transition={{ delay: 1 }}
        >
          {year[3]}
        </motion.span>
      </motion.div>


    </div>
  );
};

export default NewYearAnimation;
