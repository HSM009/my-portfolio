"use client";
import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";

const TvFlashFullscreenAnimation = () => {
  const [isTvExpanding, setIsTvExpanding] = useState(false);

  useEffect(() => {
    setIsTvExpanding(true);

    const expandInterval = setInterval(() => {
      setIsTvExpanding(false);
    }, 1000); // Adjust the interval time for expansion duration (milliseconds)

    return () => {
      clearInterval(expandInterval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div
        className={`flex items-center justify-center w-full h-full transition-transform duration-[8000] ease-in-out ${
          isTvExpanding ? "scale-0" : "scale-100"
        }`}
      >
        <div className="bg-black border-8 border-gray-500 rounded-lg p-2 relative overflow-hidden w-full h-full">
          <div
            className={`screen ${isTvExpanding ? "bg-black" : "bg-white"}`}
          />
        </div>
      </div>
      <Welcome />
    </div>
  );
};

export default TvFlashFullscreenAnimation;
