import React from "react";
import Header from "../Component/Header";
import AboutMe from "../Component/About-Me";
import Competence from "../Component/Competence";
import Project from "../Component/Project";
import Network from "../Component/Network";

const Portfolio = () => {
  return (
      <main>
          <Header/>
          <AboutMe/>
          <Competence/>
          <Project/>
          <Network/>
      </main>
  )
}

export default Portfolio;