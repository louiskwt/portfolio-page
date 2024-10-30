import {UilBoltAlt, UilGithub, UilHtml5, UilJavaScript, UilProgrammingLanguage, UilReact} from "@iconscout/react-unicons";
import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({link, repo, technologies, title}) => {
  // Generate icons for each projects based on technologies used
  let iconList = [];
  technologies.map((technology, index) => {
    switch (true) {
      case technology === "html":
        iconList.push(<UilHtml5 className={styles.card__icon} size={30} key={index} />);
        break;
      case technology === "javascript":
        iconList.push(<UilJavaScript className={styles.card__icon} size={30} key={index} />);
        break;
      case technology === "react":
        iconList.push(<UilReact className={styles.card__icon} size={30} key={index} />);
        break;
      default:
        iconList.push(<UilProgrammingLanguage className={styles.card__icon} size={30} key={index} />);
        break;
    }
  });

  return (
    <div className={styles.card__content}>
      <div>
        {/* Icon for technolgies used for each project */}
        {iconList}
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.card__buttons}>
          <a href={link} target="_blank" className={"button__flex button__link " + `${styles.card__button}`}>
            Demo <UilBoltAlt className={styles.card__icon} />
          </a>
          <a href={repo} target="_blank" className={"button__flex button__link " + `${styles.card__button}`}>
            Repo <UilGithub className={styles.card__icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
