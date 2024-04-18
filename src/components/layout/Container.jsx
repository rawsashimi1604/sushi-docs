import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Container({ children }) {
  return (
    <div className="font-customInter bg-custom-bg text-custom-lightWhite min-w-screen min-h-screen ">
      <main className="flex h-screen">
        <Sidebar />
        <div className="animate__animated animate__fadeIn w-screen p-4 px-8 h-full">
          <Navbar />
          <div className="md:w-[1000px]">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default Container;
