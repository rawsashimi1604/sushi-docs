import React, { useState, useEffect } from "react";
import SidebarWidget from "./SidebarWidget";
import docsMetadata from "../../docs/metadata.json";

const introductionContainer = {
  header: "Introduction",
  link: "/introduction",
  subContents: [
    {
      link: "/introduction/what-is-sushi-gateway",
      header: "What is Sushi Gateway?",
    },
    {
      link: "/introduction/architecture-overview",
      header: "Architecture Overview",
    },
    {
      link: "/introduction/life-of-a-request",
      header: "Life of a Request",
    },
    {
      link: "/introduction/what-is-an-api-gateway",
      header: "What is an API Gateway",
    },
  ],
};

function Sidebar() {
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
      <div className="px-4">some sushi gateway logo</div>
      <div className="pb-8 px-4 text-sm text-custom-lightDark font-customMono">
        latest: v0.0.0
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
