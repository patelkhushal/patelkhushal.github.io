import React from "react";
import { useMediaQuery } from "react-responsive";

import PythonLogo from "./assets/images/Python.png";
import JavaLogo from "./assets/images/Java.webp";
import JavascriptLogo from "./assets/images/Javascript.svg";
import TypescriptLogo from "./assets/images/Typescript.png"
import CLogo from "./assets/images/C.webp";
import SQLLogo from "./assets/images/SQL.png";

import AngularLogo from "./assets/images/Angular.svg";
import ReactLogo from "./assets/images/React.png";
import FlaskLogo from "./assets/images/Flask.png";
import NodeLogo from "./assets/images/Node.png";
import HTMLLogo from "./assets/images/HTML.jpg";
import CSSLogo from "./assets/images/CSS.svg";
import BootstrapLogo from "./assets/images/Bootstrap.png";

import SparkLogo from "./assets/images/Spark.png";
import HadoopLogo from "./assets/images/Hadoop.jpg";
import NLTKLogo from "./assets/images/NLTK.png";
import TableauLogo from "./assets/images/Tableau.svg";
import RedisLogo from "./assets/images/Redis.webp";
import MongoLogo from "./assets/images/Mongo.png";
import DB2Logo from "./assets/images/DB2.png";

import GithubLogo from "./assets/images/Github.png";
import HerokuLogo from "./assets/images/Heroku.png";
import JenkinsLogo from "./assets/images/Jenkins.jpg";
import DockerLogo from "./assets/images/Docker.png";
import BashLogo from "./assets/images/Bash.png";

import TwitterLogo from "./assets/images/Twitter.png";
// import BlockChainImage from "./assets/images/BlockChain.svg";
import BlockCypherLogo from "./assets/images/BlockCypher.png";
import JSwingLogo from "./assets/images/JSwing.png"
import ReduxLogo from "./assets/images/Redux.png"

export default function TechIcon({iconName, padding, iconWidth, iconHeight, labelSize}) {
  const TechIcons = {
    Angular: AngularLogo,
    "Bash / UNIX": BashLogo,
    // BlockChain: BlockChainImage,
    "BlockCypher API": BlockCypherLogo,
    Bootstrap: BootstrapLogo,
    C: CLogo,
    CSS: CSSLogo,
    DB2: DB2Logo,
    Docker: DockerLogo,
    Flask: FlaskLogo,
    Github: GithubLogo,
    HTML: HTMLLogo,
    Hadoop: HadoopLogo,
    Heroku: HerokuLogo,
    Java: JavaLogo,
    Javascript: JavascriptLogo,
    Jenkins: JenkinsLogo,
    "JSwing": JSwingLogo,
    MongoDB: MongoLogo,
    NLP: NLTKLogo,
    NLTK: NLTKLogo,
    Node: NodeLogo,
    NodeJS: NodeLogo,
    Python: PythonLogo,
    React: ReactLogo,
    "React Native": ReactLogo,
    Redis: RedisLogo,
    SQL: SQLLogo,
    Spark: SparkLogo,
    Tableau: TableauLogo,
    "Twitter API": TwitterLogo,
    Typescript: TypescriptLogo,
    Redux: ReduxLogo,
  };

  const breakSkillCardsWidth = useMediaQuery({
    query: "(max-width: 440px)",
  });

  return (
    <div style={{display: "inline-block", padding:padding, textAlign: "center"}}>
      <img
        src={TechIcons[iconName]}
        alt={TechIcons[iconName]}
        style={{
          width: breakSkillCardsWidth ? "12.5vw" : iconWidth,
          borderRadius: iconName === "Javascript" || iconName === "Typescript" ? "25%" : "0%",
          height: breakSkillCardsWidth ? "auto" : iconHeight
        }}
      ></img>
      <div
        className="mt-2"
        style={{
          fontFamily: "monospace",
          fontSize: labelSize,
          // color: skills[label][skill].color,
          fontWeight: "500",
          // border: "1px solid " + skills[label][skill].color,
        }}
      >
        {iconName}
      </div>
    </div>
  );
}
