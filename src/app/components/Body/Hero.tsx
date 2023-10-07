import React from "react";
import { introductionBody } from "../data";
import Image from "next/image";
import myPic from "@/../../public/mypic.jpeg";
import Block from "../Block";

const Hero = () => {
  return (
    <>
      <div className=" grid grid-cols-1 laptop:grid-cols-2 gap-8">
        <Block
          title="INTRODUCTION"
          img=""
          content={introductionBody}
          color="green-500"
        />
        <div className=" flex place-items-center place-content-center ">
          <div className="rounded-full bg-slate-900 p-2">
            <Image
              className=" rounded-full border bg-gray-800  border-green-500 p-3"
              src={myPic}
              alt="my portfolio pic"
              height={450}
              width={450}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
