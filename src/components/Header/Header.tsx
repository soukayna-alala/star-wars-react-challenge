import Styles from "./Header.module.css";
import {
  cvUrl,
  email,
  linkedinUrl,
  starWarsLogo,
  SWAPILink,
} from "./constants.ts";

export const Header = () => {
  const { logo, text, urls } = Styles;

  return (
    <div>
      <ul className={urls}>
        <li>
          <a href={linkedinUrl} target={"_blank"}>
            Linkedin
          </a>
        </li>
        <li>
          <a href={cvUrl} target={"_blank"}>
            CV
          </a>
        </li>
        <li>
          <a href={email}>Email me</a>
        </li>
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
