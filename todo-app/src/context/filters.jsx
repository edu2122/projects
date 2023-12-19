import { createContext, useState } from "react";
import { TODO_FILTERS } from "../consts";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const initialFilter = TODO_FILTERS.ALL;
  const [filterSelected, setFilterSelected] = useState(initialFilter);

  return (
    <FiltersContext.Provider value={{ filterSelected, setFilterSelected }}>
      {children}
    </FiltersContext.Provider>
  );
}
