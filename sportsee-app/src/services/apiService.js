const API_BASE_URL = 'http://localhost:3000';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getUserInfo = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    handleErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
    handleErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
    handleErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error fetching user average sessions:', error);
    throw error;
  }
};

export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
    handleErrors(response);
    return response.json();
  } catch (error) {
    console.error('Error fetching user performance:', error);
    throw error;
  }
};
