import React, {useRef} from "react";
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
      <div id={"navbar"} className={"navbar"}>
          <a href="/Portfolio"><h1>Mathéo Simon</h1></a>
          <div className={"link"}>
              <a href={"#about-me"}>A propos de moi</a>
              <a href={"#competence"}>Mes compétences</a>
              <a href={"#project"}>Mes projets</a>
              <a href={"#network"}>Mes Réseaux</a>
          </div>
      </div>
  )
}

export default Header;