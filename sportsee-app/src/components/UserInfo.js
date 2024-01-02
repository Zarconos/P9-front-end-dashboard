import React from 'react';
import cal from "../assets/calories-icon.png";
import prot from "../assets/protein-icon.png";
import lip from "../assets/fat-icon.png";
import glu from "../assets/carbs-icon.png";
import "../style/Style.css"


const UserInfo = ({ userInfo }) => {
  if (!userInfo || !userInfo.data || !userInfo.data.userInfos) {
    // Vous pouvez afficher un message d'erreur ou un indicateur de chargement ici
    return <div>Données non disponibles</div>;
  }

  const { userInfos, keyData } = userInfo.data;

  return (
    <div id="top">
        <div id="title">
      <h2>Bonjour</h2> <h3>{userInfos.firstName}</h3>
      <p id="catch_phrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      <div id="nutrition">
        <div class="nutrition_detail">
            <img src={cal} alt="side" />
          <p>{keyData.calorieCount}Kcal</p>
          <p>calories</p>
        </div>
        <div class="nutrition_detail">
        <img src={prot} alt="side" />
          <p>{keyData.proteinCount}g</p>
          <p>protéines</p>
        </div>
        <div class="nutrition_detail">
        <img src={glu} alt="side" />
          <p>{keyData.carbohydrateCount}g</p>
          <p>glucides</p>
        </div>
        <div class="nutrition_detail">
        <img src={lip} alt="side" />
          <p>{keyData.lipidCount}g</p>
          <p>lipides</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
