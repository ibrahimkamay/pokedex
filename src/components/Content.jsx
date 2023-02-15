import React from "react";
import Box from "./Box";
import SearchBar from "./SearchBar";

function Content() {
  return (
    <div className="flex  h-screen flex-col">
      <SearchBar />
      <Box />
    </div>
  );
}

export default Content;
