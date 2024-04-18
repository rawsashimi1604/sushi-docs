import React, { useState } from "react";

import { CiSquareMinus } from "react-icons/ci";

function SidebarWidget({ contents }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="tracking-wider text-sm">
      <div
        onClick={() => setIsClicked((prev) => !prev)}
        className={`py-2 px-4 cursor-pointer hover:bg-custom-chaKy hover:text-custom-dark ${
          isClicked && " bg-custom-chaKy shadow-md text-custom-dark flex gap-1.5 items-center"
        }`}
      >
        { isClicked && <CiSquareMinus className="h-6 w-6" />}
        <span onClick={() => alert("redirect")}>{contents.header}</span>
      </div>
      {isClicked && (
        <div className="flex flex-col gap-1 bg-custom-chaKy/90 text-custom-dark">
          {contents.subContents.map((sub) => {
            return <div className="pl-12 pb-2 pt-2 cursor-pointer hover:bg-custom-chaKy duration-150 transition-all">{sub.header}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default SidebarWidget;
