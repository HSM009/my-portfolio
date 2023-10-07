import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface iTextProp {
  textSentence: string;
}

const TypingVanishingLettersAnimation = ({ textSentence }: iTextProp) => {
  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const stayDuration = 1000;
  const typingSpeed = 100; // Adjust the typing speed here (milliseconds per letter)
  const pauseDuration = 100; // Adjust the pause duration between letters (milliseconds)
  const vanishingSpeed = 10;

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (currentIndex >= textSentence.length) {
          clearInterval(interval);
          setTimeout(() => {
            startVanishingLetters();
          }, stayDuration);
          return;
        }

        setVisibleLetters((prevLetters) => [
          ...prevLetters,
          textSentence[currentIndex],
        ]);

        setCurrentIndex((prevIndex) => prevIndex + 1);
      },
      currentIndex === 0 ? typingSpeed : typingSpeed + pauseDuration
    );

    return () => {
      clearInterval(interval);
    };
  }, [textSentence, currentIndex]);

  const startVanishingLetters = () => {
    let currentVisibleIndex = visibleLetters.length - 1;
    const interval = setInterval(() => {
      if (currentVisibleIndex < 0) {
        clearInterval(interval);
        setVisibleLetters([]);
        return;
      }

      setVisibleLetters((prevLetters) =>
        prevLetters.slice(0, prevLetters.length - 1)
      );

      currentVisibleIndex--;
    }, vanishingSpeed);
  };

  return (
    <>
      <AnimatePresence>
        {visibleLetters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: stayDuration / 1000 }} // Convert to seconds
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </>
  );
};

export default TypingVanishingLettersAnimation;
