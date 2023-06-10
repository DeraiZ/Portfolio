import React from "react";

const Header = () => {
  return (
      <div className={"navbar"}>
          <h1>Mathéo Simon</h1>
          <div className={"link"}>
              <a href={"#about-me"}>A propos de moi</a>
              <a href={"#competence"}>Mes compétences</a>
              <a href={"#project"}>Mes projets</a>
          </div>
      </div>
  )
}

export default Header;