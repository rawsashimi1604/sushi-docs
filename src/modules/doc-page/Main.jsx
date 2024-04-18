import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import metadataJson from "../../docs/metadata.json";
import { GoDotFill } from "react-icons/go";

function Main() {
  const location = useLocation();
  const [content, setContent] = useState("");

  useEffect(() => {
    const path = location.pathname;
    for (const item of metadataJson) {
      if ("/docs" + item.path === path) {
        import(`../../docs/${item.markdown}.md`).then((md) => {
          fetch(md.default)
            .then((res) => res.text())
            .then((mdContent) => setContent(mdContent));
        });
        return;
      }
      for (const subItem of item.subContents) {
        if ("/docs" + subItem.path === path) {
          import(`../../docs/${subItem.markdown}.md`).then((md) => {
            fetch(md.default)
              .then((res) => res.text())
              .then((mdContent) => setContent(mdContent));
          });
          return;
        }
      }
    }
  }, [location]);

  return (
    <div className="font-customMono">
      <Markdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="mt-8 mb-8 text-4xl md:text-3xl text-custom-chaKy tracking-wider"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="mt-7 mb-7  text-3xl md:text-2xl text-custom-malibu"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="mt-6 mb-6  text-2xl md:text-1xl text-custom-coral"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="mt-5 mb-5 tracking-wider font-customInter"
              {...props}
            />
          ),
          strong: ({ node, ...props }) => (
            <strong
              className="mt-3 mb-3 tracking-wider font-bold font-customInter text-custom-chaKy"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => {
            return (
              <div className="inline-flex gap-4">
                <GoDotFill className="min-w-3 w-4 h-3 mt-1.5 text-custom-purple" />
                <ol {...props} className="tracking-wide font-customInter" />
              </div>
            );
          },
          li: ({ node, ...props }) => {
            return (
              <div className="inline-flex gap-4 mt-2 mb-2">
                <GoDotFill className="min-w-3 w-4 h-3 mt-1.5 text-custom-purple" />
                <li {...props} className="tracking-wide font-customInter" />
              </div>
            );
          },
          code: ({ node, ...props }) => {
            return (
              <code
                className="font-customMono px-2 py-[1px] bg-gray-900 text-custom-whiskey rounded-sm"
                {...props}
              />
            );
          },
          pre: ({ node, ...props }) => {
            return (
              <pre
                className="font-customMono p-4 mt-6 mb-6 bg-gray-900 rounded-sm text-wrap"
                {...props}
              />
            );
          },
          img: ({ node, ...props }) => {
            return (
              <div className="flex justify-center">
                <img
                  className="mt-6 mb-6 opacity-80 shadow-lg shadow-gray-900"
                  {...props}
                />
              </div>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default Main;
