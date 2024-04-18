import React, { useEffect, useState } from "react";
import docMetadata from "../../docs/metadata.json";
import { useLocation } from "react-router-dom";
import Content from "./Content";
import Header from "../../components/typography/Header";

function Main() {
  const [pageMetadata, setPageMetadata] = useState();
  const location = useLocation();

  useEffect(() => {
    // search for the metadata matching path
    const path = location.pathname;
    for (const doc of docMetadata) {
      if ("/docs" + doc.path === path) {
        setPageMetadata(doc);
        return;
      }
      for (const subDoc of doc.subContents) {
        if ("/docs" + doc.path === path) {
          setPageMetadata(subDoc);
          return;
        }
      }
    }
  }, []);

  return (
    <div className="py-6">
      {pageMetadata ? (
        <>
          <Header text={pageMetadata.title} />
          <div className="mt-4 flex flex-wrap justify-start items-center gap-3 mb-10">
            {pageMetadata.tags.map((tag) => {
              return (
                <div className="text-sm px-2 py-1 rounded-md bg-custom-chaKy/80 text-black font-medium tracking-wider">
                  {tag}
                </div>
              );
            })}
          </div>
          <Content />
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
}

export default Main;
