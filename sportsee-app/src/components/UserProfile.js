
import React, { useEffect, useState } from 'react';
import { getUserInfo, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/apiService';
import UserBarChart from './UserBarChart';
import UserLineChart from './UserLineChart';
import UserRadarChart from './UserRadarChart';
import UserScoreChart from './UserScoreChart';
import UserInfo from './UserInfo';
import "../style/Style.css"


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
      }
    };
  
    fetchData();
  }, [userId]);

  return (
    <div>
      {userInfo && (
        <div id="content">
          <UserInfo userInfo={userInfo} />
          <UserBarChart userData={userActivity} />
            <div id="bottom">
              <h1 id="average_session">Durée moyenne des sessions</h1>
          <UserLineChart userData={userAverageSessions} />
          <UserRadarChart userData={userPerformance} />
              <h1 id="user_score">Score</h1>
          <UserScoreChart userData={userInfo} />
            </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
