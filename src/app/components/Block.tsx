import React from "react";
import Link from "next/link";
import SvgLoad from "./Svgload";

type TProps = {
  title: string;
  img: string;
  content: Record<string, string> | string;
  color: string;
};

const Block = ({ title, img, content, color }: TProps) => {
  const entries = Object.entries(content);
  const entriesLength = entries.length;

  return (
    <div className=" flex flex-col place-items-center place-content-center">
      <p
        className={` text-center text-4xl font-semibold  tracking-widest text-${color}`}
      >
        {title.toUpperCase()}
      </p>
      <div className="   bg-slate-900 p-2 flex rounded-lg w-full  ">
        <div
          className={`border bg-gray-800 rounded-lg w-full border-${color} p-5 gap-14 flex flex-row place-items-center place-content-center `}
        >
          {typeof content === "string" ? (
            <p className={`text-white text-lg text-justify`}>{content}</p>
          ) : (
            entries.map(([key, value]) => (
              <div
                className={` grid grid-row-${entriesLength} gap-4 flex flex-col`}
              >
                <div
                  className={`font-medium text-xl text-${color} text-center`}
                  key={key}
                >
                  {key.toLocaleUpperCase()}
                </div>
                {value.substring(0, 3) == "img" ? (
                  <div className=" flex justify-center " key={key}>
                    <Link
                      className=" "
                      href={value.substring(3)}
                      target="_blank"
                    >
                      <SvgLoad _key={key} _value={value} _color="#f01616" />
                    </Link>
                  </div>
                ) : (
                  <div className="text-white text-lg " key={key}>
                    {value}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;
