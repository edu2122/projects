import { Filters } from "../Filters";
export function Footer({ activeTodos, completeTodos, onFilterChange }) {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <span>
        <strong>{activeTodos} - pending tasks</strong>
      </span>
      <span>
        <strong>{completeTodos} - completed tasks</strong>
      </span>
      <Filters onFilterChange={onFilterChange} />
    </footer>
  );
}
