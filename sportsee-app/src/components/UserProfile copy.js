import React, { useEffect, useState } from 'react';
import {
  getUserInfo,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance
} from '../services/apiService'; // Assurez-vous que ces importations sont correctes

import UserBarChart from './UserBarChart';
import UserRadarChart from './UserRadarChart';
import UserLineChart from './UserLineChart';
import UserScoreChart from './UserScoreChart';

const UserProfile = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfoData = await getUserInfo(userId);
        const activity = await getUserActivity(userId);
        const averageSessions = await getUserAverageSessions(userId);
        const performance = await getUserPerformance(userId);

        setUserInfo(userInfoData);
        setUserActivity(activity);
        setUserAverageSessions(averageSessions);
        setUserPerformance(performance);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Gérez les erreurs
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
{userInfo && (
  <div>
    <h2>User Information</h2>
    <p>Name: {userInfo.userInfos && userInfo.userInfos.firstName} {userInfo.userInfos && userInfo.userInfos.lastName}</p>
    <p>Age: {userInfo.userInfos && userInfo.userInfos.age}</p>
    {/* Add more user information as needed */}
  </div>
)}

{userActivity && <UserBarChart userData={userActivity} />}
      {userAverageSessions && <UserLineChart data={userAverageSessions} />}
      {userPerformance && <UserRadarChart data={userPerformance} />}

    </div>
  );
};

export default UserProfile;
