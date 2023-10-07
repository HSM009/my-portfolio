import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import Block from "../Block";

const Body = () => {
  return (
    <div className=" m-10">
      {/* <div className="  place-items-center place-content-center p-10">
        <p
          className={` text-center text-5xl font-semibold  tracking-[] text-green-500`}
        >
          HOSEIN SIRAT MOHAMMAD
        </p>
      </div> */}
      {/* <Hero /> */}
      <Contact />
    </div>
  );
};

export default Body;
