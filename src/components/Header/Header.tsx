import Styles from "./Header.module.css";

export const Header = () => {
  const starWarsLogo = "./src/assets/star-wars-logo.png";
  const cvUrl =
    "https://github.com/soukayna-alala/cv/blob/main/Soukayna-Alala-Junior-Front-End-Developer.pdf";
  const linkedinUrl = "https://www.linkedin.com/in/soukayna-alala/";
  const email = "mailto:soukayna.alala45@gmail.com?subject=hello";
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
          <a href={email}>E-mail</a>
        </li>
      </ul>
      <img className={logo} src={starWarsLogo} alt={"Star Wars Logo"} />
      <h1 className={text}>
        Star Wars challenge by Soukayna Alala using React, Typescript and SWAPI.
      </h1>
    </div>
  );
};
