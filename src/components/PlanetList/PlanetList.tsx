// import { useState } from "react";
import Styles from "./PlanetList.module.css";
import { Planet } from "../Planet/Planet.tsx";
import { PlanetProps } from "../Planet/interfaces.ts";

export function PlanetList() {
  // const [count, setCount] = useState(0);
  const { listOfNames } = Styles;
  const planets: PlanetProps[] = [
    {
      name: "Bob",
      population: "x",
    },
    {
      name: "Lisa",
      population: "f",
    },
  ];

  return (
    <ul className={listOfNames}>
      {planets.map((i) => {
        return (
          <Planet
            key={i.population}
            population={i.population}
            name={i.name}
          ></Planet>
        );
      })}
    </ul>
  );
}
