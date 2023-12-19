// Importez les données nécessaires
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../UserData/data';
import UserBarChart from './UserBarChart';
import UserRadarChart from './UserRadarChart';
import UserLineChart from './UserLineChart';
import UserScoreChart from './UserScoreChart';

// Composant UserProfile
const UserProfile = ({ userId }) => {
  // Recherche des données de l'utilisateur en fonction de l'ID
  const userData = USER_MAIN_DATA.find((user) => user.id === userId);

  // Récupération des autres données en fonction de l'ID
  const userActivity = USER_ACTIVITY.find((activity) => activity.userId === userId);
  const userAverageSessions = USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId);
  const userPerformance = USER_PERFORMANCE.find((performance) => performance.userId === userId);

  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      {userData && (
        <div>
          <p>Nom : {userData.userInfos.lastName}</p>
          <p>Prénom : {userData.userInfos.firstName}</p>
          <p>Âge : {userData.userInfos.age}</p>
          <p>Score aujourd'hui : {userData.todayScore}</p>
          <p>Calories : {userData.keyData.calorieCount}</p>
          <p>Protéines : {userData.keyData.proteinCount}</p>
          <p>Glucides : {userData.keyData.carbohydrateCount}</p>
          <p>Lipides : {userData.keyData.lipidCount}</p>

          <h3>Activité de l'utilisateur</h3>
          <UserBarChart userData={userActivity} />

          <h3>Performances de l'utilisateur (Radar Chart)</h3>
      {userPerformance && <UserRadarChart performanceData={userPerformance} />}

        
      
      <h3>Sessions Moyennes (Line Chart)</h3>
      {userAverageSessions && <UserLineChart averageSessionsData={userAverageSessions} />}

      <h3>Score de l'utilisateur (Diagramme circulaire)</h3>
<p>Score aujourd'hui :</p>
{userData && <UserScoreChart score={userData.todayScore} />}
      
    </div>
      )}
    </div>
  );
};

export default UserProfile;