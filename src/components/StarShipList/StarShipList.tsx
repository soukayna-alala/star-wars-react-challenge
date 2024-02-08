import { useState } from "react";
import Styles from "./StarShipList.module.css";
import { StarShip } from "../StarShip/StarShip.tsx";
import { useEffect } from "react";
import { StarshipsResponse } from "./interfaces.ts";
import { url } from "../StarShip/constants.ts";

export function StarShipList() {
  const [starships, setStarships] = useState<StarshipsResponse | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: StarshipsResponse) => setStarships(data));
  }, []);

  const { list, loading } = Styles;

  return (
    <div>
      {starships === null ? (
        <h1 className={loading}>...Loading</h1>
      ) : (
        <ul className={list}>
          {starships.results.map((i) => (
            <StarShip {...i} key={i.name} />
          ))}
        </ul>
      )}
    </div>
  );
}
