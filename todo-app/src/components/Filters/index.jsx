import { FILTERS_BUTTONS } from "../../consts";

export function Filters({ onFilterChange }) {
  const handleClick = ({ event, key }) => {
    event.preventDefault();
    onFilterChange(key);
  };
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
        margin: 0,
        gap: "1rem",
      }}
    >
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        return (
          <li key={key}>
            <a href={href} onClick={(event) => handleClick({ event, key })}>
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
