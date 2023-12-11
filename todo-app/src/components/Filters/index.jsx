import { FILTERS_BUTTONS } from "../../consts";
import "./style.css";

export function Filters({ onFilterChange }) {
  const handleClick = ({ event, key }) => {
    event.preventDefault();
    onFilterChange(key);
  };
  return (
    <ul className="todo-filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        return (
          <li className="filter" key={key}>
            <a
              href={href}
              className="filter"
              onClick={(event) => handleClick({ event, key })}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
