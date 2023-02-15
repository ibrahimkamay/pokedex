import React from "react";
import { useContainer } from "../context/ContainerContext";
import logo from "../poke.svg";

function SearchBar() {
  const { search, setSearch } = useContainer();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="w-full py-4 shadow bg-gray-700  ">
      <div className="container mx-auto flex items-center justify-between space-y-2 px-6 md:flex-row md:space-x-4 md:space-y-0 lg:px-0">
        <h2 className="text-2xl flex items-center justify-center gap-2 font-semibold text-white after:content-['']">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          Pokedex
        </h2>
        <input
          type="text"
          className="w-1/3 px-3 py-1.5 font-normal text-base bg-gray-700 border border-gray-600 placeholder-gray-400 text-white  rounded-lg  transition  ease-in-out  m-0  focus:text-white focus:ring-blue-500  focus:border-blue-500 focus:outline-none"
          placeholder="neyi arıyordun?"
          onChange={handleChange}
          value={search}
        />
      </div>
    </header>
  );
}

export default SearchBar;
