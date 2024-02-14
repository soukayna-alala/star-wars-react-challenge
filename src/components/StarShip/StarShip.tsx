import Styles from "./StarShip.module.css";
import { Starship } from "./interfaces.ts";

export function StarShip({ name, passengers, crew, films }: Starship) {
  const { listItem, copy } = Styles;
  const dataList = [
    {
      label: "Name",
      data: name,
    },
    {
      label: "Passengers",
      data: passengers,
    },
    {
      label: "Crew",
      data: crew,
    },
    {
      label: "Film Count",
      data: films.length,
    },
  ];

  return (
    <li className={listItem}>
      {dataList.map(({ label, data }) => {
        return (
          <div className={copy} key={label}>
            <strong>{label}:</strong> {data}
          </div>
        );
      })}
    </li>
  );
}
