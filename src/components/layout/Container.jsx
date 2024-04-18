import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Container({ children }) {
  return (
    <main className="bg-custom-bg text-custom-lightWhite min-w-screen min-h-screen px-10 flex justify-center pb-10 pt-2 font-customInter">
      <Navbar />
      <div className="animate__animated animate__fadeIn w-screen md:w-[1000px] h-full mt-16">
        {children}
        <div className="pt-6">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Container;
