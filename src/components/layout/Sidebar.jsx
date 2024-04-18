import React from "react";
import SidebarWidget from "./SidebarWidget";

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
  return (
    <aside className="min-w-[300px] py-4 h-full border-r border-white">
      {/* TODO: insert some logo here. */}
      <div className="pb-8 px-4">some logo</div>
      <main className="flex flex-col gap-2">
        <SidebarWidget contents={introductionContainer} />
        <SidebarWidget contents={introductionContainer} />
        <SidebarWidget contents={introductionContainer} />
      </main>
    </aside>
  );
}

export default Sidebar;
