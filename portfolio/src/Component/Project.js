import React from "react";

const Project = () => {
  return(
      <div id={"project"}>
          <div className={"project_wrapper"}>
              <div className={"project_flex"}>
                  <h1>Mes Projets</h1>
                  <p>
                      Voici certains projets réalisé durant ma formation
                  </p>
              </div>
          </div>
          <div className={"project"}>
              <div className={"NFT-MarketPlace"}>
                  <img src={require("../project_img/NFT-MarketPlace.png")} alt={"NFT-MarketPlace Project"}/>
                  <div className={"description"}>
                      <h3>Projet NFT-MarketPlace </h3>
                      <p>Projet consistant à créer une application mobile à l'aide de ExpoGO en react</p>
                      <p>21/03/2023</p>
                      <a href="https://github.com/DeraiZ/NFTMarketplace-Project">Voir Plus</a>
                  </div>
              </div>
              <div className={"dealgames"}>
                  <img src={require("../project_img/dealgames.png")} alt={"Dealgames Project"}/>
                  <div className={"description"}>
                      <p>Projet Dealgames</p>
                      <p>Projet consistant à créer un site de vente de jeux videos en ligne en Synfony. Projet toujours en développement</p>
                      <p>07/03/2023</p>
                      <a href="https://github.com/DeraiZ/DealGames_Symfony_Project">Voir Plus</a>
                  </div>

              </div>
              <div className={"skill"}>
                  <img src={require("../project_img/RockBand-FanPage.png")} alt={"Rockband Fan Page Project"}/>
                  <div className={"description"}>
                      <p>Projet RockBand - Fan Page</p>
                      <p>Projet consistant à créer un site concernant un groupe de Rock afin de se familiariser avec le référencement</p>
                      <p>31/01/2023</p>
                      <a href="https://github.com/DeraiZ/RockBand-Fanpage">Voir Plus</a>
                  </div>

              </div>
              <div className={"skill"}>
                  <img src={require("../project_img/JAVA_Games.png")} alt={"Java Games Project"}/>
                  <div className={"description"}>
                      <p>Projet JAVA Games</p>
                      <p>Projet consistant à regrouper different jeux créer en Java en un seule programme</p>
                      <p>26/01/2023</p>
                      <a href="https://github.com/DeraiZ/JAVA_Game">Voir Plus</a>
                  </div>

              </div>
              <div className={"skill"}>
                  <img src={require("../project_img/RainbowPhoto.png")} alt={"Rainbow Photo Project"}/>
                  <div className={"description"}>
                      <p>Projet Rainbow Photo</p>
                      <p>Projet consistant à créer un site afin de se familiariser avec les selecteurs graphique CSS</p>
                      <p>07/10/2021</p>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default Project