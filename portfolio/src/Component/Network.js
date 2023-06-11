import React from "react";

const Network = () => {
  return(
      <div id={"network"}>
          <div className={"project_wrapper"}>
              <div className={"network_flex"}>
                  <h1>Mes Réseaux</h1>
                  <p>Voici mes différents réseaux sociaux</p>
              </div>
          </div>
          <div className={"network"}>
              <div className={"facebook"}>
                  <a href="https://www.facebook.com/matheo.simon.923/"><img src={require("../Network_img/pochette_FB.png")} alt={"Facebook"}/></a>
              </div>
              <div className={"instagram"}>
                  <a href="https://www.instagram.com/mat_27120/"><img src={require("../Network_img/pochette_insta.png")} alt={"Instagram"}/></a>
              </div>
              <div>
                  <a href="https://www.linkedin.com/in/math%C3%A9o-simon-08b247230/"><img src={require("../Network_img/pochette_linkedin.png")} alt={"Linkedin"}/></a>
              </div>
          </div>
      </div>
  )
}

export default Network;