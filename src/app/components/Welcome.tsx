"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FallingLettersAnimation from "./FallingLettersAnimation";

const Welcome = () => {
  const _textSentence: string = "Hosein Sirat Mohammad";
  const [isFirstAnimationComplete, setIsFirstAnimationComplete] =
    useState(false);
  const [fadeOut, setFadeOut] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstAnimationComplete(true);
    }, 5200); // Set the delay to match the total duration of both FallingLettersAnimation components

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const fadeOut = setTimeout(() => {
      setFadeOut(false);
    }, 12200); // Set the delay to match the total duration of both FallingLettersAnimation components

    return () => {
      clearTimeout(fadeOut);
    };
  }, []);
  let fadeCheck = 0;
  return (
    <>
      {fadeOut && fadeCheck !== 1 && (
        <div className=" flex flex-col items-center justify-center h-screen font-myfont text-green-500">
          <AnimatePresence>
            <p className=" text-4xl mobile:text-5xl desktop:text-7xl ">
              <FallingLettersAnimation
                textSentence={"Welcome To Portfolio Of"}
              />
            </p>
          </AnimatePresence>
          {isFirstAnimationComplete && ( // Render the second AnimatePresence only when isFirstAnimationComplete is true
            <AnimatePresence>
              <div className=" text-3xl mobile:text-4xl desktop:text-6xl font-myfont text-center mt-10 mobile:mt-15 desktop:mt-20">
                <motion.div>
                  <FallingLettersAnimation textSentence={_textSentence} />
                </motion.div>
              </div>
            </AnimatePresence>
          )}
        </div>
      )}
    </>
  );
};
export default Welcome;
