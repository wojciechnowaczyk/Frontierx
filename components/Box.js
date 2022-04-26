import React, { useState } from "react";
import Arrow from "../images/Arrow";
import en from "../lozalizations/en.json";

const Box = ({ icon, children }) => {
  const [isBoxExtended, setBoxExtension] = useState(false);
  return (
    <div className="w-[591px] rounded">
      <button
        className="w-full h-[76px] flex flex-row text-white text-base font-extrabold px-7 justify-between items-center bg-codGrayInActive "
        onClick={() => setBoxExtension(!isBoxExtended)}
      >
        <div className="flex flex-row items-center">
          {icon} <p className="ml-1.5">{en.rowTitle}</p>
        </div>
        <Arrow />
      </button>
      <div>
        {isBoxExtended &&
          React.Children.map(children, () => {
            return (
              <div className="pl-7  text-white pb-14 bg-codGrayInActive">
                {children}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Box;
