import axios from 'axios';
import { API_CONFIG } from '../config/api.config';


export const fetchStoriesByType = async (type: string) => {
  const response = await axios.get(`${API_CONFIG.BASE_URL}/story/by-type?type=${type}`);
  return response.data;
};

export const fetchStoryById = async (id: string) => {
  const response = await axios.get(`${API_CONFIG.BASE_URL}/story/${id}`);
  return response.data;
};
