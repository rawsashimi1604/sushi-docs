import React, { useState } from "react";

import { CiSquareMinus } from "react-icons/ci";

function SidebarWidget({ contents }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsClicked((prev) => !prev)}
        className={`py-2 px-4 cursor-pointer hover:bg-custom-chaKy hover:text-custom-dark ${
          isClicked && "  bg-custom-chaKy text-custom-dark flex gap-1.5 items-center"
        }`}
      >
        { isClicked && <CiSquareMinus className="h-6 w-6" />}
        {contents.header}
      </div>
      {isClicked && (
        <div className="pt-2 flex flex-col gap-2 bg-custom-chaKy/80 text-custom-dark">
          {contents.subContents.map((sub) => {
            return <div className="pl-8 pb-2">{sub.header}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default SidebarWidget;
