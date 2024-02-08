import Styles from "./StarShip.module.css";
import { Starship } from "./interfaces.ts";

export function StarShip({ name, passengers, crew, films }: Starship) {
  const { listItem } = Styles;

  return (
    <li className={listItem}>
      <div>
        <strong>Passengers:</strong> {name}
      </div>
      <div>
        <strong>Passengers:</strong> {passengers}
      </div>
      <div>
        <strong>Crew:</strong> {crew}
      </div>
      <div>
        <strong>Film Count: </strong>
        {films.length}
      </div>
    </li>
  );
}
