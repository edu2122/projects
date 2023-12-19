import { useContext } from "react";
import { FiltersContext } from "../context/filters.jsx";
import { TODO_FILTERS } from "../consts.js";

export function useFilters() {
  const { filterSelected, setFilterSelected } = useContext(FiltersContext);
  
  const filtersTodos = (todos) => {
    return todos.filter((todo) => {
      if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
      if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
      return todo;
    });
  };
  
  const active = (todos) =>
    todos.filter((todo) => todo.completed === false).length;
  const completed =(todos) => todos.length - active(todos);

  return {
    filterSelected,
    setFilterSelected,
    filtersTodos,
    active,
    completed,
  };
}