import React, { useState, useEffect } from "react";
import axios from "axios";

import { useContainer } from "../context/ContainerContext";

function Box() {
  const { pokeData, setPokeData, search } = useContainer();
  const [loading, setLoading] = useState();

  const getPoke = async () => {
    for (let i = 1; i <= 50; i++) {
      setLoading(true);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      setPokeData((prev) => [...prev, res.data]);
      console.log(res.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPoke();
  }, []);
  return (
    <div className="mx-8 mt-10 grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4">
      {loading ? (
        <div className="loader"></div>
      ) : (
        pokeData
          .filter((item) => {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item, id) => {
            return (
              <div key={id} className="p-4">
                <div className="bg-gray-700 flex flex-wrap h-full justify-between items-center relative shadow-md rounded-3xl overflow-hidden relative  pt-12 pr-4 pb-12 pl-12  text-white transition duration-150 ease-out hover:-translate-y-4 cursor-pointer">
                  <div className="absolute top-5 right-8 text-white text-5xl font-extrabold opacity-10">
                    <span>#{item.id.toString().padStart(3, "0")}</span>
                  </div>
                  <div className="self-start">
                    <h2 className="capitalize m-0 font-extrabold text-md ">
                      {item.name}
                    </h2>
                    <div className="mt-8">
                      <span className="bg-gray-500 px-5 py-1 text-md capitalize rounded-full">
                        {item.types[0].type.name}
                      </span>
                    </div>
                    <div className="mt-6 text-lg">
                      <small>Height:</small>
                      <p className="font-bold mb-2">{item.weight}</p>
                      <small>Weight:</small>
                      <p className="font-bold">{item.height}</p>
                    </div>
                  </div>

                  <div className="self-end items-center flex justify-end max-w-xs">
                    <a href="#!">
                      <img
                        className="w-48 h-48"
                        src={`${item.sprites.other.dream_world.front_default}`}
                        alt={`${item.name}`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}

export default Box;
