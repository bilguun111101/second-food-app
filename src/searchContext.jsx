import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const searchContext = createContext();

export const SearchProvider = (props) => {
  const { children } = props;
  const [search, setSearch] = useState("");
  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = () => useContext(searchContext);