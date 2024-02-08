import Styles from "./StarShip.module.css";
import { Starship } from "./interfaces.ts";

export function StarShip({ name, passengers }: Starship) {
  const { listItem } = Styles;

  return (
    <li className={listItem}>
      <div>name: {name}</div>
      <div>passengers: {passengers}</div>
    </li>
  );
}
