import React from 'react';
import cal from "../assets/calories-icon.png";
import prot from "../assets/protein-icon.png";
import lip from "../assets/fat-icon.png";
import glu from "../assets/carbs-icon.png";
import "../style/Style.css"


const UserInfo = ({ userInfo }) => {
  if (!userInfo || !userInfo.data || !userInfo.data.userInfos) {
    return <div>Données non disponibles</div>;
  }

  const { userInfos, keyData } = userInfo.data;

  return (
    <div id="top">
        <div id="title">
      <div id="title_welcome"><h2>Bonjour</h2> <h3>{userInfos.firstName}</h3></div>
      <p id="catch_phrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      <div id="nutrition">
        <div class="nutrition_detail">
            <img src={cal} alt="side" />
            <div class="nutrition_detail_text">
              <p class="nutrition_data">{keyData.calorieCount}Kcal</p>
              <p class="nutrition_name">calories</p>
            </div>
        </div>
        <div class="nutrition_detail">
        <img src={prot} alt="side" />
        <div class="nutrition_detail_text">
          <p class="nutrition_data">{keyData.proteinCount}g</p>
          <p class="nutrition_name">protéines</p>
          </div>
        </div>
        <div class="nutrition_detail">
        <img src={glu} alt="side" />
        <div class="nutrition_detail_text">
          <p class="nutrition_data">{keyData.carbohydrateCount}g</p>
          <p class="nutrition_name">glucides</p>
          </div>
        </div>
        <div class="nutrition_detail">
        <img src={lip} alt="side" />
        <div class="nutrition_detail_text">
          <p class="nutrition_data">{keyData.lipidCount}g</p>
          <p class="nutrition_name">lipides</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
