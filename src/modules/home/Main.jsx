import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/typography/Header";
import docsMetadata from "../../docs/metadata.json";
import { GoDotFill } from "react-icons/go";

function Main() {
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setDocs(docsMetadata);
  }, []);

  return (
    <div className="py-6 font-customInter tracking-wide">
      <Header text="Sushi Gateway documentation" />

      <p className="">
        Welcome to the Sushi Gateway documentation page! You can find all
        information related to the project here.
      </p>

      <ul className="flex flex-col mt-4">
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
