import React, { useState, useEffect } from "react";
import SidebarWidget from "./SidebarWidget";
import docsMetadata from "../../docs/metadata.json";
import { useNavigate } from "react-router-dom";

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
    <aside className="min-w-[300px] py-4 h-full border-r-[0.2px] border-custom-lightWhite">
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
    </aside>
  );
}

export default Sidebar;
