import { PlanetProps } from "./interfaces.ts";
import Styles from "./Planet.module.css";

export function Planet(props: PlanetProps) {
  const { name, population } = props;
  const { listItem } = Styles;

  return (
    <li className={listItem}>
      <div>Planet name = {name}</div>
      <div>Population = {population}</div>
    </li>
  );
}
