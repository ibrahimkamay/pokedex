import { createContext, useContext, useState } from "react";

const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState("");
  const value = { pokeData, setPokeData, search, setSearch };
  return (
    <ContainerContext.Provider value={value}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = () => useContext(ContainerContext);
