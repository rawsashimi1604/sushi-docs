import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/typography/Header";
import docsMetadata from "../../docs/metadata.json";
import { GoDotFill } from "react-icons/go";
import { FaDocker } from "react-icons/fa";
import Subheader from "../../components/typography/Subheader";
import { SiHelm, SiKubernetes } from "react-icons/si";

function Main() {
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setDocs(docsMetadata);
    document.title = "Sushi Gateway | Home"
  }, []);

  return (
    <div className="py-6 font-customInter tracking-wide">

      <div className="">
        <img src="/logo.png" className="w-80" style={{ filter: "invert(1)" }} />
        <p className="mt-1">
          Welcome to the Sushi Gateway documentation page! You can find all
          information related to the project here.
        </p>
      </div>


      <div className="mt-5">
        <Subheader text="How to get started" />
        <div className="grid grid-cols-2 gap-4 items-center mt-4">
          <div className="inline-flex items-center gap-3 p-4 border-[0.2px] rounded-2xl shadow-lg transition-all hover:translate-y-1 duration-150 hover:cursor-pointer">
            <FaDocker className="text-2xl" />
            <p>Start locally with Docker</p>
          </div>
          <div className="inline-flex items-center gap-3 p-4 border-[0.2px] rounded-2xl shadow-lg transition-all hover:translate-y-1 duration-150 hover:cursor-pointer">
            <FaDocker className="text-2xl" />
            <p>Mock with Docker Compose</p>
          </div>
          <div className="inline-flex items-center gap-3 p-4  border-[0.2px] rounded-2xl shadow-lg transition-all hover:translate-y-1 duration-150 hover:cursor-pointer">
            <SiKubernetes className="text-2xl" />
            <p>Installing on Kubernetes Cluster</p>
          </div>
          <div className="inline-flex items-center gap-3 p-4 border-[0.2px] rounded-2xl shadow-lg transition-all hover:translate-y-1 duration-150 hover:cursor-pointer">
            <SiHelm className="text-2xl" />
            <p>Quick start with Helm Chart</p>
          </div>
        </div>
      </div>

      <ul className="flex flex-col mt-8">
        <p className="text-custom-coral font-bold">Pages:</p>
        {docs.map((doc, index) => {
          return (
            <div className="flex flex-col">
              <div className="inline-flex gap-2" key={index}>
                <GoDotFill className="min-w-3 w-4 h-3 mt-1.5 text-custom-purple" />
                <li
                  onClick={() => navigate("/docs" + doc.path)}
                  className="tracking-wider font-customInter cursor-pointer duration-150 transition-all hover:opacity-90 hover:underline underline-offset-1 hover:translate-x-1"
                >
                  {doc.title}
                </li>
              </div>
              {doc.subContents.map((doc, index) => {
                return (
                  <div key={index} className="pl-6 inline-flex gap-2">
                    <GoDotFill className="min-w-3 w-4 h-3 mt-1.5 text-custom-green" />
                    <li
                      onClick={() => navigate("/docs" + doc.path)}
                      className=" tracking-wider font-customInter cursor-pointer duration-150 transition-all hover:opacity-90 hover:underline underline-offset-1 hover:translate-x-1"
                    >
                      {doc.title}
                    </li>
                  </div>
                );
              })}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
