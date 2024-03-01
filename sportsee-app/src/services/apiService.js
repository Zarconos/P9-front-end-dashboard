import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';

const API_BASE_URL = 'http://localhost:3000';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const USE_MOCK_DATA = true; // Set this to false when you want to use the API

export const getUserInfo = async (userId) => {
  try {
    if (USE_MOCK_DATA) {
      // Use mocked data
      const user = USER_MAIN_DATA.find((user) => user.id === userId);
      return Promise.resolve(user);
    } else {
      // Fetch data from API
      const response = await fetch(`${API_BASE_URL}/user/${userId}`);
      handleErrors(response);
      return response.json();
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

export const getUserActivity = async (userId) => {
  try {
    if (USE_MOCK_DATA) {
      // Use mocked data
      const userActivity = USER_ACTIVITY.find((activity) => activity.userId === userId);
      return Promise.resolve(userActivity);
    } else {
      // Fetch data from API
      const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
      handleErrors(response);
      return response.json();
    }
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
};



export const getUserAverageSessions = async (userId) => {
  try {
    if (USE_MOCK_DATA) {
      // Use mocked data
      const averageSessions = USER_AVERAGE_SESSIONS.find((sessions) => sessions.userId === userId);
      return Promise.resolve(averageSessions);
    } else {
      // Fetch data from API
      const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
      handleErrors(response);
      return response.json();
    }
  } catch (error) {
    console.error('Error fetching user average sessions:', error);
    throw error;
  }
};

export const getUserPerformance = async (userId) => {
  try {
    if (USE_MOCK_DATA) {
      // Use mocked data
      const performance = USER_PERFORMANCE.find((perf) => perf.userId === userId);
      return Promise.resolve(performance);
    } else {
      // Fetch data from API
      const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
      handleErrors(response);
      return response.json();
    }
  } catch (error) {
    console.error('Error fetching user performance:', error);
    throw error;
  }
};

