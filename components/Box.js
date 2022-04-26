import React, { useState } from "react";
import Arrow from "../images/Arrow";
import en from "../lozalizations/en.json";
import QuestionMark from "../images/QuestionMark";

const Box = ({ icon, children, isTooltip }) => {
  const [isBoxExtended, setBoxExtension] = useState(false);
  const [tooltipVisibility, setTooltipVisibility] = useState(false);
  return (
    <div className="ms:w-full md:w-[591px] rounded">
      <button
        className="w-full h-[76px] flex flex-row text-white text-base font-extrabold px-7 justify-between items-center bg-codGrayInActive "
        onClick={() => setBoxExtension(!isBoxExtended)}
      >
        <div className="flex flex-row items-center">
          {icon} <p className="ml-1.5">{en.rowTitle}</p>{" "}
          {isTooltip && (
            <div
              className="ml-1.5"
              onMouseEnter={() => setTooltipVisibility(true)}
              onMouseLeave={() => setTooltipVisibility(false)}
            >
              {tooltipVisibility && (
                <div
                  role="tooltip"
                  className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out right-80 ml-8 shadow-lg bg-codGray  p-4 rounded"
                >
                  Lorem
                </div>
              )}
              <QuestionMark />
            </div>
          )}
        </div>
        <Arrow />
      </button>
      <div>
        {isBoxExtended &&
          React.Children.map(children, () => {
            return (
              <div className="pl-7 w-full text-white pb-14 bg-codGrayInActive">
                {children}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Box;
