import { useState } from "react";
import Styles from "./StarShipList.module.css";
import { StarShip } from "../StarShip/StarShip.tsx";
import { useEffect } from "react";
import { StarshipsResponse } from "./interfaces.ts";
import { url } from "../StarShip/constants.ts";

export function StarShipList() {
  console.log("%c Component rendered ", "background:red; color:white");
  const [starships, setStarships] = useState<StarshipsResponse | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: StarshipsResponse) => {
        console.log("I HAVE THE DATA", data);
        setStarships(data);
      });
  }, []);

  const { listOfNames } = Styles;

  return (
    <div>
      {starships === null ? (
        "...Loading"
      ) : (
        <ul className={listOfNames}>
          {starships.results.map((i) => {
            return <StarShip {...i} key={i.name} />;
          })}
        </ul>
      )}
    </div>
  );
}
