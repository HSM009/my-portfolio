import React, { ComponentType } from "react";
import { componentKeyMap } from "./data";

type ImageProps = {
  _key: string;
  _value: string;
  _color: string;
};

const SvgLoad = ({ _key, _value, _color }: ImageProps) => {
  let MyComponent: ComponentType<any> | null = null;

  if (_key && _value) {
    for (const key in componentKeyMap) {
      if (_key === key) {
        MyComponent = componentKeyMap[key];
        break;
      }
    }
  }

  if (MyComponent) {
    return (
      <div>
        <MyComponent className={`hover:text-[${_color}]`} />
      </div>
    );
  } else {
    return <div>Image not available</div>;
  }
};

export default SvgLoad;
