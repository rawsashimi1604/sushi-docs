import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Container({ children }) {
  return (
    <div className="font-customInter bg-custom-bg text-custom-lightWhite min-w-screen min-h-screen ">
      <main className="flex h-screen">
        <Sidebar />
        <div className="relative ml-[300px] w-screen h-full">
          <Navbar />
          <div className="pt-[40px] p-8 animate__animated animate__fadeIn md:w-[1000px]">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default Container;
