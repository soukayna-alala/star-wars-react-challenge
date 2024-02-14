import Styles from "./Header.module.css";
import { list, SWAPILink } from "./constants.ts";
import starWarsLogo from "../../assets/star-wars-logo.png";

export const Header = () => {
  const { logo, text, urls } = Styles;

  return (
    <div>
      <ul className={urls}>
        {list.map(({ label, href }) => {
          return (
            <li key={label}>
              <a href={href} target={"_blank"}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      <img className={logo} src={starWarsLogo} alt={"Star Wars Logo"} />
      <h1 className={text}>
        Star Wars challenge by Soukayna Alala using React, Typescript and
        <a href={SWAPILink} target={"_blank"}>
          SWAPI
        </a>
      </h1>
    </div>
  );
};
