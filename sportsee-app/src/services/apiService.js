
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const ApiService = {
  getUserData: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur :', error);
      throw error;
    }
  },
  // Ajoutez d'autres fonctions pour les différentes requêtes nécessaires à votre application
};

export default ApiService;
