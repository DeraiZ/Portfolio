import React from "react";
import Header from "../Component/Header";
import AboutMe from "../Component/About-Me";
import Competence from "../Component/Competence";
import Project from "../Component/Project";
import Network from "../Component/Network";
import {FaArrowCircleUp} from 'react-icons/fa';
const Portfolio = () => {
  return (
      <main>
          <Header/>
          <AboutMe/>
          <Competence/>
          <Project/>
          <Network/>
          <a href={"#navbar"}><FaArrowCircleUp className={"arrow"}/></a>
      </main>
  )
}

export default Portfolio;