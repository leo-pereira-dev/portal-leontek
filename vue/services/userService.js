import axios from 'axios';

const baseURL = process.env.API_URL;

const apiService = axios.create({
  baseURL,
});

// Service
export const registerUser = async (userData) => {
  try {
    const response = await apiService.post('/user/register', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      // Se a resposta de erro da API contiver dados, você pode acessar a mensagem de erro
      const errorMessage = error.response.data.errors;
      throw new Error(errorMessage);
    } else {
      // Se não houver dados na resposta de erro, lance o próprio erro
      throw error;
    }
  }
};

