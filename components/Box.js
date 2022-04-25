import React, { useState } from "react";

const Box = ({ children }) => {
  const [isBoxExtended, setBoxExtension] = useState(false);
  return (
    <div>
      <div className="bg-violet-700 w-96">
        <button
          className="h-9 w-full"
          onClick={() => setBoxExtension(!isBoxExtended)}
        >
          Lorem Ipsum
        </button>
        {isBoxExtended &&
          React.Children.map(children, () => {
            return children;
          })}
      </div>
    </div>
  );
};

export default Box;
