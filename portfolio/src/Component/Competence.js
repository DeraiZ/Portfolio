import React from "react";

const Compétence = () => {
  return(
      <div id={"competence"}>
          <div className={"wrapper"}>
              <div className={"flex"}>
                  <h1>Mes Compétences</h1>
                  <p>Retrouvez ici mes differentes compétences apprise ou en apprentissage:</p>
              </div>
          </div>
          <div className={"skills"}>
              <h2>Programmation</h2>
                 <div className={"competence programmation"}>
                  <div  className={"skill"}>
                    <img src={require("../img/disquette-html.png")} alt={"HTML 5"}/>
                    <p>HTML</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-css.png")} alt={"CSS 3"}/>
                    <p>CSS</p>
                  </div>
                  <div className={"skill"}>
                      <img src={require("../img/disquette-js.png")} alt={"JS"}/>
                      <p>JS</p>
                  </div>
                  <div className={"skill"}>
                      <img src={require("../img/disquette-php.png")} alt={"PHP"}/>
                      <p>PHP</p>
                  </div>
                  <div className={"skill"}>
                      <img src={require("../img/disquette-python.png")} alt={"Python"}/>
                      <p>Python</p>
                  </div>
              </div>
              <h2>Base de Données</h2>
              <div className={"competence bdd"}>
                  <div className={"skill"}>
                      <img src={require("../img/disquette-SQL.png")} alt={"MySQL"}/>
                      <p>MySQL</p>
                  </div>
              </div>
              <h2>Design</h2>
              <div className={"competence design"}>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-XD.png")} alt={"Adobe XD"}/>
                      <p>Adobe XD</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-PS.png")} alt={"Photoshop"}/>
                      <p>Photoshop</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-IL.png")} alt={"Illustrator"}/>
                      <p>Illustrator</p>
                  </div>
              </div>
              <h2>Versioning</h2>
              <div className={"competence versioning"}>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-docker.png")} alt={"Docker"}/>
                      <p>Docker</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-github.png")} alt={"GitHub"}/>
                      <p>GitHub</p>
                  </div>
              </div>
              <h2>Framework</h2>
              <div className={"competence framework"}>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-jq.png")} alt={"JQuery"}/>
                      <p>JQuery</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-react.png")} alt={"React"}/>
                      <p>React</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-sf.png")} alt={"Symfony"}/>
                      <p>Symfony</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-Bootstrap.png")} alt={"Bootstrap"}/>
                      <p>Bootstrap</p>
                  </div>
              </div>
              <h2>CMS</h2>
              <div className={"competence cms"}>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-WP.png")} alt={"Wordpress"}/>
                      <p>Wordpress</p>
                  </div>
                  <div className={"skill"}>
                    <img src={require("../img/disquette-Prestashop.png")} alt={"Prestashop"}/>
                      <p>Prestashop</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Compétence