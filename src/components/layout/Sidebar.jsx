import React, { useState, useEffect } from "react";
import SidebarWidget from "./SidebarWidget";
import docsMetadata from "../../docs/metadata.json";
import { Link, useNavigate } from "react-router-dom";
import { GrGithub } from "react-icons/gr";

function Sidebar() {
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const mapped = [];
    for (const item of docsMetadata) {
      mapped.push({
        header: item.header,
        link: item.path,
        subContents: item.subContents.map((subItem) => ({
          link: subItem.path,
          header: subItem.header,
        })),
      });
    }
    setDocs(mapped);
  }, []);

  return (
    <aside className="fixed w-[300px] min-w-[300px] py-4 h-full border-r-[0.2px] border-custom-lightWhite flex flex-col justify-between">
      <div>
        {/* TODO: insert some logo here. */}
        <div className="px-4 cursor-pointer" onClick={() => navigate("/")}>
          some sushi gateway logo
        </div>
        <div className="pb-8 px-4 text-sm text-custom-lightDark font-customMono">
          version: v0.0.0
        </div>
        <main className="flex flex-col">
          {docs.map((mappedDoc) => {
            return <SidebarWidget contents={mappedDoc} />;
          })}
        </main>
      </div>

      <div className="px-4 flex flex-col gap-2 mb-2">
        <Link target="_blank" to="https://github.com/rawsashimi1604/sushi-gateway">
          <div className="flex items-center gap-2 duration-150 transition-all hover:underline hover:cursor-pointer">
            <GrGithub />
            <span className="text-sm tracking-widest">Source code (gateway)</span>
          </div>
        </Link>

        <Link target="_blank" to="https://github.com/rawsashimi1604/sushi-docs">
          <div className="flex items-center gap-2 duration-150 transition-all hover:underline hover:cursor-pointer">
            <GrGithub />
            <span className="text-sm tracking-widest">Source code (documentation)</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
