import React from "react";

const Header = () => {
  return (
      <div className={"navbar"}>
          <h1>Mathéo Simon</h1>
          <div className={"link"}>
              <a href={"#about-me"}>à propos de moi</a>
              <a href={"#competence"}>mes compétences</a>
              <a href={"#project"}>mes projets</a>
          </div>
      </div>
  )
}

export default Header;