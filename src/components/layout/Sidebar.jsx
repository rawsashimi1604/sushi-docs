import React, { useState, useEffect } from "react";
import Logo from "../gateway/Logo";
import SidebarWidget from "./SidebarWidget";
import docsMetadata from "../../docs/metadata.json";
import { Link, useNavigate } from "react-router-dom";
import { GrGithub } from "react-icons/gr";

function Sidebar() {
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const mapped = [];
    docsMetadata.forEach((item) => {
      mapped.push({
        header: item.header,
        link: item.path,
        subContents: item.subContents.map((subItem) => ({
          link: subItem.path,
          header: subItem.header,
        })),
      });
    });
    setDocs(mapped);
  }, []);

  return (
    <aside className="fixed w-[300px] min-w-[300px] pb-0 h-full border-r-[0.2px] border-custom-lightWhite/40 flex flex-col justify-between">
      <div className="flex-grow flex flex-col">
        <section className="pt-4 bg-custom-green shadow-xl text-black">
          <div className="px-4 cursor-pointer" onClick={() => navigate("/")}>
            <Logo />
          </div>
          <div className="pb-4 px-4 pt-4 text-sm text-custom-dark font-customMono">
            version: v0.0.0
          </div>
        </section>
        <main className="flex flex-col bg-custom-dark/70 flex-1 overflow-y-scroll">
          {docs.map((mappedDoc) => {
            return <SidebarWidget contents={mappedDoc} />;
          })}
        </main>
      </div>

      <div className="px-4 flex flex-col gap-2 pb-4 bg-custom-dark/70 text-white">
        <Link
          target="_blank"
          to="https://github.com/rawsashimi1604/sushi-gateway"
        >
          <div className="flex items-center gap-2 duration-150 transition-all hover:underline hover:cursor-pointer">
            <GrGithub />
            <span className="text-sm tracking-widest">
              Source code (gateway)
            </span>
          </div>
        </Link>

        <Link target="_blank" to="https://github.com/rawsashimi1604/sushi-docs">
          <div className="flex items-center gap-2 duration-150 transition-all hover:underline hover:cursor-pointer">
            <GrGithub />
            <span className="text-sm tracking-widest">
              Source code (documentation)
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
