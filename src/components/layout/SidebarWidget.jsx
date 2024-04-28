import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CiSquareMinus } from "react-icons/ci";

function SidebarWidget({ contents }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="tracking-wider text-sm">
      <div
        onClick={() => setIsClicked((prev) => !prev)}
        className={`py-2 px-4 hover:bg-custom-chaKy hover:text-custom-dark ${isClicked &&
          " bg-custom-chaKy shadow-md text-custom-dark flex gap-1.5 items-center"
          }`}
      >
        {isClicked && <CiSquareMinus className="h-6 w-6" />}
        <span className="font-bold cursor-pointer" onClick={() => navigate("/docs" + contents.link)}>{contents.header}</span>
      </div>
      {isClicked && (
        <div className="flex flex-col gap-0.5 bg-custom-chaKy/85 text-black">
          {contents.subContents.map((sub) => {
            return (
              <div className="pl-12 pb-1 pt-1 hover:bg-custom-chaKy duration-150 transition-all">
                <span className="cursor-pointer" onClick={() => navigate("/docs" + sub.link)}>{sub.header}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SidebarWidget;
