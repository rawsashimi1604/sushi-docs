import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Container({ children }) {
  return (
    <div className="font-customInter bg-custom-bg text-custom-lightWhite min-w-screen min-h-screen ">
      <Navbar />
      <main className="flex pb-10 pt-2">
        <Sidebar />
        <div className="animate__animated animate__fadeIn w-screen md:w-[1000px] h-full">
            {children}
        </div>
      </main>
    </div>
  );
}

export default Container;
